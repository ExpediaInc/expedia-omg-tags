UID 193 --  not modified

//~~tv:20010.20140827
//~~tc: TripAdvisor
   
window.taq = window.taq || function() {}
window.taq.queue = window.taq.queue = [];  

/*function getUrlParam( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
} */

//tealium universal tag - utag.sender.custom_container ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }

    u.ev = {'view' : 1};

    u.initialized = false;

    ##UTGEN##

    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");
        var c, d, e, f, i;
        u.data = {
          "travel_start_date": "",
          "travel_end_date": "",
          "track_action": "",
          "is_member": "",
          "pixel_id" : "",
          "page_type" : "",
          "order_id": "",
          "refid": "",
          "gbv": "",
          "currency": "",
          "base_url" : "//www.tripadvisor.com/js3/taevents-c.js" 
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
  
        if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) {
          return
        }

        var mid = b['cp.mid_cookie'] ? b['cp.mid_cookie'].replace(/M/,"") : "";
        var gbv = b['checkout.cartTotal.amount'] ? b['checkout.cartTotal.amount'] * 100 : .00;
          
        u.data.pixel_id = u.data.pixel_id || "934926769";
        u.data.partner_id = u.data.partner_id || "Hotwire";
        u.data.order_id = u.data.order_id || b['checkout.itineraryNumber'] || "";
        u.data.track_action = u.data.order_id ? "BOOKING_CONFIRMATION" : "PAGEVIEW";
        u.data.travel_start_date = u.data.travel_start_date || b['checkInDate'] || "";
        u.data.travel_end_date = u.data.travel_end_date || b['checkOutDate'] || "";
        u.data.page_type = u.data.page_type || b['utagPageName'] || "";
        u.data.refid = u.data.refid || mid;
        u.data.gbv = u.data.gbv || gbv;
        u.data.currency = u.data.currency || b['currencyCode'] || "";

        u.loader_cb = function () {
          u.initialized = true;
          taq('init', u.data.pixel_id);
          if (u.data.order_id) {
            taq('track', u.data.track_action, {
              'partner': u.data.partner_id,
              'refid': u.data.refid,
              'gbv': u.data.gbv,
              'currency': u.data.currency,
              'order_id': u.data.order_id
            });
          } else {
            taq('track', u.data.track_action, {
              'travel_start_date': u.data.travel_start_date,
              'travel_end_date': u.data.travel_end_date,
              'page_type': u.data.page_type
            });
          }
        };

          if (!u.initialized) {
            u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_##UTID##' });
          } else {
            u.loader_cb();
          }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }

    };

    utag.o[loader].loader.LOAD(id);

  })("##UTID##", "##UTLOADERID##");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag