const counter = document.getElementById('counter');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const resBtn = document.getElementById('reset');
let count =0;

function updateCounter(){
      counter.innerText = count;


    counter.classList.remove('green', 'red', 'black');
    
  
    if(count>0){
        counter.classList.add('green');
    }
    else if(count < 0){
        counter.classList.add('red');
    }
    else {
        counter.classList.add('black');
    }

}


incBtn.addEventListener( "click" ,()=>{
    count++;
    updateCounter();
   
});
decBtn.addEventListener( "click" ,()=>{
    count--;
    updateCounter();
    

})
resBtn.addEventListener( "click" ,()=>{
    count=0;
    updateCounter();
  
})