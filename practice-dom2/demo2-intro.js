let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom(){
    //練習5-2
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend',l);

    l = document.createElement('li');
    l.textContent = 'ごましお';
    u.insertAdjacentElement('beforeend',l);

    //練習5-3
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src','bluemoon.jpg');
    
    let a = document.createElement('a');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);
    a.textContent = '拓殖大学HP';
    a.setAttribute('href','https://www.takushoku-u.ac.jp');

    //練習5-4
    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen');
    u.remove();

    //練習5-5
    u = document.createElement('ul');
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend',u);
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend',l);
}