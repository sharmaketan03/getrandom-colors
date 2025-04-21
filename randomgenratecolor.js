const input=document.querySelector('input')
const button=document.querySelector('button')
let wrapper=document.body
const allowedvalues="0123456789abcdef";
let color="#";
button.addEventListener("click",()=>{
    let sum="" ;
     let values=allowedvalues.split('')
     for(let i=0;i<=5;i++){
        let random=Math.floor(Math.random() * values.length)
        sum=sum+values[random]
        
     }
      randomColor=color+sum;
      input.value=randomColor
      wrapper.style .backgroundColor=randomColor

})