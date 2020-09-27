const button = document.querySelector('button');
const rgb = document.getElementById('rgb');

setInterval( ()=> {
  button.addEventListener('click', ()=> {
    color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    button.classList.add('change');
    rgb.innerText = color;
    document.body.style.backgroundColor = color;
  })
  button.classList.remove('change');
}, 1000)
