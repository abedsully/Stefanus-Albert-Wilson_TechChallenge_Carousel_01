function validation(){
    if(document.getElementById("names").value == ""){
        document.getElementById("validate1").innerHTML = "Please enter your name";
        return false;
    }

    if(document.getElementById("emails").value == ""){
        document.getElementById("validate2").innerHTML = "Please enter your email";
        return false;
    }

    if(!document.querySelector('input[name="gender"]:checked')){
        document.getElementById("validate3").innerHTML = "Please select your gender";
        return false;
    }

    else{
        document.getElementById("success").innerHTML = "Success";
        return true;
    }

}

    var count= new Date("June 11, 2023 02:00:00").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
        
      var distance = count - now;
        

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        

      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);



