var taTestGrp = function(){
  var taCustAud;
  var guidParse = typeof b['context.user.guid']!="undefined"&&
  
  //alter line below... change 191 to prime 53
  //b['context.user.guid'] != "" ? parseInt(b['content.user.guid'].split("-")[0],16) % 191 : "";
  b['context.user.guid'] != "" ? parseInt(b['content.user.guid'].split("-")[0],16) % 191 : "";
  
  //adjust segment ranges and taCustAud values per below
  if(guidParse != ""){
    if(guidParse >= 0 && guidParse <= 12){taCustAud = 'SEG1';}
    if(guidParse >= 13 && guidParse <= 25){taCustAud = 'SEG2';}
    if(guidParse >= 26 && guidParse <= 38){taCustAud = 'SEG3';}
    if(guidParse >= 39 && guidParse <= 51){taCustAud = 'SEG4';}
    if(guidParse >= 52 || guidParse < 0){taCustAud = 'NOSEG';}
    
  }else{
    taCustAud = '';
            
  }

  return taCustAud;
}
b.ta_user_segment = taTestGrp();
