function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation

const cardBtns = document.querySelectorAll("#btn-card");

for(const btn of cardBtns){
  btn.addEventListener("click", function(){
    const itemPrice = btn.parentNode.parentNode.childNodes[5].children[0];
    console.log(itemPrice)
  })
}
