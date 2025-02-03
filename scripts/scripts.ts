document.querySelector('#app .contacts .email')!.addEventListener('click', function() {

    navigator.clipboard.writeText(this.innerText);

});