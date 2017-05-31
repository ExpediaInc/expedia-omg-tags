// Moveable Ink Behavioral and Conversion - Custom
//tealium universal tag - utag.sender.custom_container ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

    ##UTGEN##

    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          "base_url" : "",
          "promo": "", 
          "prodname": "", 
          "revenue": "", 
          "sku": "", 
          "price": "",
          "quantity": "",
          "oid": "",
    "description": ""
        };


        ##UTEXTEND##

        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }

      u.data.revenue = u.data.revenue || b._csubtotal || "";
      u.data.sku = u.data.sku || "";
      u.data.price = u.data.price || b._cprice || "";
      u.data.prodname = u.data.prodname || b._cprodname || "";
      u.data.quantity = u.data.quantity || b._cquan || "";
      u.data.oid = u.data.oid || b._corder || "";
      u.data.promo = u.data.promo || b._cpromo || "";
      u.data.description = u.data.description || "";

            
      (function(m,o,v,a,b,l,e) {
       m['MovableInkTrack'] = b;
       l = o.createElement(v);
       e = o.getElementsByTagName(v)[0];
       l.type = 'text/javascript'; l.async = true;
       l.src = '//' + a + '/p/js/1.js';
       m[b] = m[b] || function() { (m[b].q=m[b].q||[]).push(arguments); };
       e.parentNode.insertBefore(l, e);
      })(window, document, 'script', 'bbb5krzc.micpn.com', 'mitr');
          
       
          
       if (typeof u.data.oid !== 'undefined' && u.data.oid !== '') {
              if (typeof u.data.promo !== 'undefined' && u.data.promo !== '') {
                  mitr('addPromo', {
                      'code': u.data.promo,
                      'description': u.data.description
                  });
              }
              if (typeof u.data.price !== 'undefined' && u.data.price !== '') {
                  //for (var i = 0; i < u.data.sku.length; i++) {
                      mitr('addProduct', {
                          'sku': u.data.sku,
                          'name': u.data.prodname,
                          'price': u.data.price,
                          'quantity': u.data.quantity
                      });
                  //}
              }
              mitr('send', 'conversion', {
                  'revenue': u.data.revenue,
                  'identifier': u.data.oid
              });
          }
          
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("##UTID##", "##UTLOADERID##");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
