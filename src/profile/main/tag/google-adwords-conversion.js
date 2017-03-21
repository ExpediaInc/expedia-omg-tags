//~~tv:7117.20160712
//~~tc: Update to support pass google_conversion_order_id from the E-Commerce extension
//~~anlagnada   04-Oct-2016 - added omgpixel fire
//
//tealium universal tag - utag.sender.7117 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
    (function(id,loader,u){
        u=utag.o[loader].sender[id]={};

        // Please do not modify
        if (utag.ut === undefined) { utag.ut = {}; }
        // Start Tealium loader 4.35
        if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
        // End Tealium loader

        u.ev={'view':1};
        u.initialized = false;
        u.data={};
        u.data.google_conversion_id = ##UTVARconfig_id##;
        u.data.google_conversion_language = "en";
        u.data.google_conversion_format = "3";
        u.data.google_conversion_color = "ffffff";
        u.data.google_conversion_label = "##UTVARconfig_label##";
        u.data.google_conversion_value = "##UTVARconfig_value##";
        u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";
##UTGEN##
  u.send=function(a,b){
      if(u.ev[a]||typeof u.ev.all!="undefined"){
      ##UTEXTEND##
      var c,d,e,f,g;
          g = {};
          for (d in utag.loader.GV(u.map)) {
              if (typeof b[d] !== "undefined" && b[d] !== "") {
                  e = u.map[d].split(",");
                  for (f = 0; f < e.length; f++) {
                      u.data[e[f]] = b[d];
                  }
              }
          }
          u.data.google_conversion_id = parseInt(u.data.google_conversion_id);
          u.data.google_conversion_value = u.data.google_conversion_value || b._csubtotal;
          u.data.google_conversion_currency = u.data.google_conversion_currency || b._ccurrency;
          u.data.google_conversion_order_id = u.data.order_id || b._corder || "";

          if ( u.data.google_conversion_order_id ) {
              g.google_conversion_order_id =  u.data.google_conversion_order_id;
          }
          g.google_conversion_id =  u.data.google_conversion_id;
          g.google_conversion_language =  u.data.google_conversion_language;
          g.google_conversion_format =  u.data.google_conversion_format;
          g.google_conversion_color =  u.data.google_conversion_color;
          g.google_conversion_label =  u.data.google_conversion_label;
          g.google_conversion_value =  u.data.google_conversion_value;
          g.google_conversion_currency =  u.data.google_conversion_currency;

          u.gac_callback=function(){
              window.google_trackConversion( g );
          };
          if (!u.initialized) {
              u.initialized = true;
              u.loader({src:u.data.base_url, cb:u.gac_callback});
          } else {
              u.gac_callback();
          }
      }

      omg.pixel.fireTagPixel({ id: id, name: 'google-adwords', label: 'Google Adwords Conversion', context: {u: u, b: b}});
      //For testing pixel logs
      if(utag_data["tealium_environment"].indexOf("prod") != -1){
          u.img2 = new Image();
          var pixelGoogleAdWords = u.data.base_url + "/?serverTimestamp=" + encodeURIComponent(new Date().toISOString()) +"&UID="+id+"&orderNumber="+ utag_data["entity.checkout.orderNumber"];
          var logGoogleAdWords = 'https://queue.amazonaws.com/278265713271/tracking-tags?Action=SendMessage&Version=2009-02-01&MessageBody='
              + encodeURIComponent(pixelGoogleAdWords);
          u.img2.src = logGoogleAdWords;
      }

  };
        utag.o[loader].loader.LOAD(id);
    })('##UTID##','##UTLOADERID##');
}catch(e){}
//end tealium universal tag