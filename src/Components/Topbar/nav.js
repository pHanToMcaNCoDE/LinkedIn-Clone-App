
  const nav = document.querySelector('.l');
  const x = document.querySelector('.x');
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', () => {
    nav.classList.add('active');
  });
  menu.addEventListener('click', () => {
    x.classList.remove('active');
  });