function precoMedio(...args) {
        let soma = 0
        let array = []
        
        for (i=0; i < args.length; i++) {
            
            x = args[i].preco
            y = soma += x
            z = array.push(x)
        
        }
        
    let maior = Math.max.apply(null, array)
    let index = array.indexOf(maior)
    let aspas = args[index].nome
         
    console.log("O produto mais caro se chama \"" + aspas + "\"")
    
    return y/i
}


