const modal = document.getElementById('modal');
const button = document.getElementById('button');
const close = document.getElementById('close');

button.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";
}