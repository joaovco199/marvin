function x (str)  {
    
    y = str.split("")
    z = []
    
    for ( i = 0; i <= y.length; i++) {
        
        if (y[i] == "x" || y[i] == "X") { z.push(y[i]) }
                
    }
    
    return z.length
}

