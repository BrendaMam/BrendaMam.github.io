function gender() {
    var fema= document.getElementById('Mujer')
    var male= document.getElementById('Hombre')
    
    console.log(fema+male)

    var sexo= document.querySelector("input[name='Sexo']:checked").value

    console.log(sexo)


    if(sexo == "Mujer") {
        mixpanel.track({'Gender': 'Female'}); 
        console.log("Selecciona Mujer")
       
    }  else {
            mixpanel.track('Hombre',{'Gender': 'Male'});
            
        }
   
    }

