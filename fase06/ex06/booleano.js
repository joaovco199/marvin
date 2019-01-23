function booleano(arr) {
        
    for ( i = 0; i <= arr.length; i++ ) {
        
        if (arr[i] === true || arr[i] === false) { arr.splice( i, 1) }
                                
    }
    
    return arr
    
}

