//scroll functons...
function scrol(){
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.onscroll= function(){
    if(window.scrollY > 1000){
        document.getElementById('gototop').style.display= 'block';
    }else{
        document.getElementById('gototop').style.display= 'none';
    }
}

//line visibility...
function all(){
    document.getElementById('lin1').style.width='16%';
    document.getElementById('lin2').style.width='16%';

    document.getElementById('gototop').style.display= 'none';
}
// if (window.innerWidth <= 600) {
//         document.getElementById('lin1').style.width = '0%'; // Increase width by 25%
//         document.getElementById('lin2').style.width = '0%';
//     }