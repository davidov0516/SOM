const myButton = document.getElementById('plus-button');
const myModal = document.getElementById('myModal');
const close = document.getElementsByClassName('close')[0];

myButton.addEventListener('click', function() {
  myModal.classList.add('show');
});

close.addEventListener('click', function() {
  myModal.classList.remove('show');
});