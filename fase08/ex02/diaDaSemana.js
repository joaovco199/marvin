function diaDaSemana(data) {
    
    dd = data[0] + data[1];
    mm = data[3] + data[4];
    yy = data[6] + data[7] + data[8] + data [9];
    
    date = mm + "/" + dd + "/" + yy;
    
    let newDate = new Date(date);
    let diaDaSemana = newDate.getDay();

    let week = ["Domingo", "Segunda-feira", "Ter�a-feira", "Quarta-feira", 
        "Quinta-feira", "Sexta-feira", "S�bado"];
   
   return week[diaDaSemana];

}



