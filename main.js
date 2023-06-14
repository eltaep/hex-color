let arr=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
let color;

let changbg=()=>{
color='#'

    for(let i=0;i<6;i++){
        color+=arr[Math.floor(Math.random()*arr.length)]

    }
document.body.style.backgroundColor=color
document.querySelector('span').innerHTML=color

}
document.querySelector('button').addEventListener('click',changbg)