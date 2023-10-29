function verificar(){
    var dia = document.getElementById('idia')
    var mes = document.getElementById('imes')
    var ano = document.getElementById('iano')
    var resa = document.getElementById('resano')
    var resm = document.getElementById('resmes')
    var resd = document.getElementById('resdia')



    var data = new Date()
    var mesagora = data.getMonth()
    var anoagora = data.getFullYear()
    var diaagora = data.getDate()
    
    let diares = diaagora - dia.value
    var mesres = 0
    var anores = anoagora - ano.value

    //validando o dia

    if (dia.value > diaagora){
        diares = dia.value - diaagora
    }

    //validando o mes

    if (mes.value > mesagora){
        mesres = (mesagora - mes.value) + 12
    }else{
        mesres = mesagora - mes.value
    } 
    if(mesres==12){
        mesres=-1
    }

    //validando o ano

    if(mes.value > mesagora+1){
        anores--
    } 
    
    /*if(mes.value == 2 && dia.value > 28 || mes.value == 0 || ano.value == 0 ||dia.value == 0 || mes.value > 12 || ano.value > anoagora.value || dia.value > 31){
        window.alert('ERRO Data Inválida')
    }*/else{
        resa.innerHTML = `${anores} `
        resm.innerHTML = `${mesres+1} `
        resd.innerHTML = `${diares} `
    }
    
    


    
}