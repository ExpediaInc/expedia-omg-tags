//~~tv:1024.20150119
//~~tc: E-Commerce Update, stop array access of undefined E-Commerce variables

//tealium universal tag - utag.sender.1024 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
    (function(id,loader,u){
        try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
        u.ev={'view':1};
##UTGEN##
  u.send=function(a,b,c,d,e,f){
      if(u.ev[a]||typeof u.ev.all!='undefined'){


          u.data = {
              "qsp_delim" : "&",
              "kvp_delim" : "=",
              "o" : {},
              "sale_parts" : "",
              "merchant" : "##UTVARconfig_merchantid##",
              "base_url" : "//www.dwin1.com/"
          };
      

      ##UTEXTEND##
      u.local_utag_data = utag.handler.C(b);
          c=[];

          // Start Mapping
          for (d in utag.loader.GV(u.map)) {
              if (b[d] !== undefined && b[d] !== "") {
                  e = u.map[d].split(",");
                  for (f = 0; f < e.length; f++) {
                      if(e[f]=='commission_group'){
                          u.data.sale_parts=b[d]
                      }else{
                          u.data.o[e[f]]=b[d];
                          u.data[e[f]] = b[d];
                      }
                  }
              }
          }
          // End Mapping

          u.data.base_url += u.data.merchant + ".js";

          if(u.data.o.orderRef || b._corder){
              window.AWIN = {};
              window.AWIN.Tracking = {};
              window.AWIN.Tracking.Sale=u.data.o;
              u.data.o.amount=(u.data.o.amount?u.data.o.amount:b._csubtotal);
              u.data.o.orderRef=(u.data.o.orderRef?u.data.o.orderRef:b._corder);
              u.data.o.currency=(u.data.o.currency?u.data.o.currency:b._ccurrency);
              u.data.o.voucher=(u.data.o.voucher?u.data.o.voucher:b._cpromo);
              u.data.o.test=(u.data.o.test?"1":"0");

              if(u.data.sale_parts!=''){
                  u.data.o.parts = u.data.sale_parts+':'+u.data.o.amount;
              }

              // Use the _ccat2 to build the parts= value
              /*
               if(typeof u.o.parts=="undefined" && typeof b._ccat2!="undefined" && b._ccat2.length>0){
               e=[];
               for(f=0;f<b._ccat.length;f++){
               u.parts+=b._ccat2[f]+":"+b._cprice[f];
               }
               u.parts=e.join("|");
               }
               */

              if(typeof u.data.o.parts=="undefined"){
                  u.data.o.parts = 'DEFAULT:'+u.data.o.amount;
              }

              e='<form style="display:none;" name="aw_basket_form">\n';
              e+='<textarea wrap="physical" id="aw_basket">\n';
              //AW:P|MERCHANT_ID|ORDER_REF|PRODUCT_ID|PRODUCT_NAME|UNIT_PRICE|QUANTITY|SKU_DATA|COMMISSION_GROUP|CATEGORY
              var _ccat = b._ccat ? b._ccat.slice(0) : [];
              var _cprice = b._cprice ? b._cprice.slice(0) : [];
              var _cprod = b._cprod ? b._cprod.slice(0) : [];
              var _cprodname = b._cprodname ? b._cprodname.slice(0) : [];
              var _cquan = b._cquan ? b._cquan.slice(0) : [];
              var _csku = b._csku ? b._csku.slice(0) : [];

              for(f=0;f<_cprod.length;f++){
                  //e+='AW:P|'+u.merchant+'|'+u.o.orderRef+'|'+_cprod[f]+'|'+_cprodname[f]+'|'+_cprice[f]+'|'+_cquan[f]+'|'+_csku[f]+'|'+(_ccat2[f]?_ccat2[f]:"DEFAULT")+'|'+_ccat[f]+'\n';
                  e+='AW:P|'+u.data.merchant+'|'+u.data.o.orderRef+'|'+_cprod[f]+'|'+_cprodname[f]+'|'+_cprice[f]+'|'+_cquan[f]+'|'+_csku[f]+'|DEFAULT|'+_ccat[f]+'\n';
              }
              e+='</textarea>\n';
              e+='</form>\n';
              d=document.createElement("div");
              d.innerHTML=e;
              document.getElementsByTagName("body")[0].appendChild(d);
          }

          u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.data.base_url+c.join(u.data.qsp_delim);
          u.s.parentNode.insertBefore(u.scr,u.s);

      }
  };
        try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
    })('##UTID##','##UTLOADERID##');
}catch(e){
    utag.DB(error);
}
//end tealium universal tag
