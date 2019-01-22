
function por42(n1, n2) {
    
    x = []
    
    for (i=n1; i<=n2; i++) {
        
       y = i/42
             
         if (y % 1 === 0) x.push(i)
    }
      
        if (x.length < 2 ) {
            
        console.log ("Não encontrado")
        
        return false }
        
        else return x[1]
              
}
        
        
