const counter=(number,id,s)=>{

let count=0
let colse=setInterval(()=>{
    count+=1
    document.getElementById(id).innerHTML=count
    if(count==number){
        clearInterval(colse)
    }
},s)

}

let one=document.getElementById("one").innerHTML

counter(one,"one",120)
counter(200,"two",80)
counter(300,"three",60)
counter(400,"for",50)
