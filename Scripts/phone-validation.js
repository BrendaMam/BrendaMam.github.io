function phonevalidation(){
    var phone2 = document.getElementById('phone2').value;

    if(phone2!= "" ){
        mixpanel.track("complete-2nd-phone")    
    }

    
}