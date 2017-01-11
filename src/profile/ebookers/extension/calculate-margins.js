/*
 Outputs the following variables on the confirmation page:
 1. insurance - The amount spent on insurance
 2. insurance_margin
 3. product_margin - the margin on the product purchased
 4. main_margin - insurance_margin + main_margin
 */

/*
 This is to test the product margin pushed into the Google Adwords MCC tag
 */

var margin_rate_uk = new Array();
margin_rate_uk['HOTEL'] 	= .155;
margin_rate_uk['AIR']		= .012;
margin_rate_uk['PACKAGE'] 	= .072;
margin_rate_uk['LX'] 		= .163;
margin_rate_uk['CAR'] 		= .124;
margin_rate_uk['3PP'] 	= 0;

var margin_rate_ie = new Array();
margin_rate_ie['HOTEL'] 	= .162;
margin_rate_ie['AIR']		= .020;
margin_rate_ie['PACKAGE'] 	= .062;
margin_rate_ie['LX'] 		= .154;
margin_rate_ie['CAR'] 		= .174;
margin_rate_ie['3PP'] 	= 0;

var margin_rate_fr = new Array();
margin_rate_fr['HOTEL'] 	= .160;
margin_rate_fr['AIR']		= .008;
margin_rate_fr['PACKAGE'] 	= .090;
margin_rate_fr['LX'] 		= .204;
margin_rate_fr['CAR'] 		= .197;
margin_rate_fr['3PP'] 	= 0;

var margin_rate_de = new Array();
margin_rate_de['HOTEL'] 	= .156;
margin_rate_de['AIR']		= .021;
margin_rate_de['PACKAGE'] 	= .086;
margin_rate_de['LX'] 		= .181;
margin_rate_de['CAR'] 		= .186;
margin_rate_de['3PP'] 	= .10;

var margin_rate_ch = new Array();
margin_rate_ch['HOTEL'] 	= .158;
margin_rate_ch['AIR']		= .049;
margin_rate_ch['PACKAGE'] 	= .096;
margin_rate_ch['LX'] 		= .174;
margin_rate_ch['CAR'] 		= .198;
margin_rate_ch['3PP'] 	= .10;

var margin_rate_fi = new Array();
margin_rate_fi['HOTEL'] 	= .158;
margin_rate_fi['AIR']		= .047;
margin_rate_fi['PACKAGE'] 	= .071;
margin_rate_fi['LX'] 		= .209;
margin_rate_fi['CAR'] 		= .185;
margin_rate_fi['3PP'] 	= 0;

var margin_rate_se = new Array();
margin_rate_se['HOTEL'] 	= .149;
margin_rate_se['AIR']		= .004;
margin_rate_se['PACKAGE'] 	= .060;
margin_rate_se['LX'] 		= .193;
margin_rate_se['CAR'] 		= .168;
margin_rate_se['3PP'] 	= 0;




if (b["pageInfo.pageName"].indexOf("Checkout.Confirmation") > -1 || b["pageInfo.pageName"].indexOf('page.Itin.Details.Booked') > -1  ) {

    if (b["entity.checkout.flightOffer.totalPrice.taxesAndFees"]) {
        b["entity.checkout.cartTotal.taxesAndFees"] = b["entity.checkout.flightOffer.totalPrice.taxesAndFees"];
    }

    //FROM DATA LAYER
    var taxes = Number(b["entity.checkout.cartTotal.taxesAndFees"]);
    var ord_tot = Number(b["entity.checkout.cartTotal.amount"]);

    if (b["entity.checkout.flightOffer.totalPrice.netValue"]) {
        b["entity.checkout.cartTotal.netValue"] = b["entity.checkout.flightOffer.totalPrice.netValue"];
    }

    var prod_val = Number(b["entity.checkout.cartTotal.netValue"]);//= total - taxes - insurance

    //CALC INSURANCE
    var insurance = ord_tot - prod_val - taxes;

    //CALC MARGIN RATES
    var insurance_margin = 0;
    var main_margin = 0;
    var margin_rate = 1;
    var lob = b["domain"] //Domain contains realm info about the product type
    var pos = b["sitename"];

    if(pos == 'uk')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_uk[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_uk[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_uk[lob];
                break;
            case "LX":
                margin_rate = margin_rate_uk[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_uk[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_uk[lob];
                break;
        }
    }
    else if(pos == 'ie')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_ie[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_ie[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_ie[lob];
                break;
            case "LX":
                margin_rate = margin_rate_ie[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_ie[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_ie[lob];
                break;
        }
    }
    else if(pos == 'fr')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_fr[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_fr[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_fr[lob];
                break;
            case "LX":
                margin_rate = margin_rate_fr[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_fr[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_fr[lob];
                break;
        }
    }
    else if(pos == 'de')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_de[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_de[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_de[lob];
                break;
            case "LX":
                margin_rate = margin_rate_de[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_de[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_de[lob];
                break;
        }
    }
    else if(pos == 'ch')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_ch[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_ch[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_ch[lob];
                break;
            case "LX":
                margin_rate = margin_rate_ch[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_ch[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_ch[lob];
                break;
        }
    }
    else if(pos == 'fi')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_fi[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_fi[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_fi[lob];
                break;
            case "LX":
                margin_rate = margin_rate_fi[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_fi[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_fi[lob];
                break;
        }
    }
    else if(pos == 'se')
    {
        switch(lob) {
            case "HOTEL":
                margin_rate = margin_rate_se[lob];
                break;
            case "AIR":
                margin_rate = margin_rate_se[lob];
                break;
            case "PACKAGE":
                margin_rate = margin_rate_se[lob];
                break;
            case "LX":
                margin_rate = margin_rate_se[lob];
                break;
            case "CAR":
                margin_rate = margin_rate_se[lob];
                break;
            case "CRUISE":
                margin_rate = margin_rate_se[lob];
                break;
        }
    }


    //CALC INSURANCE MARGIN
    if (insurance) {
        //console.log(insurance)
        insurance_margin = insurance * .5904;
        b.insurance = insurance.toFixed(2).toString();
        b.insurance_margin = insurance_margin.toFixed(2).toString();
    }

    //CALC SUMMED MARGINS (INSURANCE + SERVICE)
    b.product_margin = (margin_rate * prod_val).toFixed(2).toString();
    b.main_margin = ((margin_rate * prod_val) + insurance_margin).toFixed(2).toString();

    if(b.product_margin == "NaN")
    {
        b.product_margin = 0;
    }
    if(b.main_margin == "NaN")
    {
        b.main_margin = 0;
    }
}
