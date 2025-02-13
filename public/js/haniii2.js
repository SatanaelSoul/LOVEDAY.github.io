const invizBut = document.getElementById('inviz');
const theWords = document.getElementById('logo-1');
var rainingSound = document.getElementById("rainSound"); 

let clicks = 0;


invizBut.addEventListener('click', () => {
    const theWords = document.getElementById('logo-1');
    clicks ++;
    if (clicks === 1){
        rainingSound.play();
        theWords.textContent = 'Angas';


    }

});
