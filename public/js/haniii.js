var rs = $("#rainSound")[0];
var bgMus = $("#bgMusic")[0];
var intro = $("#bgMusic")[0];
var drop = $("#theDrop")[0];
var clicks = 0;





var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";



  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
  
}


// CHERRY BLOSSOM AREA












  // Adjust the volume for all sounds (rain sound and background music)
  $('#volume').on('input', function() {
    var volume = $(this).val();
    rs.volume = volume;  // Set volume of rain sound
    bgMus.volume = volume;  // Set volume of background music
  });
  
  // Initialize the volume slider to match the current volume of both sounds
  $('#volume').val(rs.volume); 



 // jQuery to handle button click and play sound
 $('.invisible-button').click(function() {
  clicks++;

  if (clicks === 1) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text('or was it raining?');
    makeItRain();
  
    if (rs.paused) {
      rs.play();
    }
    
  }
  if (clicks === 2) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("I don't think it matters");

    
  }

  if (clicks === 3) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("im always here and you know that");
 
    
  }

  if (clicks === 4) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("when i met you in maum");
 
    
  }

  if (clicks === 5) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("i didn't expect that you'd light up my world");
    $('.rain').empty();
    rs.pause();
    intro.play();

        // Change the background gradient with a smooth fade transition
        $('body').fadeOut(300, function() {
          $('body').css('background', 'linear-gradient(to bottom,rgb(249, 219, 219),rgb(255, 255, 255))');  // Update the gradient as you wish
          $('body').fadeIn(300);  // Fade it back in smoothly
      });

 
    
  }

  if (clicks === 6) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("falling in love with you was the easiest thing ive ever done");
    $('body').sakura();


  }

  if (clicks === 7) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("I LOVE YOU FOR ETERNITY AND MORE");


  }
  if (clicks === 8) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("HAPPY VALENTINE'S DAY DARLING");
    intro.pause();
    drop.play();


  }
  if (clicks === 9) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("from your distant lullaby");


  }
  if (clicks === 10) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("oh and also date later? <3");

  }
  if (clicks === 11) {
    // Change the text of the glowing text and trigger the rain effect
    $('.logo-1').text("oh and also date later? <3");
    window.location.href = 'hanitools.html';

  }


  // Re-enable the button click event (in case it gets disabled by other events)
  $(this).prop('disabled', false);
});

// Ensure the button remains clickable by explicitly enabling it
$('.invisible-button').prop('disabled', false);



// CHERRY BLOSSOM AREA



// Plugin code
(function ($) {
  /** Polyfills and prerequisites **/

  // requestAnimationFrame Polyfill
  var lastTime    = 0;
  var vendors     = ['webkit', 'o', 'ms', 'moz', ''];
  var vendorCount = vendors.length;

  for (var x = 0; x < vendorCount && ! window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if ( ! window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback) {
          var currTime   = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));

          var id   = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
          lastTime = currTime + timeToCall;

          return id;
      };
  }

  if ( ! window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
  }

  // Prefixed event check
  $.fn.prefixedEvent = function(type, callback) {
      for (var x = 0; x < vendorCount; ++x) {
          if ( ! vendors[x]) {
              type = type.toLowerCase();
          }

          el = (this instanceof jQuery ? this[0] : this);
          el.addEventListener(vendors[x] + type, callback, false);
      }

      return this;
  };

  // Test if element is in viewport
  function elementInViewport(el) {

      if (el instanceof jQuery) {
          el = el[0];
      }

      var rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
  }

  // Random array element
  function randomArrayElem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  // Random integer
  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /** Actual plugin code **/
  $.fn.sakura = function (event, options) {

      // Target element
      var target = this.selector == "" ? $('body') : this;

      // Defaults for the option object, which gets extended below
      var defaults = {
          blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-soft-right', 'blow-medium-right'],
          className: 'sakura',
          fallSpeed: 1,
          maxSize: 14,
          minSize: 10,
          newOn: 300,
          swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
      };

      var options = $.extend({}, defaults, options);

      // Default or start event
      if (typeof event === 'undefined' || event === 'start') {

          // Set the overflow-x CSS property on the target element to prevent horizontal scrollbars
          target.css({ 'overflow-x': 'hidden' });

          // Function that inserts new petals into the document
          var petalCreator = function () {
              if (target.data('sakura-anim-id')) {
                  setTimeout(function () {
                      requestAnimationFrame(petalCreator);
                  }, options.newOn);
              }

              // Get one random animation of each type and randomize fall time of the petals
              var blowAnimation = randomArrayElem(options.blowAnimations);
              var swayAnimation = randomArrayElem(options.swayAnimations);
              var fallTime = ((document.documentElement.clientHeight * 0.007) + Math.round(Math.random() * 5)) * options.fallSpeed;

              // Build animation
              var animations =
                  'fall ' + fallTime + 's linear 0s 1' + ', ' +
                      blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + randomInt(0, 20)) + 's linear 0s infinite' + ', ' +
                      swayAnimation + ' ' + randomInt(2, 4) + 's linear 0s infinite';

              // Create petal and randomize size
              var petal  = $('<div class="' + options.className + '" />');
              var height = randomInt(options.minSize, options.maxSize);
              var width  = height - Math.floor(randomInt(0, options.minSize) / 3);

              // Apply Event Listener to remove petals that reach the bottom of the page
              petal.prefixedEvent('AnimationEnd', function () {
                  if ( ! elementInViewport(this)) {
                      $(this).remove();
                  }
              })
              // Apply Event Listener to remove petals that finish their horizontal float animation
              .prefixedEvent('AnimationIteration', function (ev) {
                  if (
                      (
                          $.inArray(ev.animationName, options.blowAnimations) != -1 ||
                          $.inArray(ev.animationName, options.swayAnimations) != -1
                      ) &&
                      ! elementInViewport(this)
                  ) {
                      $(this).remove();
                  }
              })
              .css({
                  '-webkit-animation': animations,
                  animation: animations,
                  'border-radius': randomInt(options.maxSize, (options.maxSize + Math.floor(Math.random() * 10))) + 'px ' + randomInt(1, Math.floor(width / 4)) + 'px',
                  height: height + 'px',
                  left: (Math.random() * document.documentElement.clientWidth - 100) + 'px',
                  'margin-top': (-(Math.floor(Math.random() * 20) + 15)) + 'px',
                  width: width + 'px'
              });

              target.append(petal);
          };

          // Finally: Start adding petals
          target.data('sakura-anim-id', requestAnimationFrame(petalCreator));

      }
      // Stop event, which stops the animation loop and removes all current blossoms
      else if (event === 'stop') {

          // Cancel animation
          var animId = target.data('sakura-anim-id');

          if (animId) {
              cancelAnimationFrame(animId);
              target.data('sakura-anim-id', null);
          }

          // Remove all current blossoms
          setTimeout(function() {
              $('.' + options.className).remove();
          }, (options.newOn + 50));

      }
  };
}(jQuery));