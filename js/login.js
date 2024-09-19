// console.log('hello')
// step 1
document.getElementById('button-login').addEventListener('click', function (event) {
    // step 2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // step 3 get the phone number and the pin number
    const phoneNumber = document.getElementById('number-phone').value;
    const pin = document.getElementById('pin').value;
    console.log(phoneNumber, pin);
    // step 4 validate phone and pin
    if(phoneNumber === '0178' && pin === '123'){
        alert('login successfully')
        window.location.href = '/home.html';
    }else{
        alert('wrong phone number or pin')
    }
})