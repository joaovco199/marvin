function precoMedio(arr) {
    var array = []
   var soma = 0 ;
    
   for (i=0; i < arr.length ; i++ ) {
        
        x = arr[i].preco ;
        y = soma += x ;
        z = array.push(x)
            
        }
      
      var maior = Math.max.apply(null,array)
      var index = array.indexOf(maior)
      var caro = arr[index].nome
      
    console.log("O produto mais caro se chama " + "'" + caro + "'")
    
    return y/i;

}




