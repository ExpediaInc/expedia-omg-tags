// remove the below line and last line of extension before publishing to production
if(b["ut.env"] == "dev") {

// output variable
b["campaignId"] = "";

// defensive logic is the best
var ctr = b["cescCountry"] || "";
var mkt = b["cescLastTouchMarketingCode"] || "";
var ntw = b["cescNetwork"] || "";

// lastminute is the only site (profile) where we have different campaign ids per site id
var pfl = b["ut.profile"] != "lastminute" ? b["ut.profile"] : b["siteId"];

// so we don't have to do this over and over. determines what campaign the visitor came in from.
var campaignTrack = function(ctry, mktg_code, result) {
    result = "";
    if (ctry.toLowerCase().indexOf("direct") > -1 || mktg_code.toLowerCase().indexOf("direct") > -1) {
        result = "d";
    } else if (ctry.toLowerCase().indexOf("srcomp") > -1 || mktg_code.toLowerCase().indexOf("srcomp") > -1) {
        result = "sr";
    } else if (ctry.toLowerCase().indexOf("meta") > -1 || mktg_code.toLowerCase().indexOf("meta") > -1) {
        result = "m";
    }
    return result;
};

// condition for PHG campaign
if ((utag.isCO() || utag.is3pp()) && (ntw.toLowerCase().indexOf("phg") > -1 || mkt.toLowerCase().indexOf("phg") > -1)) {

    // assign campaign ids per campaign track AND profile/siteid
    switch (pfl) {
        case "orbitz":
            if (campaignTrack(ctr, mkt) == "d") {
                b["campaignId"] = "1011l96";
            } else if (campaignTrack(ctr, mkt) == "sr") {
                b["campaignId"] = "1100l89";
            } else if (campaignTrack(ctr, mkt) == "m") {
                b["campaignId"] = "1011l98";
            }
            break;
        case "cheaptickets":
            if (campaignTrack(ctr, mkt) == "d") {
                b["campaignId"] = "1011l100";
            } else if (campaignTrack(ctr, mkt) == "sr") {
                b["campaignId"] = "1101l80";
            } else if (campaignTrack(ctr, mkt) == "m") {
                b["campaignId"] = "1100l92";
            }
            break;
        case "main":
            b["campaignId"] = "100l39";
            break;
        case "travelocity":
            if (campaignTrack(ctr, mkt) == "sr") {
                b["campaignId"] = "1100l216";
            } else if (campaignTrack(ctr, mkt) == "m") {
                b["campaignId"] = "1101l194";
            }
            break;
        case "mrjet":
            if (campaignTrack(ctr, mkt) == "d") {
                b["campaignId"] = "1100l121";
            } else if (campaignTrack(ctr, mkt) == "sr") {
                b["campaignId"] = "1011l119";
            } else if (campaignTrack(ctr, mkt) == "m") {
                b["campaignId"] = "1100l122";
            }
            break;
        case "wotif":
            b["campaignId"] = "100l52";
            break;
        case 70150:
            b["campaignId"] = "110l59";
            break;
        case "ebookers":
            if (campaignTrack(ctr, mkt) == "d") {
                b["campaignId"] = "1100l121";
            } else if (campaignTrack(ctr, mkt) == "sr") {
                b["campaignId"] = "1011l119";
            } else if (campaignTrack(ctr, mkt) == "m") {
                b["campaignId"] = "1100l122";
            }
            break;
    }
}
}

