function getPilihanComp(){
    const comp = Math.random();
    if (comp < 0.34 ) return 'gajah';
    if (comp >=0.32 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getRule(comp , player) {
    if (player == comp ) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' :
    'KALAH!'; 
}

function putar(){
    const imgComp = document.querySelector('.img-comp');
    const gambar = ['gajah','semut','orang'];
    let i = 0;

    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComp = getPilihanComp();
        const pilihanPlayer = pil.className;
        const hasil = getRule(pilihanComp,pilihanPlayer);
        
        putar();

        setTimeout(function(){

        const imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src' , 'img/' + pilihanComp + '.png');
        
        if (hasil == 'MENANG!') {
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            info.style.border = '8px solid lime';
            info.style.color = 'lime';
        }
        else if (hasil == 'SERI!') {
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            info.style.border = '8px solid yellow';
            info.style.color = 'yellow';
        } else {
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            info.style.border = '8px solid red';
            info.style.color = 'red';
        }

        }, 1000);

        
        });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){

//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getRule(pilihanComp,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src' , 'img/' + pilihanComp + '.png');
    
//     if (hasil == 'MENANG!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid lime';
//         info.style.color = 'lime';
//     }
//     else if (hasil == 'SERI!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid yellow';
//         info.style.color = 'yellow';
//     } else {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid red';
//         info.style.color = 'red';
//     }
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){

//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getRule(pilihanComp,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src' , 'img/' + pilihanComp + '.png');
    
//     if (hasil == 'MENANG!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid lime';
//         info.style.color = 'lime';
//     }
//     else if (hasil == 'SERI!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid yellow';
//         info.style.color = 'yellow';
//     } else {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid red';
//         info.style.color = 'red';
//     }
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){

//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getRule(pilihanComp,pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src' , 'img/' + pilihanComp + '.png');
    
//     if (hasil == 'MENANG!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid lime';
//         info.style.color = 'lime';
//     }
//     else if (hasil == 'SERI!') {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid yellow';
//         info.style.color = 'yellow';
//     } else {
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//         info.style.border = '8px solid red';
//         info.style.color = 'red';
//     }
// });