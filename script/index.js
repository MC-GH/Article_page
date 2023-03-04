
/*Script to toggle active class on subheader menu items*/
const subheaderItems = document.querySelectorAll('.subheader-item');

subheaderItems.forEach(item => {
  item.addEventListener('click', () => {
  subheaderItems.forEach(item => item.classList.remove('active'));
  item.classList.add('active');
});
});

const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
  sidebarItems.forEach(item => item.classList.remove('active'));
  item.classList.add('active');
});
});