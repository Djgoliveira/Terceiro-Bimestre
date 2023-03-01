
function mudarCor(){

    let dark = document.querySelector('.dark');
    dark.style.backgroundColor ='#000000';
    dark.style.color = "#fff"
    
    let felinos = document.querySelector('h1');
    felinos.classList.add('felinos');    
      
    let elementosFelinos = document.getElementsByClassName('div.container, div.item');
    elementosFelinos.style.backgroundColor='#000';
}

function voltarCor(){
    location.reload();
}




    

    



//let felinos = document.querySelector('div');
//felinos.classList.add('container-items');