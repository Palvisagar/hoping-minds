let a=document.getElementById("first")
a.style.background="red"
console.log(a)

let b=document.getElementsByClassName("card-title")
console.log(b)

for(let i=0; i<3;i++){
    let b=document.getElementsByClassName("card-title")
    b[i].style.color="green"
}

let c=document.querySelector('#third')
c.style.backgroundColor="red"
console.log(c)

let d=document.querySelectorAll('.ex')
d[0].style.backgroundColor="pink"
console.log(d)