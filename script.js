var dia = document.getElementById('contagem')
var data = new Date()
var diaobj = 18
var mesobj = 4

function carregar() {
    var diahj = data.getDate()
    var meshj = data.getMonth() + 1
    var diaFalta

    if (meshj == mesobj) {
        diaFalta = diaobj - diahj
        dia.innerHTML = `${diaFalta}`
    } else {
        diaFalta = (31 - diahj) + diaobj;
        dia.innerHTML = `${diaFalta}`
    }

    
    
}