function somaPares(n1, n2) {
    
var soma = 0
         
    for (i = n1; i <= n2; i++) {
                  
        i = Math.ceil(i)
                  
        if ( i % 2 === 0) { soma += i }
      
    }
    
return soma
    
}


    
  
