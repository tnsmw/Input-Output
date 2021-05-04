
document.querySelector('#buy-drinks').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedDrink = this.querySelector('[name="drink"]:checked');
    const drinkSlug = selectedDrink.value;
    const drinkPrice = Number(selectedDrink.dataset.price);
    const moneyHeld = Number(this.querySelector('[name="money"]').value);
    if (isNaN(moneyHeld) || moneyHeld < drinkPrice) {
        alert('Not enough money');
        return;
    }
    showDrinks(Math.round(moneyHeld / drinkPrice), drinkSlug);
});
 
function showDrinks(amount, drink) {
    clearElement(document.querySelector('#amount'));
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const img = document.createElement('img');
        img.src = `${drink}.png`;
        img.alt = '';
        img.width = 100;
        img.height = 100;
        fragment.appendChild(img);
    }
    document.querySelector('#amount').appendChild(fragment);
}
 
function clearElement(element) {
    while (element.childNodes.length > 0) {
        element.removeChild(element.firstChild);
    }
}