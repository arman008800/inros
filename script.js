const bgcolor = document.querySelector('.background');
const head = document.querySelector('header');
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
const img = document.querySelectorAll('img');


bgcolor.onclick = () => {
    title.classList.toggle('active');
    head.classList.toggle('active');
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
    img.forEach(item12 => {
        item12.classList.toggle('active'); 
    });
};






