function precoMedio(arr) {
    var array = []
   var soma = 0 ;
   var aspas = ""
    
   for (i=0; i < arr.length ; i++ ) {
        
        x = arr[i].preco ;
        y = soma += x ;
        z = array.push(x)
            
        }
      
      var maior = Math.max.apply(null,array)
      var index = array.indexOf(maior)
      aspas= arr[index].nome
     
    console.log("O produto mais caro se chama  \"" + aspas + "\"")
    
    return y/i;

}



