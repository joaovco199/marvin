function animais(arr) {
    
 for (i = 0; i <= arr.length; i++) {
     
     delete(arr[i].altura)
     arr[i]["idade"] = 5 + i
    
     }
 
 return arr
 
}

