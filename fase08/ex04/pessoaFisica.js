function pessoaFisica (cpf) {
      
    if (cpf[3] === "." && cpf[7] === "." && cpf[11] === "-" || cpf[11] === ".")
    return true
    
    else 
    return false
}

