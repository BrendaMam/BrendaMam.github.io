function estado(){
    var estado = document.getElementById("estado").value
    
    if(estado == ""){
        //console.log("No se recibió información del estado")
        mixpanel.track("empty-state")
    }else{
        //console.log(estado)
        mixpanel.track('Estado registrado', {'Estado': estado});
        
    }
}
    