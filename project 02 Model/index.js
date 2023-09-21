// document.getElementById()
// addEventListener()
// e,target
// CSS Styling Through JavaScript
//CSS Animation

//variables

let openBtn = document.getElementById('open-btn');
let modelContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event Listener

openBtn.addEventListener("click", function(){
    modelContainer.style.display = 'block'; 
});

closeBtn.addEventListener("click", function(){
    modelContainer.style.display = 'none';
});

// close the model any were
window.addEventListener("click", function(e){

    if(e.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
})