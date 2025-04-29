const navBtns = document.querySelectorAll("nav .row div");

function scrollToDiv(divId) {
  const element = document.getElementById(`${divId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let scrollId = btn.textContent.toLowerCase();
    scrollToDiv(scrollId);
  });
});
