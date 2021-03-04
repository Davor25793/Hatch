const buttons = [...document.querySelectorAll('.btn-item')];
let divs = [...document.querySelectorAll('.img-item')]
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(el) {
  el.addEventListener('click', function(e){
    e.preventDefault();
    
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})



buttons.forEach(button => {
  button.addEventListener('click', () => {

    const id = button.id;
    remCurr()
    button.classList.toggle('btn-active')

    divs.forEach(div => {
      if(div.classList.contains(id)){
        div.style.display = 'block';
      }else{
        div.style.display = 'none';
      }
    })
  })
})

function remCurr () {
  buttons.forEach(button => {
    button.classList.remove('btn-active')
  })
}

//menu
const menu = document.querySelector('.menu');
const list = document.querySelector('.list')

menu.addEventListener('click', () => {
  list.classList.toggle('active')
})
