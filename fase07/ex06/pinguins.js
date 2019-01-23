function pinguins (arr) {
    
   var loja = {
       
       cabeca: "oculos de sol",
       camisa: "jaqueta polar",
       pes: "tenis"
   };
   
    for (i = 0; i < arr.length; i++) {
        
        arr[i]["roupa"] = loja
    }
    
    return arr
    
}
    
