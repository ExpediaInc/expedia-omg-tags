//~~tv:11006.20160718
//~~tc: Updating to version 2.0
//~~anlagnada:  04-Oct-2016 - added omgpixel fire

window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);

//tealium universal tag - utag.sender.11006 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
    (function (id, loader) {
        var u = {"id" : id};
        var dataMapping = "";
        var published = false;
        utag.o[loader].sender[id] = u;
        // Please do not modify
        if (utag.ut === undefined) { utag.ut = {}; }
        // Start Tealium loader 4.41
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; }
        // End Tealium loader

        u.ev = {"view" : 1};
        u.initialized = false;

    ##UTGEN##

    u.send = function (a, b) {
        if (u.ev[a] || u.ev.all !== undefined) {
            utag.DB("send:##UTID##");
            utag.DB(b);

            var c, d, e, f;

            u.data = {
                //##UTVARconfig_<id from config>##
                "qsp_delim" : "&",
                "kvp_delim" : "=",
                "base_url" : "",
                // E-Commerce Vars
                "oogpt" : "##UTVARconfig_oogpt##",
                "pubid" : "##UTVARconfig_pubid##"
            };

            // Start tag-scoped extensions
        ##UTEXTEND##
        utag.DB("send:##UTID##:EXTENSIONS");
            utag.DB(b);
            // End tag-scoped extensions

            c = [];

            // Start Mapping
            for (d in utag.loader.GV(u.map)) {
                if (b[d] !== undefined && b[d] !== "") {
                    dataMapping = dataMapping + "&" + d + "=" + b[d];
                    e = u.map[d].split(",");
                    for (f = 0; f < e.length; f++) {
                        Krux('set', e[f], b[d]);
                    }
                }
                else{
                    dataMapping = dataMapping + "&" + d + "=";
                }
            }
            utag.DB("send:##UTID##:MAPPINGS");
            utag.DB(u.data);
            // End Mapping

            // Report required config is missing, and stop tag from firing.
            if (!u.data.pubid) {
                utag.DB(u.id + ": Tag not fired: Required attribute not populated [pubid]");
                return;
            }

            if (!u.initialized) {
                var k=document.createElement('script');k.type='text/javascript';k.async=true;
                k.setAttribute("data-id", u.data.pubid);k.className="kxct";k.setAttribute("data-version", "2.0");
                k.setAttribute("data-timing", "async");
                (function(){
                    var k=document.createElement('script');k.type='text/javascript';k.async=true;
                    var m,src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
                    k.src = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\/controltag\//i.test(src) ? src : src === "disable" ? "" :
                    (location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid="+u.data.pubid;
                    var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
                }());
            }
            if(!published){
                omg.pixel.fireTagPixel({id: id, name: 'krux-control-tag', label: 'Krux Control Tag', context: { u: u, b: b }});
                published = true;
            }
            utag.DB("send:##UTID##:COMPLETE");
        }
    };
        utag.o[loader].loader.LOAD(id);
    }("##UTID##", "##UTLOADERID##"));
} catch (error) {
    utag.DB(error);
}
//end tealium universal tag