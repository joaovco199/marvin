function conversor( temp, de, para) {
    
    de = de.toLowerCase()
    para = para.toLowerCase()
    
    
    if (de == "celsius" && para == "kelvin") 
    { return Math.ceil(temp + 273 )}
    
    else if (de == "celsius" && para == "fahrenheit")
    {return Math.ceil(1,8*(temp) + 32)}
    
    else if (de == "kelvin" && para == "celsius") 
    { return Math.ceil(temp - 273 )}
    
    else if (de == "kelvin" && para == "fahrenheit") 
    {return Math.ceil((75*temp) + 459.67)}
    
    else if (de == "fahrenheit" && para == "celsius") 
    { return Math.ceil(((temp-32)/1.8))}
    
    else if (de == "fahrenheit" && para == "kelvin")
    {return Math.ceil((75*temp + 459.67)*5/9)}
    
    else return temp


}

