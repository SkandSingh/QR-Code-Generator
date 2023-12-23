
const inputBox = document.querySelector('input');
const qr_image = document.querySelector('img')
const subButton = document.querySelector('button')
console.log("hello");
console.log(subButton);
subButton.onclick = qrfunc;
function qrfunc(){
 if(inputBox.value.trim() == '' || inputBox.value.length == 0){
 alert('Please write something')
 }
 
 else{
 qr_image.src = `https://api.qrserver.com/v1/create-qrcode/?size=150x150&data=${inputBox.value}`
 }
}
