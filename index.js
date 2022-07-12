function humberger(){
   const menu = document.getElementById('headerNav');
   const nav = document.getElementById('headerNavLink');

   menu.addEventListener('click', () =>{
    nav.classList.toggle('active');
   });
}

humberger();

function slideDown(){
    const h2 = document.getElementById('h2SlideDown');
    const ulContents = document.getElementById('slideDownContents');

    h2.addEventListener('click', () =>{
        h2.classList.toggle('hide_item');
        ulContents.classList.toggle('show_contents');
    });
}

slideDown();

function modal(){
    const modalButton = document.getElementById('modalOpen');
    const modalOpen = document.getElementById('modalContents');
    const modalClose = document.getElementById('modalClose');
    
    modalButton.addEventListener('click', () =>{
        modalOpen.classList.add('show');
    });
    modalClose.addEventListener('click', () =>{
        modalOpen.classList.remove('show');
    });
}

modal();