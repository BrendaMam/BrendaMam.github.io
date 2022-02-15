
function gender() {
    var fema= document.getElementById('Mujer')
    var male= document.getElementById('Hombre')
    

    if(sexo == "fema") {
        mixpanel.track({'Gender': 'Female'});
       
    }  else {
            mixpanel.track({'Gender': 'Male'});
            
        }
   
    }


