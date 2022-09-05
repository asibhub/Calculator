let inputText=document.getElementById('text');

function calculator(number){
    inputText.value=inputText.value+number;
}

function result(){
    try{
        inputText.value=eval(inputText.value);
    }
    catch(err){
        alert("Enter Valid Number")
    }
}
function clr(){
    inputText.value="";
}
function del(){
    inputText.value=inputText.value.slice(0,-1);
}