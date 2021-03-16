



var arr = ["https://www.youtube.com/embed/9i1dXa13CxA", "https://www.youtube.com/embed/Cl6xlzpURqM",
    "https://www.youtube.com/embed/p5Mu1KnMi-g", "https://www.youtube.com/embed/S-DBJN2u9wo", "https://www.youtube.com/embed/VNs_cCtdbPc", "https://www.youtube.com/embed/3Q6JlEymVRE"
    , "https://www.youtube.com/embed/c8gEQw8sPok", "https://www.youtube.com/embed/LD077A_PyIQ"]


var i = 0;

        console.log(arr.length);
document.getElementById("right").addEventListener("click",()=>{
    i++;
    
    if(arr.length<i){
        i = 0 ;
    }


    document.getElementById("i").style.transform = "translateX(-50vw)"
    document.getElementById("i").style.opacity = "0";

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(100vw)"
    document.getElementById("i").style.opacity = "0";
        document.getElementById("i").src = arr[i];

    } ,1200 )
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)"
        document.getElementById("i").style.opacity = "1";

    } ,1500 )

    document.getElementById("num").innerHTML = `${i}/${arr.length}`
})




document.getElementById("left").addEventListener("click",()=>{
    i--;
    if(i<0){
        i = 8;
    }

    document.getElementById("i").style.transform = "translateX(50vw)"
    document.getElementById("i").style.opacity = "0";

    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(-100vw)"
    document.getElementById("i").style.opacity = "0";
    document.getElementById("i").src = arr[i];

    } ,1200 )
    window.setTimeout(()=>{

        document.getElementById("i").style.transform = "translateX(0vw)"
        document.getElementById("i").style.opacity = "1";

    } ,1500 )

    document.getElementById("num").innerHTML = `${i}/${arr.length}`
})
