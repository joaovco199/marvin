function inverter(x) {
     
     if (Array.isArray(x) === false) { 
         
         x = x.split("")
         x = x.reverse()
         x = x.join("")
         
         return x
         
         }
         
    else { 
        
        x.reverse()
        
        return x
        
        }     

}



