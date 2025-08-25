function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation

document.querySelectorAll("#btn-card").addEventListener("click", function () {
  alert("clicked")
});
