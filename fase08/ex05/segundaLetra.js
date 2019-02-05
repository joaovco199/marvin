function segundaLetra (arr) {
        
   return arr.sort( function(a,b) {
       a = a.toLowerCase()
       b = b.toLowerCase()
       
       if (a.slice(1) > b.slice(1)) return 1
       
       if (a.slice(1) < b.slice(1)) return -1
   })
    
}


