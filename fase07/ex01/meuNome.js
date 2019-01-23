function meuNome(obj) {
    
    obj = { 
        
        nome: "marvin",
        
        idade: 42
        
    }
    
    return obj.nome.slice(0,1).toUpperCase() + obj.nome.slice(1).toLowerCase()
    
}

