function bordas (h,v) {
arr = []
    if (v === 1) {v = 2}
else x = 1
               
        for ( i = 1; i < h; i++) {
            
            while (i <= 1) { 
                console.log("A" + "B".repeat(v-2) + "C")
                i++
            }
            while (i < h) {
                console.log("B" + "O".repeat(v-2) + "B")
                i++
            }
            if ( i===h) {console.log("C" + "B".repeat(v-2) + "A")
            }
            
                
    }
    
    return i
}
        
        


bordas(5,3)