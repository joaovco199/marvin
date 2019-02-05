function pessoaFisica (cpf) {
      
    if (cpf[3] === "." && cpf[7] === "." && cpf[11] === "-" && cpf.length === 14
    && isNaN(cpf[13]) === false)
    
 
    
    return true
    
    else 
    return false
}

