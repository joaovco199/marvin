function dezAVinte() {
    
    x = Math.random()
    y = (x*10)+10
    z = y - Math.floor(y)
        
    if ( z < 0.5) return Math.floor(y)
    else return Math.ceil(y)
    
}

