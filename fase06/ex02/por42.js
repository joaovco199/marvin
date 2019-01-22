function por42(n1, n2) {
    
    x = []
    
    for (i=n1; i<=n2; i++) {
        
       y = i/42
             
         if (y % 1 === 0) x.push(i)
    }
      
        return x
        
}

