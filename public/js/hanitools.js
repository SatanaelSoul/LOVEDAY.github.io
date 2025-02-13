var bgHanitools = document.getElementById("bgHaniTools");
const splash = document.querySelector('.splash');
const waitingMessage = document.getElementById("waitingMessage");

var clicks = 0;
var listContainer = document.getElementById("listContainer");


waitingMessage.style.display = 'none'; 
listContainer.style.display = "none";
chiki.style.display = "none"; 
imigi.style.display = "none"; 
imigi2.style.display ="none";
imigi3.style.display ="none";

function startEver(){
    const splashText = document.getElementById('splashText');
    if (clicks === 1){
        splashText.innerHTML = "Anyway!"; 
    }
    if (clicks === 2){
        splashText.innerHTML = "Here's my Valentine's Gift..."; 
    }
    if (clicks === 3){
        splashText.innerHTML = "HANI TOOLS!"; 
    }
    if (clicks === 4){
        splashText.innerHTML = "Explore and have funnnn!"; 
    }
    if (clicks === 5){
        splashText.innerHTML = "I love youuuu muaaaaaaaaaaaaaa"; 
    }
    if (clicks === 6){
      splashText.innerHTML = "btw type hanitools in  where did we meet if you wanna here quick"; 
  }
    if (clicks ===7){
        bgHanitools.play()
        createHearts();
        setTimeout(()=>{
            splash.classList.add('display-none');
        }, 2000);
    }
}



document.getElementById('loveTime').addEventListener('click', function() {
    // Start the audio when the button is clicked
    startTimer();
});

document.getElementById('lucky_but').addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
    chiki.style.display ="none";
    imigi.style.display ="none";
    imigi2.style.display ="none";
    imigi3.style.display ="none";

  if (randomNumber === 1){
    window.open('https://classic.minecraft.net/', '_blank');

  }
  if (randomNumber === 2){
    chiki.style.display = "flex"; 

  }
  if (randomNumber === 3){
    imigi3.style.display ="flex";

  }
  if (randomNumber === 4){
    imigi.style.display = "flex"; 

  }
  if (randomNumber === 5){
    imigi2.style.display = "flex"; 

  }


});

document.getElementById('achievements').addEventListener('click', function() {
  // Start the audio when the button is clicked
  const timerDisplay = document.getElementById("timerDisplay");
  if (listContainer.style.display === "none" || listContainer.style.display === "") {
    listContainer.style.display = "flex"; // Show the list
  } else {
    listContainer.style.display = "none"; // Hide the list
  }


});


// Function to go back to the main page
function goBack() {
  window.location.href = 'hanitools.html'; // Redirect to the main menu
}

// Function to start the timer and show time elapsed since December 26, 2023
let timerInterval;

// Function to fetch the current time from Cyprus (World Time API)
function fetchCurrentTime() {
  return fetch('http://worldtimeapi.org/api/timezone/E Europe/Nicosia')  // Cyprus time
    .then(response => response.json())
    .then(data => {
      return new Date(data.datetime); // Return the current time from the API
    })
    .catch(error => {
      console.error('Error fetching time:', error);
      return new Date(); // Fallback to the local time if the API fails
    });
}

// Function to start the timer and show time elapsed since December 26, 2023
function startTimer() {
  const targetDate = new Date("2023-12-26"); // Set the target date
  const targetDateOFF = new Date("2024-02-28"); // Set the target date

  const timerDisplay = document.getElementById("timerDisplay");
  const timerDisplayOFF = document.getElementById("timerDisplayOFF");

  // Display waiting message until time is fetched
  waitingMessage.style.display = 'none';  // Show waiting message
  timerDisplay.style.display = 'none';  // Hide timer initially
  timerDisplayOFF.style.display = 'none'; 

  // Fetch the current time from the Cyprus API, or use local time if API fails
  fetchCurrentTime().then(currentTime => {
    // Hide the waiting message once the time is fetched
    waitingMessage.style.display = 'none';  

    // Show the timer display
    timerDisplay.style.display = 'block';  
    timerDisplayOFF.style.display = 'block'; 

    if (timerInterval) {
      clearInterval(timerInterval); // Clear any existing timer
    }

    // Set interval to update the timer every second
    timerInterval = setInterval(() => {
      const timeDiff = currentTime - targetDate;  // Calculate time difference in milliseconds
      const timeDiffOFF = currentTime - targetDateOFF;  // Calculate time difference in milliseconds


      // Convert milliseconds to days, hours, minutes, and seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      const daysF = Math.floor(timeDiffOFF / (1000 * 60 * 60 * 24));
      const hoursF = Math.floor((timeDiffOFF % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesF = Math.floor((timeDiffOFF % (1000 * 60 * 60)) / (1000 * 60));
      const secondsF = Math.floor((timeDiffOFF % (1000 * 60)) / 1000);

      // If the time difference results in NaN, fall back to using the local computer's time
      if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        currentTime = new Date();  // Fallback to local time if calculations are invalid
        const localTimeDiff = currentTime - targetDate;
        const localTimeDiffOFF = currentTime - targetDateOFF;

        days = Math.floor(localTimeDiff / (1000 * 60 * 60 * 24));
        hours = Math.floor((localTimeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((localTimeDiff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((localTimeDiff % (1000 * 60)) / 1000);

        daysF = Math.floor(localTimeDiffOFF / (1000 * 60 * 60 * 24));
        hoursF = Math.floor((localTimeDiffOFF % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesF = Math.floor((localTimeDiffOFF % (1000 * 60 * 60)) / (1000 * 60));
        secondsF = Math.floor((localTimeDiffOFF % (1000 * 60)) / 1000);
      }

      // Update the timer display with the elapsed time
      timerDisplay.innerHTML = `Time Elapsed Since The Day I Fell for You: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      timerDisplayOFF.innerHTML = `Time Elapsed Since We got Together: ${daysF} days ${hoursF} hours ${minutesF} minutes ${secondsF} seconds`;


      // Update the current time (for real-time calculations)
      currentTime.setSeconds(currentTime.getSeconds() + 1); // Increment the time by 1 second
    }, 1000); // Update every second
  });
}

// Function to create hearts floating on the screen
function createHearts() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';  // Random horizontal position
      heart.style.top = '90vh';  // Start from the bottom of the page
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';  // Random font size
      document.body.appendChild(heart);

      // Remove the heart after 40 seconds
      setTimeout(() => heart.remove(), 40000); 
    }, 300);  // Create a new heart every 300 milliseconds
}
