// document.getElementById('button-login').addEventListener('click', function(event){
//     event.preventDefault();

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);
// })

document.getElementById('button-login')
.addEventListener('click', function(event){
 console.log('button clicked')
 event.preventDefault();

 const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value;

//  console.log(phoneNumber, pinNumber);

if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('your are logged in')
    window.location.href = 'home.html';
}
else{
    alert('Wrong phone number or pin')
}
})