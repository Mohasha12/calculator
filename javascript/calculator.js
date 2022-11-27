function display(num){
  document.querySelector(".text").value=document.querySelector(".text").value+num 
}

function equal(){
var text=document.querySelector(".text").value;

    if(text){
        document.querySelector(".text").value=eval(text) 
    }
}
function del(){
var text=document.querySelector(".text").value;
    document.querySelector(".text").value=text.substring(0, text.length-1);
}
