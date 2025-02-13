const splash = document.querySelector('.splash');
var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio1"); 
var z = document.getElementById("myAudio2"); 
var c = document.getElementById("myAudio3"); 


function startEver(){
    setTimeout(()=>{
        c.play(); 
        splash.classList.add('display-none');
        
    }, 2000);
}



const answers = [
    "Really?",
    "Are you sure?",
    "Are you really really sure?",
    "Are you really really suuuuuure?"
]



const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const Submit = document.getElementById('Submit');
let i = 0;
let size = 50;
let clicks = 0;

// var DATECHECKING = $("#datecheck").val;
// var WHERECHECKING = $("#wherecheck")

// var NEWDATE = new Date(DATECHECKING)


function playAudio() { 
    x.play(); 
  } 

  document.getElementById('forgot-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default behavior (e.g., navigating if there's a link)
    this.textContent = '10 days and I am pretty sure its a dating app even if you say its not';  // Change the text to "Hint"
  });
  
  
  Submit.addEventListener('click', () => {
    const selectDate = document.getElementById('datecheck').value;  // Get the value of the date input
    const selectMeet = document.getElementById('wherecheck').value;  // Get the value of the location input


    // Check if the date is "2023-12-26" and the location is "Maum"
    if (clicks === 3) {
        if (selectDate === '2023-12-26' && selectMeet === 'Maum') {
            x.pause();
            y.play();
            startEver();
            clicks = 0;
            x.pause();
            y.play('vas.mp3');
            window.location.href = 'haniii.html';
        }
        if (selectMeet === 'hanitools') {
            x.pause();
            y.play();
            startEver();
            clicks = 0;
            x.pause();
            y.play('vas.mp3');
            window.location.href = 'hanitools.html';
        }
        clicks = 0;

        // change banner gif path
        let banner = document.getElementById('banner');
        banner.src = "public/images/sad.gif";
        refreshBanner();

        // hide buttons div
        let buttons = document.getElementsByClassName('buttons')[0];
        buttons.style.display = "none";

        // show message div
        let message = document.getElementsByClassName('message2')[0];
        message.style.display = "block";

        // Pause audio
        x.pause();
    }
    clicks++;

    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    let total = answers.length;

    // change button text
    if (i < total - 1) {
        Submit.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        Submit.innerHTML = "Nuh uhh try again";
        size = 50;
    }
});



// Submit.addEventListener('click', () => {
//     // Change banner source
//     const selectDate  = document.getElementById('datecheck').value;
//     const selectMeet  = document.getElementById('wherecheck').value;


    
    
//         if (clicks => 4 ) {
//             if (selectDate === '12/26/2023' && selectMeet === 'Maum') {
//                 x.pause();
//                 y.play();
//                 startEver();
//             clicks = 0;
//             x.pause()
//             y.play('vas.mp3');
    
//     }


//     // change banner gif path
//     let banner = document.getElementById('banner');
//     banner.src = "public/images/sad.gif";
//     refreshBanner();
//     // hide buttons div
//     let buttons = document.getElementsByClassName('buttons')[0];
//     buttons.style.display = "none";
//     // show message div
//     let message = document.getElementsByClassName('message2')[0];
//     message.style.display = "block";
//         refreshBanner();
//         x.pause()
//     }
//     clicks++;
//     // increase button height and width gradually to 250px
//     const sizes = [40, 50, 30, 35, 45]
//     const random = Math.floor(Math.random() * sizes.length);
//     size += sizes[random]
//     let total = answers.length;
//     // change button text
//     if (i < total - 1) {
//         Submit.innerHTML = answers[i];
//         i++;
//     } else if (i === total - 1) {
//         alert(answers[i]);
//         i = 0;
//         Submit.innerHTML = "Nuh uhh try again";
//         size = 50;
//     }
// });

yes_button.addEventListener('click', () => {
    x.pause()
    z.play();
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function createHearts() {
    for (let i = 0; i < 100000; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '90vh';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 40000);
        }, i * 300);
    }
}