//~~tv:20067.20160615
//~~tc: Adding cachebuster and @@ placeholder support.
//~~tc: Re-structuring mapping and the assembly of the URL to simplify the template.

//tealium universal tag - utag.sender.20067 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
  (function(id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start encode
    u.encode = function(a, b) { b = ""; try { b = encodeURIComponent(a)}catch(e){utag.DB(e);} if (b == ""){b = escape(a);} return b }
    // End encode

    u.ev = {"view" : 1};

    // Function to replace @@ placeholders
    u.rp = function (a, b) {
      if (typeof a !== "undefined" && a.indexOf("@@") > 0) {
        a = a.replace(/@@([^@]+)@@/g, function (m, d) {
          if (b[d]) {
            return u.encode(b[d]);
          } else {
            return "";
          }
        });
      }
      return a;
    };

    ##UTGEN##

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {

        var c, d, e, f;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "qs_delim" : "?",
          "tag_type" : "##UTVARconfig_tagtype##",
          "base_url" : "##UTVARconfig_baseurl##",
          "secure_base_url" : "##UTVARconfig_securebaseurl##",
          "static_params" : "##UTVARconfig_staticparams##",
          "cachebust" : "##UTVARconfig_cachebust##",
          "cachevar" : "##UTVARconfig_cachevar##" || "_rnd"
        };

        // Start tag-scoped extensions
        ##UTEXTEND##
        // End tag-scoped extensions

        utag.DB("send:##UTID##:EXTENSIONS");
        utag.DB(b);

        c = [];

        for (d in utag.loader.GV(u.map)) {
          if (typeof b[d] !== "undefined" && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (!u.data.hasOwnProperty(e[f])) {
                c.push(e[f] + "##kvp_delim##" + u.encode(b[d]));
              }
              u.data[e[f]] = b[d];
            }
          }
        }

        u.data.secure_base_url = u.data.secure_base_url || u.data.base_url;

        u.data.url = (location.protocol === "https:" ? u.data.secure_base_url : u.data.base_url);

        if (u.data.url.indexOf("http") !== 0 && u.data.url.indexOf("/") !== 0) {
          u.data.url = location.protocol + "//" + u.data.url;
        }

        if (u.data.static_params) {
          c.push(u.data.static_params);
        }

        var cb_check = new RegExp("(\\" + u.data.qs_delim + "|" + u.data.qsp_delim + ")" + u.data.cachevar + "=");
        if (u.data.cachebust === "enabled" && !cb_check.test(u.data.url)) {
          c.push([u.data.cachevar, Math.random()].join(u.data.kvp_delim));
        }

        if (c.length > 0) {
          if (u.data.url.indexOf(u.data.qs_delim) < 0) {
            u.data.url += u.data.qs_delim;
          } else if (u.data.url.indexOf(u.data.qs_delim) !== (u.data.url.length -1)) {
            u.data.url += u.data.qsp_delim;
          }
        }

        u.data.url = u.rp(u.data.url, b) + c.join(u.data.qsp_delim);
        u.data.url = u.data.url.replace(/##kvp_delim##/g, u.data.kvp_delim);

        u.loader({
          "type" : u.data.tag_type,
          "src" : u.data.url,
          "loc" : "script",
          "id" : "utag_##UTID##"
        });

        utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("##UTID##", "##UTLOADERID##"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
