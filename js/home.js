

// step 1
document.getElementById('btn-process').addEventListener('click', function (event) {
    // step 2
    event.preventDefault();
    // console.log('hhhfh');
    // step 3
    const inputAmount = document.getElementById('input-amount').value;
    const inputPassword = document.getElementById('input-password').value;
    // console.log(inputAmount, inputPassword)

    // step 4
    if (inputPassword === '123') {
        // step 5
        const availableBalance = document.getElementById('available-balance').innerText;
        // step 6
        const newAmount = parseInt(availableBalance) + parseInt(inputAmount);
        console.log(newAmount);

        document.getElementById('available-balance').innerText = newAmount;

    }
    document.getElementById('input-amount').value = '';
    document.getElementById('input-password').value = '';
})
