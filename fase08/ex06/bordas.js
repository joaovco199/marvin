function bordas(h, v) {
if (h === 1) {h = 2; x = 0}
else {x = 1}
arr = []
    for (i = 1; i < h; i++) {
    
        while (i <= 1) {
            arr.push("A" + "B".repeat(h-2) + "C".repeat(x));
            i++;
        }
        
        while (i < v) {
            arr.push("B" + "O".repeat(h-2) + "B".repeat(x));
            i++;
        }
        
        if (i === v) {
            arr.push("C" + "B".repeat(h-2) + "A".repeat(x));
        }
        
    }
    console.log( arr.join("\n"))
}

