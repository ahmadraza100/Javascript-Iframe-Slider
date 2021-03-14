
var arr = ["https://www.youtube.com/embed/9i1dXa13CxA","https://www.youtube.com/embed/Cl6xlzpURqM",
"https://www.youtube.com/embed/p5Mu1KnMi-g" , "https://www.youtube.com/embed/S-DBJN2u9wo" , "https://www.youtube.com/embed/VNs_cCtdbPc" , "https://www.youtube.com/embed/3Q6JlEymVRE"
, "https://www.youtube.com/embed/c8gEQw8sPok" ,"https://www.youtube.com/embed/LD077A_PyIQ"]

var i = 0;
document.getElementById("right").addEventListener("click" , ()=>{
    if(document.getElementById("i").src=arr[i]){
        i++;
    document.getElementById("i").style.transform = "translateX(-50vw)";
    document.getElementById("i").style.opacity = "0";
    
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(100vw)";
        document.getElementById("i").src = arr[i];

        document.getElementById("i").style.opacity = "0";
    
    
    },1200)

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)";
        document.getElementById("i").style.opacity = "1";
    
    
    },1500)
}

if(i>arr.length-1){
    i=1;
    
}
document.getElementById("num").innerHTML = `${i+1}/${arr.length}`;
})

document.getElementById("left").addEventListener("click" , ()=>{


    if(document.getElementById("i").src=arr[i]){
        i= i-1;
        if(i<0){
            i=7;
           
   
           }
    document.getElementById("i").style.transform = "translateX(50vw)";
    document.getElementById("i").style.opacity = "0";
    
    
   
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(-100vw)";
        document.getElementById("i").src = arr[i];

        document.getElementById("i").style.opacity = "0";
    
    
    },1200)

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)";
        document.getElementById("i").style.opacity = "1";
        
        
    },1500)
}
document.getElementById("num").innerHTML = `${i+1}/${arr.length}`;

})

