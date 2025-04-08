function reveal(){
    document.getElementById('appear').style.display='block' ;
    document.getElementById('dissapear').style.display='none';
}
function next(){
    document.getElementById('Q1').style.display='block' ;
    document.getElementById('appear').style.display='none';
}
function next1(){
    document.getElementById('Q2').style.display='block' ;
    document.getElementById('Q1').style.display='none';
}
function next2(){
    document.getElementById('Q3').style.display='block'; 
    document.getElementById('Q2').style.display='none';
}
function next3(){
    document.getElementById('Q3').style.display='block'; 
    document.getElementById('Q4').style.display='none';
}

function hide() {
    document.getElementById('hide').style.display= 'none';
    document.getElementById('wrong').style.display= 'none'
    
}
