const envelope = document.querySelector('.envelope');

// Fungsi buka amplop
function openLetter(){ 
    envelope.classList.add('open'); 
    document.getElementById('music').play(); 
}

// Fungsi tutup amplop
function closeLetter(e){ 
    e.stopPropagation(); 
    envelope.classList.remove('open'); 
}

// Fungsi pindah ke halaman 2
function nextPage(){ 
    window.location.href='page2.html'; 
}

// Membuat animasi bunga
for(let i=0;i<25;i++){
    const petal = document.createElement('div');
    petal.className='petal';
    petal.style.left=Math.random()*100+'%';
    petal.style.animationDuration=3+Math.random()*5+'s';
    document.querySelector('.flowers').appendChild(petal);
}
