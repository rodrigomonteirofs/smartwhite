const eventoMenu = document.querySelector('.material-symbols-outlined');

eventoMenu.addEventListener('click', clickMenu);

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none';
    } else{
        itens.style.display = 'block';
    }
}