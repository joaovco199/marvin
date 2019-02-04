function conversor( temp, de, para) {
    
    de = de.toLowerCase()
    para = para.toLowerCase()
    
    
    if (de == "celsius" && para == "kelvin") 
    { return Math.ceil(temp + 273.15 )}
    
    else if (de == "celsius" && para == "fahrenheit")
    {return Math.ceil((temp * 9/5) + 32)}
    
    else if (de == "kelvin" && para == "celsius") 
    { return Math.ceil(temp - 273.15 )}
    
    else if (de == "kelvin" && para == "fahrenheit") 
    {return Math.ceil((temp - 273.15) * 9/5 + 32)}
    
    else if (de == "fahrenheit" && para == "celsius") 
    { return Math.ceil(((temp-32)/1.8))}
    
    else if (de == "fahrenheit" && para == "kelvin")
    {return Math.ceil((temp - 32) * 5/9 + 273.15)}
    
    else return temp


}


