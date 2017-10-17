//~~tv:7110.20141218
//~~tc: Update for metrics to be sent in more places, toolbox updated for ease of use
//      Added logic to auto-generate a tracker name if one hasn't been defined.
window.GoogleAnalyticsObject = "##UTVARconfig_gaobject##";
if (window.GoogleAnalyticsObject == "") {
    window.GoogleAnalyticsObject = "ga"
};
window[window.GoogleAnalyticsObject] = window[window.GoogleAnalyticsObject] || function() {
    (window[window.GoogleAnalyticsObject].q = window[window.GoogleAnalyticsObject].q || []).push(arguments);
};

//tealium universal tag - utag.sender.7110 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.

try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        // Start Tealium loader
        // Please do not modify
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    b.hFlag = 0;
                    b.onreadystatechange = function() {
                        if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) {
                            b.hFlag = 1;
                            o.cb();
                        }
                    };
                    b.onload = function() {
                        if (!b.hFlag) {
                            b.hFlag = 1;
                            o.cb();
                        }
                    };
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        // End Tealium loader
        u.ev = {
            'view': 1,
            'link': 1
        };
        u.o = window[window.GoogleAnalyticsObject];
        u.created = false;
        // Perform operation for all trackers (params used differently for "set")
        u.all = function(e, o, v, a, b) {
            for (var i = 0; i < u.data.account.length; i++) {
                var t = (u.data.name[i] ? u.data.name[i] + "." : "");
                if (o === "event") {
                    u.o(t + e, o, v, a, b)
                } else if (v) {
                    u.o(t + e, o, v)
                } else {
                    u.o(t + e, o);
                }
            }
        };
        u.addEvents = function(g, a, b, f) {
            for (var d in utag.loader.GV(u.data[a])) {
                if (b && d.indexOf("enh_" + b + "-") !== 0) {
                    continue;
                }
                var idx = d.split("-")[1],
                    val = u.data[a][d];
                if (u.typeOf(val) !== "array") {
                    g[idx] = val;
                } else {
                    g[idx] = val[f];
                }
            }
        };
        // TODO: Provide UI config option to call create before the Extensions run (if not using dynamic accounts)
        ##
        UTGEN##
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                //##UTENABLEDEBUG##utag.DB("send:##UTID##");
                u.o = window[window.GoogleAnalyticsObject];
                b.ga_events = b.ga_events || [];
                u.addEvent = function(v) {
                    if (typeof v.eventCategory == "undefined" || typeof v.eventAction == "undefined") {
                        utag.DB("GA event Category or Action is not set");
                        return;
                    }
                    if (v.eventValue && isNaN(parseInt(v.eventValue))) {
                        utag.DB("GA event Value is not a number");
                        v.eventValue = null;
                    } else {
                        v.eventValue = parseInt(v.eventValue) || null;
                    }
                    b.ga_events.push(v);
                };

                var c, d, e, f, g;

                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "",
                    "a": a,
                    "cookieDomain": "##UTVARconfig_domain##" || utag.loader.lh(),
                    "name": "##UTVARconfig_name##",
                    "account": "##UTVARconfig_account##",
                    "anonymizeIp": ("##UTVARconfig_anonymizeip##" === "true" ? true : false),
                    "allowLinker": ("##UTVARconfig_setallowlinker##" === "true" ? true : false),
                    "crossDomainTrack": "##UTVARconfig_crosstrackdomains##",
                    "enhancedLinkAttribution": "##UTVARconfig_enhancedlinkattribution##",
                    "enhancedecommerce": "##UTVARconfig_enhancedecommerce##",
                    "displayfeatures": "##UTVARconfig_displayfeatures##",
                    "screenView": "##UTVARconfig_screenview##",
                    // Enhanced E-Commerce
                    "enh_action": "",
                    "enh_event_cb": "",
                    "enh_checkout_step": "",
                    "enh_checkout_option": "",
                    "product_action_list": "",
                    "product_variant": [],
                    "enh_impression_id": [],
                    "enh_impression_name": [],
                    "enh_impression_price": [],
                    "enh_impression_category": [],
                    "enh_impression_brand": [],
                    "enh_impression_variant": [],
                    "enh_impression_list": [],
                    "enh_impression_position": [],
                    "enh_promo_id": [],
                    "enh_promo_name": [],
                    "enh_promo_creative": [],
                    "enh_promo_position": [],
                    // E-Commerce Vars
                    "id": "",
                    "order_id": "",
                    "order_total": "",
                    "order_shipping": "",
                    "order_tax": "",
                    "order_store": "",
                    "order_currency": "",
                    "order_coupon_code": "",
                    "product_id": [],
                    "product_name": [],
                    "product_brand": [],
                    "product_category": [],
                    "product_quantity": [],
                    "product_unit_price": [],
                    "product_discount": [],
                    "product_position": []
                };

                ##
                UTEXTEND##
                u.local_utag_data = utag.handler.C(b);
                c = [];

                // Start Mapping
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (e[f].indexOf("ec_add.") === 0) {
                                u.data.ec_add.push([
                                    [e[f].substr(7)], b[d]
                                ]);
                            } else if (e[f].indexOf("a.") === 0) {
                                u.data["a"][e[f].substring(2)] = b[d];
                            } else {
                                u.data[e[f]] = b[d];
                            }
                        }
                    }
                }
                // End Mapping

                u.data.order_id = u.data.order_id || b._corder;
                u.data.order_total = u.data.order_total || b._ctotal;
                u.data.order_shipping = u.data.order_shipping || b._cship;
                u.data.order_tax = u.data.order_tax || b._ctax;
                u.data.order_store = u.data.order_store || b._cstore;
                u.data.order_currency = u.data.order_currency || b._ccurrency;
                u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo;
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_brand.length === 0 && b._cbrand !== undefined) {
                    u.data.product_brand = b._cbrand.slice(0);
                }
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    u.data.product_category = b._ccat.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    u.data.product_unit_price = b._cprice.slice(0);
                }
                if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) {
                    u.data.product_discount = b._cpdisc.slice(0);
                }

                if (typeof u.data.account === "string") {
                    u.data.account = u.data.account.replace(/\s/g, "").split(",");
                }
                if (typeof u.data.name === "string") {
                    u.data.name = u.data.name.replace(/\s/g, "").split(",");
                }
                // if there is no tracker name defined, but there are multiple trackers, auto-generate one with the name tealium_[1|2|3|4 etc.]
                if (u.data.account.length > 1 && u.data.name.length === 1) {
                    u.data.name = [];
                    for (i = 0; i < u.data.account.length; i++) {
                        u.data.name.push("tealium_" + i);
                    }
                }

                if (u.created === false) {
                    u.created = true;
                    for (f = 0; f < u.data.account.length; f++) {
                        c = new Object();
                        if (u.data.siteSpeedSampleRate) {
                            c.siteSpeedSampleRate = parseInt(u.data.siteSpeedSampleRate);
                        }
                        if (u.data.sampleRate) {
                            c.sampleRate = parseInt(u.data.sampleRate);
                        }
                        c.cookieDomain = u.data.cookieDomain;
                        if (u.data.cookieExpires || u.data.cookieExpires === "0") {
                            c.cookieExpires = parseInt(u.data.cookieExpires);
                        }
                        if (u.data.legacyCookieDomain) {
                            c.legacyCookieDomain = u.data.legacyCookieDomain;
                        }
                        c.allowLinker = u.data.allowLinker;
                        if (typeof u.data.name[f] !== "undefined" && u.data.name[f] !== "") {
                            c.name = u.data.name[f];
                        }
                        u.o("create", u.data.account[f], c);
                    }
                }

                // mobile

                if (u.data.screenView === "true" || u.data.screenView === true) {

                    u.data.app_id = u.data.app_id || u.data.appId || b.app_id;
                    u.data.app_name = u.data.app_name || u.data.appName || b.app_name;
                    u.data.app_version = u.data.app_version || u.data.appVersion || b.app_version;
                    u.data.app_rdns = u.data.app_rdns || u.data.appInstallerId || b.app_rdns;
                    u.data.screen_title = u.data.screen_title || u.data.screenName || b.screen_title;
                    u.data.exception_reason = u.data.exception_reason || b.exception_reason;

                    g = {};
                    g.appName = u.data.app_name;
                    g.appId = u.data.app_id || "";
                    g.appVersion = u.data.app_version;
                    g.appInstallerId = u.data.app_rdns;
                    u.all("set", g);

                    if (u.data.exception_reason) {
                        g = {};
                        g.exDescription = u.data.exception_reason;
                        g.exFatal = true;
                        u.all("send", "exception", g);
                    }
                }

                if (u.data.allowLinker === true && u.data.crossDomainTrack !== undefined && typeof u.data.crossDomainTrack === "string") {
                    u.all("require", "linker");
                    u.data.crossDomainTrack = u.data.crossDomainTrack.split(",");
                    u.all("linker:autoLink", u.data.crossDomainTrack);
                }

                if (u.data.anonymizeIp) {
                    u.all("set", 'anonymizeIp', true)
                };
                if (u.data.uid) {
                    u.all("set", "&uid", u.data.uid)
                };
                if (u.data.page) {
                    u.all("set", "page", u.data.page)
                };
                if (u.data.title) {
                    u.all("set", "title", u.data.title)
                };
                if (u.data.location) {
                    u.all("set", "location", u.data.location)
                };
                if (u.data.nonInteraction) {
                    u.all("set", "nonInteraction", true)
                };
                if (u.data.campaignName) {
                    u.all("set", "campaignName", u.data.campaignName)
                };
                if (u.data.campaignSource) {
                    u.all("set", "campaignSource", u.data.campaignSource)
                };
                if (u.data.campaignMedium) {
                    u.all("set", "campaignMedium", u.data.campaignMedium)
                };
                if (u.data.campaignContent) {
                    u.all("set", "campaignContent", u.data.campaignContent)
                };
                if (u.data.campaignKeyword) {
                    u.all("set", "campaignKeyword", u.data.campaignKeyword)
                };
                if (u.data.displayfeatures === "true" || u.data.displayfeatures === true) {
                    u.all("require", "displayfeatures");
                }

                u.data.transaction_events = {};
                u.data.pageview_events = {};
                u.data.link_events = {};
                u.data.enhecom_events = {};
                for (d in utag.loader.GV(u.data)) {
                    if (d.indexOf("-") > -1 && (d.indexOf("metric") > -1 || d.indexOf("dimension") > -1 || d.indexOf("contentGroup") > -1)) {
                        //new functionality to accept different mapping types
                        //u.all("set", d, u[d]);
                        if (d.indexOf("transaction-") === 0) {
                            u.data.transaction_events[d] = u.data[d];
                        } else if (d.indexOf("pageview-") === 0) {
                            u.data.pageview_events[d] = u.data[d];
                        } else if (d.indexOf("link-") === 0) {
                            u.data.link_events[d] = u.data[d];
                        } else if (u.data.enhancedecommerce === "true" && d.indexOf("enh_") === 0) {
                            u.data.enhecom_events[d] = u.data[d];
                        }
                    } else if (d.indexOf("metric") === 0 || d.indexOf("dimension") === 0 || d.indexOf("contentGroup") === 0) {
                        //old functionality
                        u.all("set", d, u.data[d]);
                    }
                }

                // Enhanced Link Attribution
                if (u.data.enhancedLinkAttribution === "true") {
                    u.all("require", "linkid", "linkid.js");
                }

                u.data.order_id = (u.data.order_id ? u.data.order_id : u.data.id);

                //  begin Enhanced Ecommerce block
                if (u.data.enhancedecommerce === "true") {

                    u.all("require", "ec");
                    // set currency if mapped
                    u.all("set", '&cu', (u.data.currency ? u.data.currency : u.data.order_currency));
                    // ENH: REFUND start
                    if (u.data.order_id && u.data.enh_action === "refund") {
                        if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
                            u.data.order_id = u.data.order_id[0];
                        }
                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.product_id[f];
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            u.addEvents(g, "enhecom_events", "product_refund", f);
                            u.all('ec:addProduct', g);
                        }

                        g = {};
                        g.id = u.data.order_id;
                        u.addEvents(g, "enhecom_events", "refund");
                        u.all('ec:setAction', 'refund', g);
                        // ENH: REFUND end
                    }
                    //ENH: ORDER start
                    else if (u.data.order_id) {
                        if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
                            u.data.order_id = u.data.order_id[0];
                        }
                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.product_id[f];
                            g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
                            g.brand = (u.data.product_brand[f] ? u.data.product_brand[f] : "");
                            g.variant = (u.data.product_variant[f] ? u.data.product_variant[f] : "");
                            g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
                            g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            g.coupon = (u.data.product_discount.length[f] ? u.data.product_discount.length[f] : "");
                            g.position = (u.data.product_position[f] ? u.data.product_position[f] : "");
                            u.addEvents(g, "enhecom_events", "product_purchase", f);
                            u.all('ec:addProduct', g);
                        }

                        g = {};
                        g.id = u.data.order_id;
                        g.affiliation = (u.data.affiliation ? u.data.affiliation : u.data.order_store);
                        g.revenue = (u.data.revenue ? u.data.revenue : u.data.order_total);
                        g.shipping = (u.data.shipping ? u.data.shipping : u.data.order_shipping);
                        g.tax = (u.data.tax ? u.data.tax : u.data.order_tax);
                        g.coupon = (u.data.coupon ? u.data.coupon : u.data.order_coupon_code);
                        u.addEvents(g, "enhecom_events", "purchase");
                        u.all('ec:setAction', 'purchase', g);
                        // ENH: ORDER end
                    }
                    // ENH: PRODUCT CLICK start
                    else if (u.data.enh_action === "product_click" && u.data.a === "link") {
                        g = {};
                        g.id = u.data.product_id[0];
                        g.name = (u.data.product_name[0] ? u.data.product_name[0] : u.data.product_id[0]);
                        g.brand = (u.data.product_brand[0] ? u.data.product_brand[0] : "");
                        g.variant = (u.data.product_variant[0] ? u.data.product_variant[0] : "");
                        g.category = (u.data.product_category[0] ? u.data.product_category[0] : "");
                        g.price = (u.data.product_unit_price[0] ? u.data.product_unit_price[0] : "1.00");
                        g.quantity = (u.data.product_quantity[0] ? u.data.product_quantity[0] : "1");
                        g.position = (u.data.product_position[0] ? u.data.product_position[0] : "");
                        u.addEvents(g, "enhecom_events", "product_click", 0);
                        u.all("ec:addProduct", g);

                        u.all('ec:setAction', 'click', {
                            list: u.data.product_action_list
                        });
                        u.all('send', 'event', 'UX', 'click', 'Results', {
                            'hitCallback': window[u.data.enh_event_cb]
                        });
                        // ENH: PRODUCT CLICK end
                    }
                    // ENH: DETAIL start
                    else if (u.data.enh_action === "detail") {
                        g = {};
                        g.id = u.data.product_id[0];
                        g.name = (u.data.product_name[0] ? u.data.product_name[0] : u.data.product_id[0]);
                        g.brand = (u.data.product_brand[0] ? u.data.product_brand[0] : "");
                        g.variant = (u.data.product_variant[0] ? u.data.product_variant[0] : "");
                        g.category = (u.data.product_category[0] ? u.data.product_category[0] : "");
                        g.price = (u.data.product_unit_price[0] ? u.data.product_unit_price[0] : "1.00");
                        g.quantity = (u.data.product_quantity[0] ? u.data.product_quantity[0] : "1");
                        g.position = (u.data.product_position[0] ? u.data.product_position[0] : "");
                        u.addEvents(g, "enhecom_events", "detail", 0);
                        u.all('ec:addProduct', g);

                        u.all("ec:setAction", "detail");
                        // ENH: DETAIL end
                    }
                    // ENH: PROMO CLICK start
                    // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                    else if (u.data.enh_action === "promo_click" && u.data.a === "link") {
                        g = {};
                        g.id = u.data.enh_promo_id[0];
                        g.name = u.data.enh_promo_name[0];
                        g.creative = u.data.enh_promo_creative[0];
                        g.position = u.data.enh_promo_position[0];
                        u.all('ec:addPromo', g);

                        u.all('ec:setAction', u.data.enh_action);
                        u.all('send', 'event', 'Internal Promotions', 'click', (g.name ? g.name : g.id));
                        // ENH: PROMO CLICK end
                    }
                    // ENH: PRODUCT ADD start
                    else if (u.data.enh_action === "add") {
                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.product_id[f];
                            g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
                            g.brand = (u.data.product_brand[f] ? u.data.product_brand[f] : "");
                            g.variant = (u.data.product_variant[f] ? u.data.product_variant[f] : "");
                            g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
                            g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            g.position = (u.data.product_position[f] ? u.data.product_position[f] : "");
                            u.addEvents(g, "enhecom_events", "product_add", f);
                            u.all('ec:addProduct', g);
                        }
                        // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                        u.all('ec:setAction', 'add');
                        if (u.data.a === "link") {
                            u.all('send', 'event', 'UX', 'click', 'add to cart');
                        }
                        // ENH: PRODUCT ADD end
                    }
                    // ENH: PRODUCT REMOVE start
                    else if (u.data.enh_action === "remove") {
                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.product_id[f];
                            g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
                            g.brand = (u.data.product_brand[f] ? u.data.product_brand[f] : "");
                            g.variant = (u.data.product_variant[f] ? u.data.product_variant[f] : "");
                            g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
                            g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            g.position = (u.data.product_position[f] ? u.data.product_position[f] : "");
                            u.addEvents(g, "enhecom_events", "product_remove", f);
                            u.all('ec:addProduct', g);
                        }
                        // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                        u.all('ec:setAction', 'remove');
                        if (u.data.a === "link") {
                            u.all('send', 'event', 'UX', 'click', 'remove from cart');
                        }
                        // ENH: PRODUCT REMOVE end
                    }
                    // ENH: CHECKOUT start
                    else if (u.data.enh_action === "checkout") {
                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.product_id[f];
                            g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
                            g.brand = (u.data.product_brand[f] ? u.data.product_brand[f] : "");
                            g.variant = (u.data.product_variant[f] ? u.data.product_variant[f] : "");
                            g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
                            g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            g.position = (u.data.product_position[f] ? u.data.product_position[f] : "");
                            u.addEvents(g, "enhecom_events", "product_checkout", f);
                            u.all('ec:addProduct', g);
                        }
                        g = {};
                        // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                        g.step = u.data.enh_checkout_step || "1";
                        g.option = u.data.enh_checkout_option;
                        u.all('ec:setAction', u.data.enh_action, g);
                        // ENH: CHECKOUT end
                    }
                    // ENH: CHECKOUT OPTION start
                    if (u.data.enh_action === "checkout_option" && u.data.a === "link") {
                        g = {};
                        // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                        g.step = u.data.enh_checkout_step || "1";
                        g.option = u.data.enh_checkout_option;
                        u.all('ec:setAction', u.data.enh_action, g);

                        u.all('send', 'event', 'Checkout', 'Option', {
                            'hitCallback': window[u.data.enh_event_cb]
                        });
                        // ENH: CHECKOUT OPTION end
                    }
                    // ENH: ADD IMPRESSION start
                    if (u.data.enh_impression_id) {
                        for (f = 0; f < u.data.enh_impression_id.length; f++) {
                            g = {};
                            g.id = u.data.enh_impression_id[f];
                            g.name = (u.data.enh_impression_name[f] ? u.data.enh_impression_name[f] : u.data.enh_impression_id[f]);
                            g.brand = (u.data.enh_impression_brand[f] ? u.data.enh_impression_brand[f] : "");
                            g.variant = (u.data.enh_impression_variant[f] ? u.data.enh_impression_variant[f] : "");
                            g.category = (u.data.enh_impression_category[f] ? u.data.enh_impression_category[f] : "");
                            g.list = (u.data.enh_impression_list[f] ? u.data.enh_impression_list[f] : "");
                            g.price = (u.data.enh_impression_price[f] ? u.data.enh_impression_price[f] : "");
                            g.position = (u.data.enh_impression_position[f] ? u.data.enh_impression_position[f] : "");
                            u.addEvents(g, "enhecom_events", "product_impression", f);
                            u.all('ec:addImpression', g);
                        }
                        // ENH: ADD IMPRESSION end
                    }
                    // ENH: ADD PROMO start
                    // does not support custom metrics and dimensions! (ref: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#enhanced-ecomm)
                    if (u.data.enh_promo_id && u.data.a === "view") {
                        for (f = 0; f < u.data.enh_promo_id.length; f++) {
                            g = {};
                            g.id = u.data.enh_promo_id[f];
                            g.name = (u.data.enh_promo_name[f] ? u.data.enh_promo_name[f] : u.data.enh_promo_id[f]);
                            g.creative = (u.data.enh_promo_creative[f] ? u.data.enh_promo_creative[f] : "");
                            g.position = (u.data.enh_promo_position[f] ? u.data.enh_promo_position[f] : "");
                            u.all('ec:addPromo', g);
                        }
                        // ENH: ADD PROMO end
                    }
                    // ENH: SEND PAGEVIEW & ASSOCIATED EVENTS
                    g = {};

                    if (u.data.order_id) {
                        u.addEvents(g, "transaction_events");
                    }

                    u.addEvents(g, "pageview_events");

                    if (u.data.screenView === "true" || u.data.screenView === true) {

                        g.screenName = u.data.screen_title || "";
                        u.all("send", "screenview", g);

                    } else if (u.data.a === "view") {

                        g.hitType = "pageview";

                        // Send page view request
                        u.all("send", g);
                    }
                    // end enhanced e-commerce block
                } else if (u.data.a === "view") {
                    // begin standard page view block (enhanced e-commerce disabled)
                    g = {};
                    u.addEvents(g, "pageview_events");

                    if (u.data.screenView === "true" || u.data.screenView === true) {

                        g.screenName = u.data.screen_title || "";
                        u.all("send", "screenview", g);

                    } else {

                        g.hitType = "pageview";

                        // Send page view request
                        u.all("send", g);

                    }

                    if (u.data.order_id && !(u.data.order_id instanceof Array)) {
                        u.all("require", "ecommerce", "ecommerce.js");
                        g = {};
                        u.addEvents(g, "transaction_events");
                        g.id = u.data.order_id;
                        g.affiliation = (u.data.affiliation ? u.data.affiliation : u.data.order_store);
                        g.revenue = (u.data.revenue ? u.data.revenue : u.data.order_total);
                        g.shipping = (u.data.shipping ? u.data.shipping : u.data.order_shipping);
                        g.tax = (u.data.tax ? u.data.tax : u.data.order_tax);
                        g.currency = (u.data.currency ? u.data.currency : u.data.order_currency);
                        u.all('ecommerce:addTransaction', g);

                        for (f = 0; f < u.data.product_id.length; f++) {
                            g = {};
                            g.id = u.data.order_id;
                            g.sku = u.data.product_id[f];
                            g.name = (u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f]);
                            g.category = (u.data.product_category[f] ? u.data.product_category[f] : "");
                            g.price = (u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00");
                            g.quantity = (u.data.product_quantity[f] ? u.data.product_quantity[f] : "1");
                            u.addEvents(g, "transaction_events");
                            u.all('ecommerce:addItem', g);
                        }
                        u.all('ecommerce:send');
                    } else if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
                        u.all("require", "ecommerce", "ecommerce.js");
                        // an array of order ids will fire multiple transacations
                        var lastindex = 0;
                        for (f = 0; f < u.data.order_id.length; f++) {

                            if (f === u.data.order_id.length - 1 || (u.data.order_id[f] !== u.data.order_id[f + 1])) {
                                g = {};
                                u.addEvents(g, "transaction_events");
                                g.id = u.data.order_id[f];
                                g.affiliation = (u.data.affiliation && typeof u.data.affiliation[f] !== "undefined" ? u.data.affiliation[f] : u.data.order_store);
                                g.revenue = (u.data.revenue && typeof u.data.revenue[f] !== "undefined" ? u.data.revenue[f] : u.data.order_total);
                                g.shipping = (u.data.shipping && typeof u.data.shipping[f] !== "undefined" ? u.data.shipping[f] : u.data.order_shipping);
                                g.tax = (u.data.tax && typeof u.data.tax[f] !== "undefined" ? u.data.tax[f] : u.data.order_tax);
                                g.currency = (u.data.currency ? u.data.currency : u.data.order_currency);
                                u.all('ecommerce:addTransaction', g);

                                for (e = lastindex; e < f + 1; e++) {
                                    g = {};
                                    g.id = u.data.order_id[f];
                                    g.sku = u.data.product_id[e];
                                    g.name = (u.data.product_name[e] ? u.data.product_name[e] : u.data.product_id[e]);
                                    g.category = (u.data.product_category[e] ? u.data.product_category[e] : "");
                                    g.price = (u.data.product_unit_price[e] ? u.data.product_unit_price[e] : "1.00");
                                    g.quantity = (u.data.product_quantity[e] ? u.data.product_quantity[e] : "1");
                                    u.addEvents(g, "transaction_events");
                                    u.all('ecommerce:addItem', g);
                                }
                                lastindex = f + 1;
                            }
                        }
                        u.all('ecommerce:send');
                    }
                    // end standard page view block
                } else if (u.data.screenView === "true" || u.data.screenView === true) {
                    g = {};
                    g.screenName = u.data.screen_title || "";
                    u.all("send", "screenview", g);
                }
                // begin event logic
                if (u.data.eventCategory && u.data.eventAction) {
                    g = {};
                    u.addEvents(g, "link_events");
                    g.hitType = "event";
                    g.eventCategory = u.data.eventCategory;
                    g.eventAction = u.data.eventAction;
                    if (u.data.eventLabel) {
                        g.eventLabel = u.data.eventLabel;
                    }
                    if (typeof u.data.eventValue !== "undefined" && u.data.eventValue !== "") {
                        g.eventValue = u.data.eventValue;
                    }
                    u.all("send", g);
                    // clear variables after each event
                    u.data.eventCategory = u.data.eventAction = u.data.eventLabel = u.data.eventValue = "";
                }

                for (e = 0; e < b.ga_events.length; e++) {
                    g = {};
                    u.addEvents(g, "link_events");
                    g.hitType = "event";
                    g.eventCategory = b.ga_events[e].eventCategory;
                    g.eventAction = b.ga_events[e].eventAction;
                    g.eventLabel = b.ga_events[e].eventLabel;
                    g.eventValue = b.ga_events[e].eventValue;
                    u.all("send", g);
                }
                // end event logic
                if (u.data.socialNetwork && u.data.socialAction && u.data.socialTarget) {
                    g = {};
                    g.hitType = "social";
                    g.socialNetwork = u.data.socialNetwork;
                    g.socialAction = u.data.socialAction;
                    g.socialTarget = u.data.socialTarget;
                    u.all("send", g);
                    u.data.socialNetwork = u.data.socialAction = u.data.socialTarget = "";
                }

                if (u.data.timingCategory && u.data.timingVar && u.data.timingValue) {
                    g = {};
                    g.hitType = "timing";
                    g.timingCategory = u.data.timingCategory;
                    g.timingVar = u.data.timingVar;
                    g.timingValue = u.data.timingValue;
                    g.timingLabel = u.data.timingLabel || "";
                    u.all("send", g);
                }

                // Map account ID to ga-disable to disable tracking for that account
                if (u.data["ga-disable"]) {
                    window["ga-disable-" + u.data["ga-disable"]] = true;
                }

                (function() {
                    var id = 'tealium-tag-7110';
                    if (document.getElementById(id)) {
                        return;
                    }
                    u.o.l = 1 * new Date();
                    var e = document.createElement('script');
                    e.async = true;
                    e.id = id;
                    e.src = '//www.google-analytics.com/analytics.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(e, s);
                })();

                //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
            }
        };
        utag.o[loader].loader.LOAD(id);
    }('##UTID##', '##UTLOADERID##'));
} catch (error) {
    utag.DB(error);
}
//end tealium universal tag