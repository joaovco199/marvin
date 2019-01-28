function segundaLetra (arr) {
        
   return arr.sort( function(a,b) {
       a = a.toLowerCase()
       b = b.toLowerCase()
       
       if (a[1] > b[1]) return 1
       
       if (a[1] < b[1]) return -1
   })
    
}

