function bordas(h, v) {
if (h === 1) {h = 2; x = 0}
else {x = 1}

    for (i = 1; i < h; i++) {
    
        while (i <= 1) {
            console.log("A" + "B".repeat(h-2) + "C".repeat(x));
            i++;
        }
        
        while (i < v) {
            console.log("B" + "O".repeat(h-2) + "B".repeat(x));
            i++;
        }
        
        if (i === v) {
            console.log("C" + "B".repeat(h-2) + "A".repeat(x));
        }
        
    }
    return i;
}

bordas (2,5);
