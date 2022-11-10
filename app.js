const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const positionX = e.clientX - e.target.offsetLeft;
  const positionY = e.clientY - e.target.offsetTop;
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.cssText = `left:${positionX}px; top:${positionY}px;`;
  btn.append(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 400);
  console.log(e.target);
});
