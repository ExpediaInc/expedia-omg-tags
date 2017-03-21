var marketingChannels = ["affiliateMarketingCode","distributionPartners","emailId", "intraCompanyMarketingCode","onlineAdvertisingCode","searchEngineMarketingCode","searchEngineOrganicCode"];
var lastTouchTimeStamp = '0';
var lastTouchMarketingCode = "";
var priorTimeStamp = '0';
var priorMarketingCode = "";
var length = marketingChannels.length;


// Old logic that goes through cesc fields to find last touch and then set DTL.

for(var i=0; i < length; i++){
    var currentTimeStamp = b["context.marketingAttribution."+marketingChannels[i]+"Timestamp"];
    var currentMarketingCode = b["context.marketingAttribution."+marketingChannels[i]];

    if(currentTimeStamp > lastTouchTimeStamp){
        priorTimeStamp = lastTouchTimeStamp;
        priorMarketingCode = lastTouchMarketingCode;
        lastTouchTimeStamp = currentTimeStamp;
        lastTouchMarketingCode = currentMarketingCode;
    }
}


b["cescPriorTouchTimeStamp"] = priorTimeStamp;
b["cescPriorTouchMarketingCode"] = priorMarketingCode;

var fullMarketingCode = lastTouchMarketingCode;
var patrialMarketingCode = b["context.marketingAttribution.campaignId"];

if(fullMarketingCode != undefined && patrialMarketingCode != undefined && fullMarketingCode.indexOf(patrialMarketingCode) > -1 ){
    var marketingCodeAndDTL = fullMarketingCode.split(patrialMarketingCode + ".");
    if( marketingCodeAndDTL.length >= 2 ){
        b["cescDTL"]  = marketingCodeAndDTL[1];
    }
}


// Use Campaign ID (CID) for last touch

b["cescLastTouchTimeStamp"] = b["context.marketingAttribution.campaignIdTimestamp"];
b["cescLastTouchMarketingCode"] = b["context.marketingAttribution.campaignId"];
var dateDifference = parseInt((new Date() - new Date(b["cescLastTouchTimeStamp"]))/(1000*60*60*24));
b['cescLastTouch_isexpired'] = true;
if(dateDifference <= 30 && dateDifference >= 0) {
    b['cescLastTouch_isexpired'] = false;
}

b["cescChannel"] = "";
b["cescCompany"] = "";
b["cescCountry"] = "";
b["cescNetwork"] = "";
if(b["cescLastTouchMarketingCode"].split(".").length >= 4){
    b["cescChannel"] = b["cescLastTouchMarketingCode"].split(".")[0];
    b["cescCompany"] = b["cescLastTouchMarketingCode"].split(".")[1];
    b["cescCountry"] = b["cescLastTouchMarketingCode"].split(".")[2];
    b["cescNetwork"] = b["cescLastTouchMarketingCode"].split(".")[3];
}
