/*function validar(){
    var estado = ""
    var estado = document.getElementById("estado").value

    mixpanel.track(estado)
    
    if(estado){
        console.log(estado)
        
    }
}*/

function estado(){
    var estado = document.getElementById("estado").value

    mixpanel.track("Ubicación: "+ estado)
    console.log(estado)
}