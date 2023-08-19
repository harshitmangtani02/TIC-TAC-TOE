let f=1,cnt=0,a=0;

for(let i=1;i<=9;i++){
    let btn=document.getElementById(i);
    
    btn.addEventListener("click",function(e){
        if(btn.style.backgroundImage=="" && a==0){
            if(f%2==0){
                btn.style.backgroundImage='url("cross.png")'
                cnt++
            }
            else{
                btn.style.backgroundImage='url("circle.png")'
                cnt++
            }
            f++;
        
            if(document.getElementById('1').style.backgroundImage==document.getElementById('2').style.backgroundImage && document.getElementById('2').style.backgroundImage==document.getElementById('3').style.backgroundImage){
                if(document.getElementById('1').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('1').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('4').style.backgroundImage==document.getElementById('5').style.backgroundImage && document.getElementById('5').style.backgroundImage==document.getElementById('6').style.backgroundImage){
                if(document.getElementById('4').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('4').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('7').style.backgroundImage==document.getElementById('8').style.backgroundImage && document.getElementById('8').style.backgroundImage==document.getElementById('9').style.backgroundImage){
                if(document.getElementById('7').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('7').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('1').style.backgroundImage==document.getElementById('4').style.backgroundImage && document.getElementById('4').style.backgroundImage==document.getElementById('7').style.backgroundImage){
                if(document.getElementById('1').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('1').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('2').style.backgroundImage==document.getElementById('5').style.backgroundImage && document.getElementById('5').style.backgroundImage==document.getElementById('8').style.backgroundImage){
                if(document.getElementById('2').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('2').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('3').style.backgroundImage==document.getElementById('6').style.backgroundImage && document.getElementById('6').style.backgroundImage==document.getElementById('9').style.backgroundImage){
                if(document.getElementById('3').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('3').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('1').style.backgroundImage==document.getElementById('5').style.backgroundImage && document.getElementById('5').style.backgroundImage==document.getElementById('9').style.backgroundImage){
                if(document.getElementById('1').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('1').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(document.getElementById('3').style.backgroundImage==document.getElementById('5').style.backgroundImage && document.getElementById('5').style.backgroundImage==document.getElementById('7').style.backgroundImage){
                if(document.getElementById('3').style.backgroundImage=='url("cross.png")'){
                    document.getElementById("ans").innerHTML="<h2>X wins</h2>"
                    a=1;
                }
                else if(document.getElementById('3').style.backgroundImage=='url("circle.png")'){
                    document.getElementById("ans").innerHTML="<h2>O wins</h2>"
                    a=1;
                }
            }
            if(cnt==9 && a==0){
                document.getElementById("ans").innerHTML="<h2>DRAW</h2>"
            }
        }
    })
}

document.getElementById("submit").addEventListener("click",function(e){
    for(let i=1;i<=9;i++){
        let y=document.getElementById(i)
        y.style.backgroundImage=""
        let f=document.getElementById("ans")
        f.innerHTML=""
    }
    a=0
    cnt=0
})
