function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation

const cardBtns = document.querySelectorAll("#btn-card");
let count = 0;
for (const btn of cardBtns) {
  btn.addEventListener("click", function () {
    count++;
    getElement("quantity").innerText = count;

    const itemImg =
      btn.parentNode.parentNode.parentNode.children[0].childNodes[1].src;
    const item = btn.parentNode.parentNode.childNodes[3].innerText;
    const itemPrice =
      btn.parentNode.parentNode.childNodes[5].children[0].innerText;

    const totalPrice = getElement("total-price").innerText;
    let currentTotalPrice = Number(itemPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotalPrice;

    const cardContainer = getElement("card-container");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
                <div id="item-img">
                  <img class="w-12" src="${itemImg}" alt="">
                </div>
                <div>
                  <h2 id="item-title" class="font-semibold text-gray-500">${item}</h2>
                  <h2 class="font-semibold text-gray-500 mt-1"><span id="item-price">${itemPrice}</span> TK</h2>
                </div>
              </div>
    `;
    cardContainer.append(newCard);

    document.getElementById("btn-clear").addEventListener('click',function(){
      getElement("card-container").innerHTML = ""
      getElement("quantity").innerText = 0;
      count=0
      getElement("total-price").innerText = 0;
    })
  });
}
