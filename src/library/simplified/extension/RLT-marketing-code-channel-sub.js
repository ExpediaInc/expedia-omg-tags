// To update "988 SEO:BRANDED" "271 SEO:UNBRANDED" and "264 BRAND:NOT APPLICABLE"
// Refer to lines 9, 11, 13, and 24
if ((typeof b['rlt_marketing_code'] == "undefined" && typeof b.rlt_channel_subchannel == "undefined") || 
  (typeof b['rlt_marketing_code'] != "undefined" && b['rlt_marketing_code'] == "{}")) {
    // conditional "OR" function definition to compare referrers and pagenames 
    // and produce the marketing channel/subchannel based on comparison
    var conditions = function(ref, ref_val, page, page_val) {
        if (ref.toLowerCase().indexOf(ref_val.toLowerCase()) > -1 && typeof page != "undefined" && page.toLowerCase().indexOf(page_val.toLowerCase()) < 0) {
            return "988";
        } else if (ref.toLowerCase().indexOf(ref_val.toLowerCase()) > -1 && typeof page != "undefined" && page.toLowerCase().indexOf(page_val.toLowerCase()) > -1) {
            return "271";
        } else {
            return "264";
        }
    };
    // create arrays to define 'SEO: Branded/Unbranded' assignment
    var referrer = ["google", "bing", "yahoo", "naver", "ask.com", "aol.co", "duckduckgo", "baidu", "webcrawler", "mywebsearch", "dogpile", "msn", "daum.net", "comcast.net", "docomo.ne.jp", "libero.it", "avg.com", "suche.web.de", "virgilio.it", "rakuten"];
    var pageName = ["Homepage", "page.Hotels", "page.Cars", "page.Flights", "page.Packages", "page.Expedia-Holiday", "page.Short-Breaks", "last-minute", "page.Travel.Deals", "page.Activities", "bolt-on:flights:launch", "page.Cruise", "/deals", "/p/vacation-packages", "page.Cruises", "page.Deals", "page.Rewards", "groupon.tab", "/p/info-other/expedia-coupon.htm", "p/promos/expedia-summer", "page.domestic", "tools/itinerary", "p/promos/campaign", "rental-car"];

    // iterate through the above arrays then use conditional function above to compare inputs. Let the conditions function do the work to assign the correct channel/subchannel. 
    // Once a channel/subchannel is assigned (variable is no longer Uknown OR the lists have been fully iterated though) break out of the loop.
    for (var i = 0; i < referrer.length; i++) {
        b.rlt_channel_subchannel = conditions(b['dom.referrer'], referrer[i], b.utagPageName, pageName[i]);
        if (b.rlt_channel_subchannel != "264") {
            break;
        }
    }
}
