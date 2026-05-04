document.body.addEventListener("click", (event) => {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.textContent = "hi";
  const x = event.clientX;
  const y = event.clientY;
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;
  // const color = ["red","green","orange","pink","blue", "yellow", "purple","white","white"]
  // random colour generat hex colour
  circle.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  circle.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const text = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "NoSQL",
  "JSON",
  "REST API",
  "JWT",
  "Mongoose",
  "Components",
  "Hooks",
  "NPM",
  "Middleware",
  "SPA ",
  "Full-Stack"
]

  circle.innerHTML = text[Math.floor(Math.random() * text.length)];
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000)
})