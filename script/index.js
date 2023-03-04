
/*Script to toggle active class on subheader menu items*/
const subheaderItems = document.querySelectorAll('.subheader-item');

subheaderItems.forEach(item => {
  item.addEventListener('click', () => {
  subheaderItems.forEach(item => item.classList.remove('active'));
  item.classList.add('active');
});
});