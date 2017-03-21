//~~tv:6026.20160119
//~~tc: Updates include:
//      Fix logic for auto add of Purchase event
//      Default event logic update for UI "selected" issue
//~~anlagnada: 19-Sep-2016  Added omg pixel fire to collector-web
//~~anlagnada: 04-Oct-2016  omgpixel fire renamed

// Custom - If browser is IE, make sure fbq is defined right away to
// avoid race condition
if(isIE()) {
    !function(f, n) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
    }(window, document);
}
// End - Custom

//tealium universal tag - utag.sender.6026 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
    (function (id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;

        // Please do not modify
        if (utag.ut === undefined) { utag.ut = {}; }
        // Start Tealium loader 4.35
        if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
        // End Tealium loader
        // Start Tealium typeOf 4.35
        if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
        // End Tealium typeOf
        // Start Tealium Merge
        if (utag.ut.merge === undefined) {u.merge = function(a, b, c, d) {if(c){for(d in utag.loader.GV(b)){a[d] = b[d];}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined"){a[d] = b[d];}}}};} else { u.merge = utag.ut.merge; }
        // End tealium Merge

        u.ev = {"view" : 1, "link" : 1};
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "ViewContent" : {obj: "vc", "map" :             ["value","currency","content_name","content_ids","content_category"]},
            "Search" : {obj: "search", "map" :              ["value","currency","content_category","content_ids"]},
            "AddToCart" : {obj: "cart", "map" :             ["value","currency","content_name","content_ids"]},
            "AddToWishlist" : {obj: "wish", "map" :         ["value","currency","content_name","content_ids"]},
            "InitiateCheckout" : {obj: "cout", "map" :      ["value","currency","content_name","content_ids","num_items"]},
            "AddPaymentInfo" : {obj: "payment", "map" :     ["value","currency","content_category","content_ids"]},
            "Purchase" : {obj: "purch", "map" :             ["value","currency","content_name","content_ids","num_items"]},
            "Lead" : {obj: "lead", "map" :                  ["value","currency","content_name","content_category"]},
            "CompleteRegistration" : {obj: "reg", "map" :   ["value","currency","content_name"]},
            "Conversion" : {obj: "cnv", "map" :             ["value","currency"]},
            "Custom" : {obj: "cust", "map" : []},
            "PageView" : {obj: "page", "map" : []}
        };
        u.std_params = {
            "value" : function(g, event){
                if (g.value === undefined || g.value === "") {
                    if (event === "ViewContent" || event === "AddToCart") {
                        g.value = u.data.ecom.product_unit_price;
                    } else {
                        g.value = u.data.ecom.order_subtotal;
                    }
                }
                g.value = u.val(g.value);
            },
            "currency" : function(g) {
                if (!g.currency) {g.currency = u.data.ecom.order_currency;}
            },
            "content_name" : function(g){
                if (!g.content_name) {g.content_name = u.data.ecom.product_name;}
                g.content_name = u.val(g.content_name);
            },
            "content_ids" : function(g){
                // custom - content id only on hotel, pkg, and lx pages
                var pn_s = utag.data['utagPageName'].toLowerCase();
                if (typeof utag.data['utagPageName'] != "undefined" && (pn_s.indexOf('hotel') < 0) && (pn_s.indexOf('fhc.') < 0) && (pn_s.indexOf('package') < 0)&& (pn_s.indexOf('lx') < 0)) {
                    g.content_ids = "";
                } else {
                    if (!g.content_ids) {
                        // custom product id (mapping did not suffice)
                        g.content_ids = utag.data.hotelId; // custom
                    }
                    if (u.typeOf(g.content_ids) !== "array") {
                        g.content_ids = g.content_ids.toString().split(/\s*,\s*/);
                    }
                }
            },
            "content_category" : function(g){
                if (!g.content_category) {g.content_category = u.data.ecom.product_category;}
                g.content_category = u.val(g.content_category);
            },
            "num_items" : function(g) {
                if (!g.num_items && u.data.calc_items === "true") {g.num_items = u.calc_items(u.data.ecom.product_quantity);}
            }
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr,obj[i], item);
            } else {
                obj[i] = item;
            }
        };

        u.val = function(value){
            return u.typeOf(value) === "array" ? value[0] : value;
        };
        u.remove_empty = function(a) {
            var b, t;
            for (b in utag.loader.GV(a)) {
                t = u.typeOf(a[b]);
                if (t === "object") {
                    u.remove_empty(a[b]);
                    if (utag.ut.isEmptyObject(a[b])) {
                        try {delete a[b];} catch(e) {a[b]=undefined;}
                    }
                } else if (!((a[b] === 0 || a[b] === false) ? !0 : (t === "array" && a[b].length === 0) ? !1 : !!a[b])){
                    try {delete a[b];} catch(e) {a[b]=undefined;}
                }
            }
            return a;
        };
        u.calc_items = function(quan) {
            var q, i = 0;
            for (q = 0; q < quan.length; q++) {
                i += parseInt(quan[q]);
            }
            return i;
        };

    ##UTGEN##

    u.send = function (a, b) {
        if (u.ev[a] || u.ev.all !== undefined) {
            //##UTENABLEDEBUG##utag.DB("send:##UTID##");

            var c, d, e, f, g, h, evt = [];


            u.data = {
                //##UTVARconfig_<id from config>##
                "qsp_delim" : "&",
                "kvp_delim" : "=",
                "base_url" : "//connect.facebook.net/en_US/fbevents.js",
                "cust_pixel" : "##UTVARconfig_cust_pixel##",
                "conv_pixel" : "##UTVARconfig_conv_pixel##",
                "page_view" : "##UTVARconfig_page_view##",
                "calc_items" : "##UTVARconfig_calc_items##",
                "default_event" : "##UTVARconfig_default_event##",
                "custom_data" : {},
                "custom_event" : "",
                // E-Commerce Vars
                "product_id" : [],
                "product_name" : [],
                "product_category" : [],
                "product_unit_price" : [],
                "product_quantity" : [],
                "evt_list" : [],
                "ecom" : {},
                "log_attribution": "", // custom - fire the log attribution event only if the attribution value is different
                "track_attribution": "", // custom option to enable attribution tracking
                "attribution": {} // custom attribution object
            };

            // Start tag-scoped extensions
        ##UTEXTEND##
            // End tag-scoped extensions

            c = [];

            // Start Mapping
            for (d in utag.loader.GV(u.map)) {
                if (b[d] !== undefined && b[d] !== "") {
                    e = u.map[d].split(",");
                    for (f = 0; f < e.length; f++) {
                        u.map_func(e[f].split("."), u.data, b[d]);
                    }
                } else {
                    h = d.split(":");
                    if(h.length === 2 && b[h[0]] === h[1]){
                        if(u.map[d]){
                            evt = evt.concat(u.map[d].split(","));
                        }
                    }
                }
            }
            // End Mapping

            //Convert evt_list into an array, if passed as a csv
            if(u.data.evt_list && u.typeOf(u.data.evt_list) !== "array") {
                u.data.evt_list = u.data.evt_list.split(/\s*,\s*/);
            }

            if (u.data.default_event !== "None" && u.data.default_event !== "") {
                u.data.evt_list.push(u.data.default_event);
            }
            u.data.evt_list = u.data.evt_list.concat(evt);
            //u.data.evt_list = u.data.evt_list || b._cevent || "";

            // Pull E-Commerce extension values
            // Mappings override E-Commerce extension values
            g = u.data.ecom;
            g.order_id = u.data.order_id || b._corder || "";
            g.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
            g.order_currency = u.data.order_currency || b._ccurrency || "";
            if (u.data.product_name.length === 0 && b._cprodname !== undefined) { g.product_name = b._cprodname.slice(0); } else { g.product_name = u.data.product_name; }
            if (u.data.product_id.length === 0 && b._cprod !== undefined) { g.product_id = b._cprod.slice(0); }  else { g.product_id = u.data.product_id; }
            if (u.data.product_category.length === 0 && b._ccat !== undefined) { g.product_category = b._ccat.slice(0); }  else { g.product_category = u.data.product_category; }
            if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { g.product_unit_price = b._cprice.slice(0); } else { g.product_unit_price = u.data.product_unit_price; }
            if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { g.product_quantity = b._cquan.slice(0); } else { g.product_quantity = u.data.product_quantity; }
            u.data.track_attribution = u.data.track_attribution || "true"; // custom option to override attribution through mapping
            u.data.log_attribution = u.data.log_attribution || ""; // custom - will either be "true" or "false" based on RLT extension

            // Start Loader Callback
            u.loader_cb = function () {
                var g = {}, i,j, _event, _track = "track";

                if (u.data.evt_list.toString().indexOf("Purchase") === -1 && u.data.ecom.order_id) {
                    u.data.evt_list.push("Purchase");
                }

                for (i = 0; i < u.data.evt_list.length; i++) {
                    _event = u.data.evt_list[i];

                    f = u.event_lookup[_event];

                    c = f ? f.map : [];
                    f = f ? f.obj : _event;

                    g = u.data[f] = u.data[f] || {};

                    for (j = 0; j < c.length; j++) {
                        u.std_params[c[j]](g,_event);
                    }

                    if (_event === "ViewContent" || _event === "AddToCart" ) {
                        //If items aren't present revert to E-Commerce data
                        //if (!g.content_type) {g.content_type ='product';}
                        /*
                         Either 'product' or 'product_group' based on the content_ids being passed.
                         If the ids being passed in content_ids parameter are ids of products then the value should be 'product'.
                         If product group ids are being passed, then the value should be 'product_group'.
                         */

                    } else if (_event === "Lead") {
                        //If items aren't present revert to E-Commerce data
                        if (!g.content_category) {g.content_category ='Quote';}

                    } else if (_event === "Search") {
                        //If items aren't present revert to E-Commerce data
                        if (!g.content_category) {g.content_category ='Product Search';}

                    } else if (_event === "Conversion" && u.data.conv_pixel) {
                        _event = u.data.conv_pixel;
                        // custom - removed this block if it is "AttributionLog" because it doesnt work for our use case
                    } else if (_event && _event != "LogAttribution" && !u.event_lookup[_event]) {
                        _track = "trackCustom";
                        g = u.data[_event];
                    }

                    if (g.value !== undefined) {
                        if(u.typeOf(g.value) === "array") {
                            for (j = 0; j < g.value.length; j++) {
                                g.value[j] = parseFloat(g.value[j]) || 0.00;
                            }
                        } else {
                            g.value = parseFloat(g.value) || 0.00;
                        }
                    }

                    if (_event) {
                        fbq(_track, _event, u.remove_empty(g));
                    }
                }
            };
            // End Loader Callback

            u.callBack = function () {
                var data = {};
                u.initialized = true;
                while (data = u.queue.shift()) {
                    u.data = data.data;
                    u.loader_cb();
                }
            };

            if (u.initialized) {
                u.loader_cb();
            } else {
                u.queue.push({"data" : u.data});
                if (!u.scriptrequested) {
                    u.scriptrequested = true;
                    u.loader({"type": "script",  "src": u.data.base_url, "cb": u.callBack, "loc": "script", "id": 'utag_##UTID##'});
                    //FB PreLoad Code
                    !function (f, b, e) {
                        if (f.fbq)return;e = f.fbq = function () {e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments);};
                        if (!f._fbq)f._fbq = e;e.push = e;e.loaded = !0;e.version = '2.0';e.queue = [];e.agent='tlm';
                    }(window, document);

                    if (u.data.cust_pixel) {
                        //fbq('init', u.data.cust_pixel);

                        u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                        for (var i = 0; i < u.data.cust_pixel.length; i++) {
                            u.data.cust_pixel[i] = u.data.cust_pixel[i].replace(/^\s*/,"").replace(/\s*$/,"");
                            fbq('init', u.data.cust_pixel[i]);
                        }

                        if (u.data.page_view === "true") {
                            fbq('track', 'PageView', u.data.page);

                        }

                        // custom attribution tracking - allows for custom mapping as well
                        if (u.data.track_attribution === "true" && u.data.log_attribution === "true") {
                            var custom = {};
                            for (x in u.data.attribution) {
                                custom[x] = u.data.attribution[x];
                            }
                            fbq("trackCustom", "LogAttribution", custom);
                        }

                    }
                }
            }

            omg.pixel.fireTagPixel({id: id, name: 'facebook', label: 'Facebook', context: {u: u, b: b}});
            var parameters = "&isCarItinPage=" +  encodeURIComponent(utag_data["isCarItinPage"]) + "&device.device.type=" +  encodeURIComponent(utag_data["device.device.type"]) + "&destinationId=" +  encodeURIComponent(utag_data["destinationId"]) + "&city=" +  encodeURIComponent(utag_data["city"]) + "&country=" +  encodeURIComponent(utag_data["country"]) + "&stateProvinceCode=" +  encodeURIComponent(utag_data["stateProvinceCode"]) + "&regionId=" +  encodeURIComponent(utag_data["regionId"]) + "&lengthOfStay=" +  encodeURIComponent(utag_data["lengthOfStay"]) + "&numberOfGuests=" +  encodeURIComponent(utag_data["numberOfGuests"]) + "&originAirportCode=" +  encodeURIComponent(utag_data["originAirportCode"]) + "&destinationAirportCode=" +  encodeURIComponent(utag_data["destinationAirportCode"]) + "&carType=" +  encodeURIComponent(utag_data["carType"]) + "&checkout.cartTotal.amount=" +  encodeURIComponent(utag_data["checkout.cartTotal.amount"]) + "&checkInDate=" +  encodeURIComponent(utag_data["checkInDate"]) + "&checkOutDate=" +  encodeURIComponent(utag_data["checkOutDate"]) + "&starRating=" +  encodeURIComponent(utag_data["starRating"]) + "&checkout.trl=" +  encodeURIComponent(utag_data["checkout.trl"]) + "&pricePerHotel=" +  encodeURIComponent(utag_data["pricePerHotel"]) + "&siteName=" +  encodeURIComponent(utag_data["siteName"]) + "&currencyCode=" +  encodeURIComponent(utag_data["currencyCode"]) + "&lob.domain=" +  encodeURIComponent(utag_data["lob.domain"]) + "&fb_event=" +  encodeURIComponent(utag_data["fb_event"]) + "&fb_content_type=" +  encodeURIComponent(utag_data["fb_content_type"]) + "&fb_custom_event_name=" +  encodeURIComponent(utag_data["fb_custom_event_name"]) + "&checkout.cartTotal.netValue=" +  encodeURIComponent(utag_data["checkout.cartTotal.netValue"]) + "&hotelName=" +  encodeURIComponent(utag_data["hotelName"]) + "&rewardsStatus.membershipTier=" +  encodeURIComponent(utag_data["rewardsStatus.membershipTier"]) + "&guid=" +  encodeURIComponent(utag_data["guid"]) + "&hotelId=" +  encodeURIComponent(utag_data["hotelId"]) + "&destination=" +  encodeURIComponent(utag_data["destination"]) + "&origin=" +  encodeURIComponent(utag_data["origin"]) + "&adults=" +  encodeURIComponent(utag_data["adults"]) + "&childrenCount=" +  encodeURIComponent(utag_data["childrenCount"]) + "&track_attribution=" +  encodeURIComponent(utag_data["track_attribution"]) + "&rlt_channel_subchannel=" +  encodeURIComponent(utag_data["rlt_channel_subchannel"]) + "&FB.Log_type=" +  encodeURIComponent(utag_data["FB.Log_type"]) + "&utag_main__st=" +  encodeURIComponent(utag_data["utag_main__st"]);
            if(typeof b["tealium_environment"] != "undefined" && b["tealium_environment"].indexOf("prod") != -1 && utag.isFCO()){
                u.img1 = new Image();

                var facebookPixel = u.data.base_url + "/?serverTimestamp=" + encodeURIComponent(new Date().toISOString()) + parameters;
                var logFacebook = 'https://queue.amazonaws.com/278265713271/tracking-tags?Action=SendMessage&Version=2009-02-01&MessageBody=' + encodeURIComponent(facebookPixel);
                u.img1.src = logFacebook;
            }
            //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
        }
    };
        utag.o[loader].loader.LOAD(id);
    }("##UTID##", "##UTLOADERID##"));
} catch (error) {
    utag.DB(error);
}
//end tealium universal tag
