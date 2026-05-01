// let countDownDate = new Date(" 17 july, 2028 00:00:00 ").getTime();

// let updatecount = setInterval(function(){

//   let now = new Date.getTime();
//   let diffrence = countDownDate - now;

//   let days = Math.floor(diffrence /(1000*60*60*24));
//   let hours = Math.floor((diffrence % (1000*60*60*24))/(1000*60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("secondsleft").innerHTML = seconds;
// },1000);

 (function() {
    // TARGET: Summer Olympics 2028 – July 21, 2028, 00:00:00 LOCAL TIME (user's timezone)
    // Month in JS: 6 = July (0-indexed) , day 21, hour 0, minute 0, second 0
    const olympicsDate = new Date(2028, 6, 21, 0, 0, 0);
    const countDownDate = olympicsDate.getTime();

    // DOM elements
    const daysElem = document.getElementById("dayleft");
    const hoursElem = document.getElementById("hourleft");
    const minutesElem = document.getElementById("minutesleft");
    const secondsElem = document.getElementById("secondsleft");
    const expiredDiv = document.getElementById("expireNote");

    // Helper: format numbers with leading zero for hours/minutes/seconds
    function formatTwoDigits(num) {
      return num < 10 ? '0' + num : '' + num;
    }

    let countInterval = null;
    let alreadyExpired = false;

    function updateCountdown() {
      const now = new Date().getTime();
      let distance = countDownDate - now;

      // If countdown finished (target time passed)
      if (distance <= 0) {
        if (!alreadyExpired) {
          // Cleanup interval if running
          if (countInterval) {
            clearInterval(countInterval);
            countInterval = null;
          }
          alreadyExpired = true;
          // Set all values to zero and show "00"
          daysElem.textContent = "00";
          hoursElem.textContent = "00";
          minutesElem.textContent = "00";
          secondsElem.textContent = "00";
          // Show celebratory expired message
          expiredDiv.style.display = "block";
          // Optional: add a little fade to count area but keep readable
          const countContainer = document.getElementById("count");
          if (countContainer) countContainer.style.opacity = "0.85";
        }
        return;
      }

      // if we are here, distance > 0 → active countdown, hide expired message if visible
      if (alreadyExpired) {
        alreadyExpired = false;
        expiredDiv.style.display = "none";
        const countContainer = document.getElementById("count");
        if (countContainer) countContainer.style.opacity = "1";
      }

      // calculate components
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // update DOM (days can be large, no leading zero; hours/minutes/seconds with two digits)
      daysElem.textContent = days;
      hoursElem.textContent = formatTwoDigits(hours);
      minutesElem.textContent = formatTwoDigits(minutes);
      secondsElem.textContent = formatTwoDigits(seconds);
    }

    // initial call to avoid empty dash
    updateCountdown();

    // set interval only if not already expired (avoid redundant timers if past date)
    if (!alreadyExpired) {
      countInterval = setInterval(updateCountdown, 1000);
    } else {
      // if already past target (extremely rare for 2028 but defensive)
      expiredDiv.style.display = "block";
      daysElem.textContent = "00";
      hoursElem.textContent = "00";
      minutesElem.textContent = "00";
      secondsElem.textContent = "00";
    }

    // Optional: Cleanup interval on page unload (good practice)
    window.addEventListener("beforeunload", function() {
      if (countInterval) clearInterval(countInterval);
    });

    // Bonus small console greeting (just for fun)
    console.log(`🏅 LA28 countdown active · target: ${olympicsDate.toString()}`);
  })();