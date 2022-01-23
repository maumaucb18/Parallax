


  let stars = document.getElementById('stars');
  let lua = document.getElementById('lua');
  let back = document.getElementById('back');
  let text = document.getElementById('text');
  let butn = document.getElementById('butn');
  let front = document.getElementById('front');
  let header = document.querySelector('header');

window.addEventListener( 'scroll', function() { 
  let value = window.scrollY;
  stars.style.left = value  + 'px';
  lua.style.top = value * 1.5 + 'px';
  back.style.top = value * 0.5 + 'px';
  front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 3 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  butn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});
/*função menu*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){

  const nav = document.getElementById('nav');
   nav.classList.toggle('active');

}

btnMobile.addEventListener('click',toggleMenu);
