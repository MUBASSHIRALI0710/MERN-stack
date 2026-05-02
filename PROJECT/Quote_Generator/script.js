const quotes = [
  "Growth begins where your comfort zone ends.",
  "Don't wait for the perfect moment—take the moment and make it perfect.",
  "A kind word costs nothing but buys everything.",
  "Your only limit is the story you keep telling yourself.",
  "Success is not about never falling, but about rising one more time than you fall.",
  "Comparison is the thief of joy; stay in your own lane.",
  "The smallest act of kindness is worth more than the grandest intention.",
  "You can't change the wind, but you can adjust your sails.",
  "Peace is not the absence of conflict, but the ability to handle it with grace.",
  "Don't let yesterday's regrets steal today's possibilities.",
  "Every master was once a beginner who refused to give up.",
  "Listen more than you speak—you might learn something worth saying.",
  "What you water grows. Water your dreams, not your fears.",
  "Happiness is a direction, not a destination.",
  "The heaviest burdens are the ones we carry in silence.",
  "A grateful heart turns what we have into enough.",
  "Sometimes you have to lose yourself to find who you're meant to become.",
  "Patience is not passive waiting—it is active trust in the process.",
  "Your time is precious. Spend it only on what deserves you.",
  "Courage doesn't always roar. Sometimes it's the quiet voice saying, 'I'll try again tomorrow.'",
  "Forgiveness is giving up the hope for a different past.",
  "Don't be afraid to walk alone. The most beautiful views come from less traveled paths.",
  "Joy is found not in having more, but in needing less.",
  "Every sunset is an invitation to rest and trust that a new dawn will come.",
  "Be the person who makes others feel seen, heard, and valued."
];


function generatQuote() {
  const quotes_text = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length);

  quotes_text.textContent = quotes[index]
}
setInterval(generatQuote, 2000)


function randomColour() {
  // Generate random hex color
  const randomColorGenerat = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColorGenerat;
}
setInterval(randomColour, 2010)

const containers = document.getElementById("container")
containers.style.backgroundColor = "#18be8b";
containers.style.border = "5px solid #054431";
containers.style.color = "#370565";
