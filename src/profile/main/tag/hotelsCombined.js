//~~tv:8006.20141231
//~~tc: Update to fix mapping logic

//tealium universal tag - utag.sender.8006 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1};
  u.qsp_delim="&";
  u.kvp_delim="=";
  u.providercode="##UTVARconfig_providercode##";
  u.base_url="https://secure.hotelscombined.com/ConversionBooking.ashx?";
##UTGEN##
  u.send=function(a,b,c,d,e,f){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      ##UTEXTEND##
      c=[];
      c.push("ProviderCode="+u.providercode);
      for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))}}}

      if(typeof b._corder!="undefined"){
	c.push("BookingValue="+b._csubtotal);
	c.push("Currency="+((b._ccurrency)?b._ccurrency:"USD"));
	if(b._ccity)c.push("ClientCity="+b._ccity);
	if(b._ccountry)c.push("ClientCountry="+b._ccountry);
      }
      u.img=new Image();u.img.src=u.base_url+c.join(u.qsp_delim);
    }
  }

  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('##UTID##','##UTLOADERID##');
}catch(e){}
//end tealium universal tag
