const bgcolor = document.querySelector('.background');
const head = document.querySelector('header');
const nav = document.querySelector('header nav');
const title = document.querySelector('#title');
const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelector('h1');
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const h5 = document.querySelectorAll('h5');
const a = document.querySelectorAll('a');
const span = document.querySelectorAll('span');
const btn = document.querySelectorAll('button');
const text = document.querySelector('.text');
const fb = document.querySelector('#footer-block');
const sb = document.querySelector('.subscribe-block');
const li = document.querySelectorAll('li');
const p = document.querySelectorAll('p');
//const input = document.querySelectorAll('input');
const i = document.querySelectorAll('i');
//const sm = document.querySelector('.submenu');
const ul = document.querySelector('.submenu ul');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');


let bool = true;
let b = 0;

bgcolor.onclick = () => {
    title.classList.toggle('active');
    head.classList.toggle('active');
    nav.classList.toggle('active');
    block1.classList.toggle('active');
    block2.classList.toggle('active');
    fb.classList.toggle('active');
    sb.classList.toggle('active');
    text.classList.toggle('active');
    h1.classList.toggle('active');
    li.forEach(item1 => {
        item1.classList.toggle('active'); 
    });
    btn.forEach(item2 => {
        item2.classList.toggle('active'); 
    });
    a.forEach(item3 => {
        item3.classList.toggle('active'); 
    });
    h2.forEach(item4 => {
        item4.classList.toggle('active'); 
    });
    p.forEach(item5 => {
        item5.classList.toggle('active'); 
    });
    h3.forEach(item6 => {
        item6.classList.toggle('active'); 
    });
    h4.forEach(item8 => {
        item8.classList.toggle('active'); 
    });
    h5.forEach(item7 => {
        item7.classList.toggle('active');
    })
    span.forEach(item9 => {
        item9.classList.toggle('active'); 
    });
//    input.forEach(item10 => {
//        item10.classList.toggle('active'); 
//    });
    i.forEach(item11 => {
        item11.classList.toggle('active'); 
    });
    
    if (bool) {
        document.body.style.background = '#222';
        bool = false;
    } 
    else {
        document.body.style.background = '#fff';
        bool = true;
    }
    ul.classList.toggle('active');
//    sm.classList.toggle('active');
   
    b++;
    if (b == 1) {
        img1.style.display = 'none';
        img2.style.display = 'block';
        img3.style.display = 'none';
        img4.style.display = 'block';
    } if (b == 2) {
        img1.style.display = 'block';
        img2.style.display = 'none';
        img3.style.display = 'block';
        img4.style.display = 'none';
    }
    b == 2 ? b = 0:'';
};

//let d = 0;
//document.onmousewheel = () => {
//    
//    nav.style.height = '80px';  
//};

window.onscroll = () => {
   if (window.scrollY > 50) {
       nav.style.height = '80px';
       nav.style.borderBottom = '1px solid #c5c5c5';
   } else {
       nav.style.height = '100px';
       nav.style.borderBottom = '1px solid #fff';
   }
};


