b["lineParameterExists"] = "false";
if (typeof(window.utag_data) !== "undefined" && window.utag_data["device.device.type"].indexOf("Mobile") > -1 && (document.URL.indexOf("www.expedia.co.jp") > -1 || document.URL.indexOf("wwwexpediacojp") > -1))
 {
    if (document.URL.indexOf("/user/createaccount") > -1 || document.URL.indexOf("/user/signin") > -1)
    {
        if(('localStorage' in window) && (window.localStorage !== null)) 
        {
          localStorage.removeItem("line_cc");
        }
        
        function getParamsObj() {
            var query = location.search.substr(1);
            var params = query.split('&');
            var paramsObj = {};
            for ( i = 0; i < params.length; i++ ) {
                var neet = params[i].split("=");
                paramsObj[neet[0].trim()] = neet[1];
                if (neet[0].trim().toLowerCase() === "line_cc")
                {
                    break;
                }
            }
            return paramsObj;
        }

        var paramsObj = getParamsObj();
        var ls_cc = paramsObj['line_cc'];
        if (typeof(ls_cc) !== undefined) {
            if(('localStorage' in window) && (window.localStorage !== null)) {
              localStorage.setItem("line_cc",ls_cc);
            }
        }
    }

    if (typeof(window.utag_data) !== "undefined" && ((typeof(window.utag_data["pageName"]) !== "undefined" && window.utag_data["pageName"].indexOf("page.mobilehotellandingpage") > -1) || (typeof(window.utag_data["utagPageName"]) !== "undefined" && utag_data["utagPageName"].indexOf("Home") > -1)))
    {
        if ((typeof(window.utag_data["userState"]) !== "undefined" && (window.utag_data["userState"].toLowerCase() === "identified" || window.utag_data["userState"].toLowerCase() === "authenticated"))
            || (typeof(window.utag_data["loggedUser"]) !== "undefined" && window.utag_data["loggedUser"].toLowerCase() === "logged user"))
        {
            b["line_cc"] = "";
            b["line_uid"] = "";
            b["line_yt"] = new Date().getTime();

            if (typeof(utag_data["expUserId"]) !== "undefined")
            {
                b["line_uid"] = utag_data["expUserId"];
            }

            if (typeof(window.utag_data["context.user.expUserProfileId"]) !== "undefined")
            {
                b["line_uid"] = utag_data["context.user.expUserProfileId"];
            }

            if (('localStorage' in window) && (window.localStorage !== null)) 
            {
                b["line_cc"] = localStorage.getItem("line_cc");

                if (typeof(b["line_cc"])!== "undefined" && b["line_cc"]!=="" && typeof(b["line_uid"])!=="undefined" && b["line_uid"] !== "") 
                {
                    b["lineParameterExists"] = "true";
                }
            }
        }
    }
}
