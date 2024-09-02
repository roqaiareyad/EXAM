// skills
let section = document.querySelector(".about");
let spans = document.querySelectorAll(".progress span");
window.onscroll=function(){
if(window.scrollY >= section.offsetTop - 400 ) {
    console.log("Reached section two");
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    })  
}
// else{
//     spans.forEach((span) => {
//         span.style.width = 0;
//     })  
// }
};


//numbers
let valueDisplay = document.querySelectorAll(".counter");
let interval = 5000;

valueDisplay.forEach(valueDisplay =>{
    let startVlaue=0;
    let endVlaue= parseInt(valueDisplay.getAttribute("data-goal"));
    let duration= Math.floor(interval/endVlaue);
    let counter=setInterval(function(){
        if(endVlaue>=9450){
            startVlaue +=9;
        }
        else{
            startVlaue +=1;
        }
        valueDisplay.textContent=startVlaue;
        if(startVlaue == endVlaue){
            clearInterval(counter);
        }
    }, duration );

})