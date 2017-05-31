/**
 * ~~tv:16017.20141231
 * ~~tc: Update to fix mapping logic
 *
 * tealium universal tag - utag.sender.16017 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
 * -------------------------------------------------------------
 *
 * Set cookie to see debug logs:
 * utagdb=true
 *
 * @see "https://community.tealiumiq.com/posts/948106-utag-js-debugger"
 *
 * Change Log:
 * 10/04/2016   Tony Lagnada - omg pixel renamed
 * 10/03/2016   Tony Lagnada - Added omg pixel fire
 * 04/13/2015   Tony Lagnada - Customized for PHG
 *                  - Fields are ordered according to our needs.
 *                  - Support for non-array line items
 *
 * 05/15/2015   Tony Lagnada - Updated tag so that it will be driven completely by the tag UI field inputs
 */

try
{

    (function (id, loader, u)
    {

        function logError(message)
        {
            if (console.error)
            {
                console.error('[PHG_TAG]: %s', message);
            }
        }

        function logDebug(label, value)
        {
            utag.DB('[PHG_TAG]: ' + label + '=' + value);
        }

        try
        {
            u = utag.o[loader].sender[id] = {}
        } catch (e)
        {
            u = utag.sender[id]
        }

        u.ev = {'view': 1};
        u.qsp_delim = "/";
        u.kvp_delim = ":";
        u.voucher = "";
        u.campaign = "##UTVARconfig_campaign##";
        u.base_url = "//prf.hn/conversion/";

        /* Please Do Not Edit This Section */
        ##UTGEN##
        /* End Tag-Scoped Extensions Code */

        u.send = function (a, b, c, d, e, f, g)
        {
            if (u.ev[a] || typeof u.ev.all != "undefined")
            {

                /* Please Do Not Edit This Section */
            ##UTEXTEND##
                /* End Tag-Scoped Extensions Code */

                var orderFields = {
                    'currency': 'currency code',
                    'country':  'country code',
                    'conversionref': 'typically the order_id',
                    'custref' : 'typically the tuid',
                    'customertype': 'typically blank',
                    'voucher': 'coupon code',
                    'customer_facing_id': 'customer facing trip id'
                };

                var utagUtil = b['fn_UtagUtil'];
                u.local_utag_data = utag.handler.C(b);
                c = [];
                g = {};

                // This is the campaign id from the tag UI
                c.push('campaign:' + utagUtil.blankIfNull(u.campaign));

                for (d in utag.loader.GV(u.map))
                {
                    var value = utagUtil.blankIfNull(b[d]);
                    e = u.map[d].split(",");
                    for (f = 0; f < e.length; f++)
                    {
                        // blank if null or undefined
                        var field = e[f];

                        if (orderFields.hasOwnProperty(field))
                        {
                            c.push(field + ':' + value);
                        }
                        else
                        {
                            g[e[f]] = value;
                        }
                    }
                }

                f = [];

                var lineItems = [];
                for (var paramName in g)
                {
                    var paramValue = utagUtil.blankIfNull(g[paramName]);
                    lineItems.push(paramName + ':' + paramValue);
                }

                f.push(lineItems.join('/'));
                c.push('[' + f.join('][') + ']');

                u.img = new Image();
                u.img.src = u.base_url + c.join(u.qsp_delim);

                omg.pixel.fireTagPixel({id: id, name: 'phg', label: 'PHG', context:{ u: u, b: b }});

                //For testing pixel logs
                if(utag_data["tealium_environment"].indexOf("prod") != -1){
                    u.img1 = new Image();
                    var pixelPhg = u.img.src + "/?POS=&ASPP=&serverTimestamp=" + encodeURIComponent(new Date().toISOString());
                    var logPhg = 'https://queue.amazonaws.com/278265713271/tracking-tags?Action=SendMessage&Version=2009-02-01&MessageBody='
                        + encodeURIComponent(pixelPhg);
                    u.img1.src = logPhg;
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    })('##UTID##', '##UTLOADERID##');
} catch (e)
{
    utag.DB(error);
}
//end tealium universal tag