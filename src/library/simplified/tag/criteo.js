//~~tv:20010.20140827
//~~tc: Tealium Custom Container - Criteo Custom Script - Several Brands (BEX)

window.criteo_q = window.criteo_q || [];

//tealium universal tag - utag.sender.custom_container ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
            var u = {};
            utag.o[loader].sender[id] = u;

            // Start Tealium loader 4.32
            // Please do not modify
            if (utag === undefined) {
                utag = {};
            }
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
                        b.charset = "utf-8";
                        b.src = o.src;
                    }
                    if (o.id) {
                        b.id = o.id;
                    }
                    if (typeof o.cb === "function") {
                        if (b.addEventListener) {
                            b.addEventListener("load", function() {
                                o.cb();
                            }, false);
                        } else {
                            b.onreadystatechange = function() {
                                if (this.readyState === "complete" || this.readyState === "loaded") {
                                    this.onreadystatechange = null;
                                    o.cb();
                                }
                            };
                        }
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
            // End Tealium loader

            u.ev = {
                'view': 1
            };

            u.initialized = false;

            ##UTGEN##

            u.send = function(a, b) {
              if (u.ev[a] || u.ev.all !== undefined) {
                  //##UTENABLEDEBUG##utag.DB("send:##UTID##");

                  var c, d, e, f, i;

                  u.data = {
                      "base_url": "https://static.criteo.net/js/ld/ld.js"
                  };


                  /* Start Tag-Scoped Extensions Code */
                  /* Please Do Not Edit This Section */
                  ##UTEXTEND##
                  /* End Tag-Scoped Extensions Code */


                  /* Start Mapping Code */
                  for (d in utag.loader.GV(u.map)) {
                      if (b[d] !== undefined && b[d] !== "") {
                          e = u.map[d].split(",");
                          for (f = 0; f < e.length; f++) {
                              u.data[e[f]] = b[d];
                          }
                      }
                  }
                  /* End Mapping Code */


                  // The widgetCall runs all of the appropriate functions & code blocks
                  function widgetCall() {


                      // Set Partner Id 
                      if (typeof b['ut.profile'] != "undefined" &&
                          b['ut.profile'] == "partnerships") {

                          // Parse Homepage and set Partner ID
                          window.parseHomepage = function() {
                              var home_pid = "00000";
                              return home_pid
                          };

                          // Set Partner ID (if not homepage) based on utag_data
                          window.setPartnerId = function() {
                              var pid = "00000";
                              return pid
                          };

                      } else {

                          // Parse Homepage and set Partner ID
                          window.parseHomepage = function() {
                              var home_pid = "";
                              return home_pid;
                          }

                          // Set Partner ID
                          function setPartnerId() {
                              var lobName = b.domain;
                              var hostName = document.location.hostname;

                              getPartnerId = crto_partners.filter(
                                  function(obj) {
                                      return obj.domain == hostName && obj.lob == lobName || obj.domain == hostName && obj.lob == 'All';
                                  });
                              if (typeof getPartnerId === "undefined")
                                  var pid = "00000"
                              var pid = getPartnerId[0].id;
                              return pid;
                          };

                      }

                      var crto_criteoPartnerId = parseHomepage();
                      crto_criteoPartnerId = setPartnerId();

                      // Variables to check for switch cases
                      var crto_pageType = b.pageType;
                      var crto_deviceType = b.device_type;

                      // Variables to be set with switch cases
                      var crto_criteoTagType;
                      var crto_criteoPartnerId;
                      var crto_criteoSiteType;
                      var getPartnerId;

                      // Variables for event params
                      var partnerLob = getPartnerId[0].lob;
                      var crto_hashedEmail = "";
                      var checkInDate = b.checkInDate || "";
                      var checkOutDate = b.checkInDate || "";
                      var nbAdults = b.adults || "";
                      var nbChildren = b.childrenCount || "";
                      var nbRooms = b.roomCount || "";
                      var crto_deduplication = "";
                      var crto_customerid = b["context.user.guid"];
                      var crto_mrktcode = b.criteo_marketing_code; // defined in a set data values extension 


                      // Set backup 'partnerLob' extracted from UDO
                      function backupPartnerLob(lob) {
                          var utag_lob = b['pageInfo.xLineOfBusiness'];
                          var new_lob;
                          if (lob !== 'All')
                              return lob;

                          switch (utag_lob) {
                              case 'FLIGHT':
                                  new_lob = 'AIR';
                                  break;
                              case 'PACKAGES':
                                  new_lob = 'PACKAGE';
                                  break;
                              case 'HOTEL':
                                  new_lob = 'HOTEL';
                          }

                          return new_lob;

                      }

                      partnerLob = backupPartnerLob(partnerLob);

                      // Set the page type based on crto_pageType
                      switch (crto_pageType) {
                          case "Infosite":
                              crto_criteoTagType = "viewItem"
                              break;

                          case "Home":
                          case "Landing":
                              crto_criteoTagType = "viewHome"
                              break;

                          case "Search":
                              b.domain == "AIR" ? crto_criteoTagType = "viewItem" : crto_criteoTagType = "viewList";
                              break;

                          case "Payment":
                              crto_criteoTagType = "viewBasket";
                              break;

                          case "Confirmation":
                              crto_criteoTagType = "trackTransaction"
                              break;

                          default:
                              break;
                      }

                      // Set siteType based on crto_deviceType
                      switch (crto_deviceType) {
                          case "Desktop":
                              crto_criteoSiteType = "d"
                              break;

                          case "Mobile":
                              crto_criteoSiteType = "m"
                              break;

                          default:
                              crto_criteoSiteType = "d";
                              break;
                      }


                      //** Product Tag **//
                      if (crto_criteoTagType == "viewItem") {
                          var productId;

                          // Hotels
                          if (partnerLob == "HOTEL") {
                              productId = b.hotelId;
                          }

                          // Packages
                          var departureAirport;
                          var arrivalAirport;
                          if (partnerLob == "PACKAGE") {

                              arrivalAirport = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport;
                              departureAirport = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport;

                              var thisArrivalId = Math.floor(Math.random() * 3) + 1;
                              productId = departureAirport + "/" + arrivalAirport + thisArrivalId;
                          }

                          // Air
                          if (partnerLob == "AIR") {
                              arrivalAirport = b.entity.flightSearch.searchParameters.arrivalAirport;
                              departureAirport = b.entity.flightSearch.searchParameters.departureAirport;
                              productId = departureAirport + "-" + arrivalAirport;
                          }

                          // Cars
                          if (partnerLob == "CAR") {
                              productId = b.entity.checkout.car.dropOffLocation.locationCode + "-" +
                                  b.entity.checkout.car.carCategoryNameLocalized + "-" +
                                  b.entity.checkout.car.exampleModelLocalized.toString().split(" ")[0] + "-" +
                                  b.entity.checkout.car.vendorNameLocalized;
                          }

                          window.criteo_q.push({
                              event: "setAccount",
                              account: crto_criteoPartnerId
                          }, {
                              event: "setHashedEmail",
                              email: crto_hashedEmail
                          }, {
                              event: "setSiteType",
                              type: crto_criteoSiteType
                          }, {
                              event: "setData",
                              type: crto_mrktcode
                          }, {
                              event: "setCustomerId",
                              id: crto_customerid
                          }, {
                              event: "viewItem",
                              item: productId
                          }, {
                              event: "viewSearch",
                              checkin_date: checkInDate,
                              checkout_date: checkOutDate,
                              nbra: nbAdults,
                              nbrc: nbChildren,
                              nbrr: nbRooms
                          });
                      }

                      //** Listing/Search Tag **//
                      if (crto_criteoTagType == "viewList") {
                          var productIdArray = [];

                          // Hotels
                          var hotelIdList;
                          if (partnerLob == "HOTEL") {
                              hotelIdList = b.firstThreeHotels.split("|");
                              productIdArray = hotelIdList;
                          }

                          // Packages
                          var packageIdList;
                          var departureAirport;
                          var arrivalAirport;
                          if (partnerLob == "PACKAGE") {
                              departureAirport = b.originAirportCode;
                              arrivalAirport = b.destinationAirportCode;
                              productIdArray.push(departureAirport + "/" + arrivalAirport + "1");
                              productIdArray.push(departureAirport + "/" + arrivalAirport + "2");
                              productIdArray.push(departureAirport + "/" + arrivalAirport + "3");
                          }

                          // Cars
                          if (partnerLob == "CAR") {
                              for (var index = 0; index < 3; index++) {
                                  var productLine = b.entity.carSearch.carOffers[index].dropOffLocation.locationCode + "-" +
                                      b.entity.carSearch.carOffers[index].carCategoryNameLocalized + "-" +
                                      b.entity.carSearch.carOffers[index].exampleModelLocalized.toString().split(" ")[0] + "-" +
                                      b.entity.carSearch.carOffers[index].vendorNameLocalized;
                                  productIdArray.push(productLine);
                                  // Data not available in data layer.  Also, what image to use in feed?  Big image for all.
                              }
                          }

                          window.criteo_q.push({
                              event: "setAccount",
                              account: crto_criteoPartnerId
                          }, {
                              event: "setHashedEmail",
                              email: crto_hashedEmail
                          }, {
                              event: "setCustomerId",
                              id: crto_customerid
                          }, {
                              event: "setSiteType",
                              type: crto_criteoSiteType
                          }, {
                              event: "setData",
                              type: crto_mrktcode
                          }, {
                              event: "viewList",
                              item: productIdArray
                          }, {
                              event: "viewSearch",
                              checkin_date: checkInDate,
                              checkout_date: checkOutDate,
                              nbra: nbAdults,
                              nbrc: nbChildren,
                              nbrr: nbRooms
                          });
                      }

                      //** Sales/Conversion Tag **//
                      if (crto_criteoTagType == "trackTransaction") {
                          var productId;
                          var transactionPrice;
                          var transactionId = b.entity.checkout.trl;

                          // Hotels
                          if (partnerLob == "HOTEL") {
                              productId = b.hotelId;
                              transactionPrice = b.entity.checkout.cartTotal.amount;
                          }

                          // Packages
                          var departureAirport;
                          var arrivalAirport;
                          if (partnerLob == "PACKAGE") {
                              arrivalAirport = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport;
                              departureAirport = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport;

                              productId = departureAirport + "/" + arrivalAirport + "1";
                              transactionPrice = 1;
                          }

                          // Air
                          if (partnerLob == "AIR") {
                              arrivalAirport = b.entity.flightSearch.searchParameters.arrivalAirport;
                              departureAirport = b.entity.flightSearch.searchParameters.departureAirport;
                              productId = departureAirport + "-" + arrivalAirport;
                              transactionPrice = b.entity.checkout.cartTotal.amount || "";
                          }
                          if (b.channelTracking.affcid) {
                              crto_deduplication = (b.channelTracking.affcid.search("CRITEO") != -1) ? 1 : 0
                          };
                          window.criteo_q.push({
                              event: "setAccount",
                              account: crto_criteoPartnerId
                          }, {
                              event: "setHashedEmail",
                              email: crto_hashedEmail
                          }, {
                              event: "setCustomerId",
                              id: crto_customerid
                          }, {
                              event: "setSiteType",
                              type: crto_criteoSiteType
                          }, {
                              event: "setData",
                              type: crto_mrktcode
                          }, {
                              event: "trackTransaction",
                              id: transactionId,
                              dd: crto_deduplication,
                              item: [{
                                  id: productId,
                                  price: transactionPrice,
                                  quantity: 1
                              }]
                          }, {
                              event: "viewSearch",
                              checkin_date: checkInDate,
                              checkout_date: checkOutDate,
                              nbra: nbAdults,
                              nbrc: nbChildren,
                              nbrr: nbRooms
                          });
                      }

                  }
                  widgetCall();

                  // Start Loader Callback
                  u.loader_cb = function() {
                      u.initialized = true;
                  };
                  // End Loader Callback

                  if (!u.initialized) {
                      u.loader({
                          "type": "script",
                          "src": u.data.base_url,
                          "cb": u.loader_cb,
                          "loc": "script",
                          "id": 'utag_##UTID##'
                      });
                  }

              }
          };
    utag.o[loader].loader.LOAD(id);
    })("##UTID##", "##UTLOADERID##");
}
catch (error) {
    utag.DB(error);
}
//end tealium universal tag