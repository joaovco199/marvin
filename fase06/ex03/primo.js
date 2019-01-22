function primo (num) {
    
    x = []
    
    for ( i = 0; i <= num; i++) {
        
       y = num/i
       
       if ( Number.isInteger(y) ) {x.push(y)}
       
    }
    
   if (x.length == 2) {return "Sim"}
   
   else {return "Não"}
       
    
}


       