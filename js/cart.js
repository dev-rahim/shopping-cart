function updateProductNumber(isAdd, productName, productPrice) {
    const inputFild = document.getElementById(productName + '-input-fild');
    const inputFildValue = parseInt(inputFild.value);
    if (isAdd == true) {
        inputFild.value = inputFildValue + 1;
    }
    else if (inputFildValue > 0) {
        inputFild.value = inputFildValue - 1;
    }
    const totalAmmount = document.getElementById(productName + '-total-ammount');
    totalAmmount.innerText = inputFild.value * productPrice;
    //update subtotal
    const blackIphoneTotalPrice = document.getElementById('black-iphon-total-ammount').innerText;
    const blackIphoneTotalPriceNumber = parseFloat(blackIphoneTotalPrice);
    const casingTotalPrice = document.getElementById('chasing-total-ammount');
    const casingTotalPriceNumber = parseFloat(casingTotalPrice.innerText);
    const subTotal = blackIphoneTotalPriceNumber + casingTotalPriceNumber;
    const subtotalText = document.getElementById('subtotal');
    subtotalText.innerText = subTotal;

    // calclulate tax
    const sublotalAmmount = parseFloat(subtotalText.innerText);
    const totalTax = sublotalAmmount / 10;
    document.getElementById('tax').innerText = totalTax;
    //calculate total
    const total = sublotalAmmount + totalTax;
    document.getElementById('total').innerText = total;




}
function calculateTotal(product) {
    const blackIphoneTotalPrice = document.getElementById('black-iphon-input-fild').innerText;
    const blackIphoneTotalPriceNumber = parseFloat(blackIphoneTotalPrice);
    const casingTotalPrice = document.getElementById('chasing-input-fild').innerText;
    const casingTotalPriceNumber = parseFloat(casingTotalPrice);
    const subTotal = blackIphoneTotalPriceNumber + casingTotalPriceNumber;
    document.getElementById('subtotal').innerText = subTotal;


}

document.getElementById('black-iphon-plus-button').addEventListener('click', function () {
    updateProductNumber(true, 'black-iphon', 420);
    // const blackIphoneInputFild = document.getElementById('black-iphon-input-fild');
    // const blackIphoneInputFildValue = parseInt(blackIphoneInputFild.value);
    // blackIphoneInputFild.value = blackIphoneInputFildValue + 1;
    // console.log('plus');
})
document.getElementById('black-iphon-minus-button').addEventListener('click', function () {
    // const blackIphoneInputFild = document.getElementById('black-iphon-input-fild');
    // const blackIphoneInputFildValue = parseInt(blackIphoneInputFild.value);
    // blackIphoneInputFild.value = blackIphoneInputFildValue - 1;
    updateProductNumber(false, 'black-iphon', 420)
    // console.log('minus');
})
document.getElementById('chacing-plus').addEventListener('click', function () {
    updateProductNumber(true, 'chasing', 200)
    // console.log('casing plus');
})
document.getElementById('chacing-minus').addEventListener('click', function () {
    updateProductNumber(false, 'chasing', 200)
    // console.log('chacing minus');
})

