function hacerclic(){

    lista=document.querySelectorAll("#principal p");
    lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;
    }
    
    function changeColor(x){
     if(x==0){
        lista[x].style.color="Yellow";
        lista[x].innerHTML="Hello World.";
     }
        else if(x==1){
            lista[x].style.color="Purple";
            lista[x].innerHTML="Learning in web programming class.";
            return false;
        }
        else{
            lista[0].style.color="Blue";
            lista[0].innerHTML="Hello World";
            lista[1].style.color="Green";
            lista[1].innerHTML="Learning in web programming class";
        }
    }
    function mostraralerta(){
        alert('Espera un momento por favor, traduciendo.');
    }

    window.onload=hacerclic;
    