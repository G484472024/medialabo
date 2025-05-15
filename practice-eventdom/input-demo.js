
function greeting(){
    console.log('動作確認');

    
    let i = document.querySelector('input[name="shimei"]');
    shimei = i.value;
    aisatsu = 'こんにちは,'+shimei+'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
}

let b = document.querySelector('button#print')
b.addEventListener('click', greeting);