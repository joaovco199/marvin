function organizarDatas(arr)  {
        
    x = arr.sort(function(a,b) {  
        a = new Date(a.dataDeChegada)
        b = new Date(b.dataDeChegada)
                
        if (a > b) 
    {return 1}
    
    else if (a < b) return  -1
    
    else return 0

    
    })
    
    return x
    
}


