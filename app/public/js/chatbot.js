var isOpen = true;
function minChatbot(){
    if(isOpen){
        document.getElementById('body-container').style.display = "none";
        document.getElementById('input-user').style.display = "none";
        document.getElementById('linkMinExpandChatbot').innerHTML = "+";
        isOpen = false;
    }else{
        isOpen = true;
        document.getElementById('body-container').style.display = "block";
        document.getElementById('input-user').style.display = "block";
        document.getElementById('linkMinExpandChatbot').innerHTML = "-";
    }
   
    
}
