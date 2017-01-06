//~~tv:3004.20150326
//~~tc: Adding support for order details: OID, AMOUNT, and CURRENCY

//tealium universal tag - Commission Junction - utag.sender.3004 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { b.hFlag = 0; b.onreadystatechange = function () { if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) { b.hFlag = 1; o.cb(); } }; b.onload = function () { if (!b.hFlag) { b.hFlag = 1; o.cb(); } }; } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    
    u.ev = {"view" : 1};
    u.check=function(a,b,c){c=0;for(var d in b)c+=a==b[d]?1:0;return c>0;};
    ##UTGEN##
    u.send = function (a,b) { 
      if (u.ev[a] || typeof u.ev.all !== "undefined") {

        var c, d, e, f;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "cid" : "##UTVARconfig_cid##",
          "stype" : "##UTVARconfig_stype##",
          "aid" : "##UTVARconfig_aid##",
          "containerid" : "##UTVARconfig_containerid##",
          "base_url" : "//www.emjcd.com/",
          // Order specific variables
          "OID" : "",
          "AMOUNT" : "",
          "CURRENCY" : "",
          "DISCOUNT" : "",
          // Product specific variables
          "ITEM" : "",
          "AMT" : "",
          "QTY" : "",
          "DCNT" : ""
        };

        ##UTEXTEND##

        c=[];

        for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
          // Only the following variables can be mapped into in u.data
          if(u.check(e[f], ['aid','cid','containerid',"OID","AMOUNT","CURRENCY",'DISCOUNT','ITEM','AMT','QTY','DCNT'])) {
            u.data[e[f]]=b[d];
          }else{
            c.push(e[f]+'='+b[d]);
          }
        }}}
        var _cprod = b._cprod ? b._cprod.slice(0) : [];
        var _cprice = b._cprice ? b._cprice.slice(0) : [];
        var _cquan = b._cquan ? b._cquan.slice(0) : [];
        var _cpdisc = b._cpdisc ? b._cpdisc.slice(0) : [];

        u.data.OID = (u.data.OID !== "") ? u.data.OID : b._corder;
        if (typeof u.data.OID !== "undefined" && u.data.OID) {
          u.data.CURRENCY = (u.data.CURRENCY !== "") ? u.data.CURRENCY : b._ccurrency;
          c.push('CID='+u.data.cid);
          c.push('OID='+u.data.OID);
          c.push('TYPE='+u.data.aid);
          c.push('CURRENCY='+(u.data.CURRENCY !== "" ? u.data.CURRENCY : "USD"));
          if(u.data.stype=="advanced"){
            u.data.ITEM = utag.ut.typeOf(u.data.ITEM) != "array" ? [u.data.ITEM] : u.data.ITEM || _cprod;
            u.data.AMT = utag.ut.typeOf(u.data.AMT) != "array" ? [u.data.AMT] : u.data.AMT  || _cprice;
            u.data.QTY = utag.ut.typeOf(u.data.QTY) != "array" ? [u.data.QTY] : u.data.QTY  || _cquan;
            u.data.DCNT = utag.ut.typeOf(u.data.DCNT) != "array" ? [u.data.DCNT] : u.data.DCNT || _cpdisc;
            for(d=0;d<u.data.ITEM.length;d++){
              c.push('ITEM'+(d+1)+'='+u.data.ITEM[d]);
              c.push('AMT'+(d+1)+'='+(u.data.AMT[d] || '0'));
              c.push('QTY'+(d+1)+'='+(u.data.QTY[d] || '1'));
              if(u.data.DCNT[d]){ c.push('DCNT'+(d+1)+'='+u.data.DCNT[d]);}
            }
          }else{
            u.data.AMOUNT = (u.data.AMOUNT !== "") ? u.data.AMOUNT : b._csubtotal;
            c.push('AMOUNT='+(u.data.AMOUNT !== "" ? u.data.AMOUNT : "0"));
          }
          if(u.data.DISCOUNT){
            c.push('DISCOUNT='+u.data.DISCOUNT);
          }
        }
        if(u.data.containerid===""){
          u.data.base_url+="u?";
          c.push('METHOD=IMG');
          u.data.img=new Image();u.data.img.src=u.data.base_url+c.join(u.data.qsp_delim);
        }else{
          u.data.base_url+="tags/c?containerTagId="+u.data.containerid+"&";
          d=document.createElement("iframe");d.setAttribute('id','##UTID##');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',u.data.base_url+c.join(u.data.qsp_delim));document.body.appendChild(d);
        }
      }
    };
    try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
  })('##UTID##','##UTLOADERID##');
}catch(e){}
//end tealium universal tag
