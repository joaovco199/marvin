function xp (num) {
    
    xp1 = 100
    nivel = 1
    
    for (i = 0; i < num; i++) {
        
        if (num <= xp1) return nivel
        
        else { xp1 += 100 + 50*nivel
        nivel++
        
        }
   
    }
}
        
        