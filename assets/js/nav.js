const headTime = document.querySelector('.head-time');
function getDate() {
  let dateObj = new Date();
  let month = dateObj.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  let date = dateObj.getDate();
  date = date < 10 ? '0' + date : date;
  let arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return `${dateObj.getFullYear()}年${month}月${date}  ${arr[dateObj.getDay()]}`;
}
headTime.innerHTML = getDate();
const navSearchShowBtn = document.querySelector('.nav-search-show');
const navSearchIpt = document.querySelector('.nav-search-ipt');
const navDeletBtn = document.querySelector('.nav-delete-btn');
navSearchShowBtn.addEventListener('click', function () {
  navSearchIpt.style.display = 'block';
  navSearchIpt.clientWidth;
  navSearchIpt.style.opacity = '1';
  this.style.opacity = '0';
});
navDeletBtn.addEventListener('click', function () {
  navSearchIpt.style.opacity = '0';
  navSearchShowBtn.style.opacity = '1';
});
navSearchIpt.addEventListener('transitionend', function () {
  if (this.style.opacity === '0') {
    navSearchIpt.style.display = 'none';
  }
});
