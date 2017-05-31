var taTestGrp = function(){
  var taCustAud;
  
  if (typeof b['context.user.guid']!="undefined"&&  b['context.user.guid'] != "") {
    var guidParse = parseInt(b['context.user.guid'].split("-")[0],16) % 101;
  }
  
 // var guidParse = typeof b['context.user.guid']!="undefined"&&
  
  //alter line below... change 191 to prime 53
  //b['context.user.guid'] != "" ? parseInt(b['context.user.guid'].split("-")[0],16) % 101 : "";
  // b['context.user.guid'] != "" ? parseInt(b['context.user.guid'].split("-")[0],16) % 101 : " ";
  
  //adjust segment ranges and taCustAud values per below
  if(guidParse!=undefined){
    if(guidParse >= 0 && guidParse <= 24){taCustAud = 'SEG1';}
    if(guidParse >= 25 && guidParse <= 49){taCustAud = 'SEG2';}
    if(guidParse >= 50 && guidParse <= 74){taCustAud = 'SEG3';}
    if(guidParse >= 75 && guidParse <= 99){taCustAud = 'SEG4';}
    if(guidParse >= 100 || guidParse <= 101){taCustAud = 'NOSEG';}
    
  }else{
    taCustAud = ' ';
            
  }

  return taCustAud;
}
    b.user_segment = taTestGrp();
