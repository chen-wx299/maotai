/* 轮播图-start */
const banner = document.querySelector('.banner');
const bannerWrap = document.querySelector('.banner-wrap');
const bannerTool = document.querySelector('.banner-tool');
const bannerPagination = document.querySelector('.banner-pagination');
// 当前轮播页
let bannerIndex = 1;
// 控制是否轮播
let bannerFlag = true;
// 轮播图总数
let bannerCount = bannerWrap.childElementCount;
// 轮播
function moveBanner() {
  bannerFlag = false;
  bannerWrap.style.transform = `translateX(-${bannerIndex * 1200}px)`;
}
// 更新轮播页码样式
function changeBannerPag() {
  [...bannerPagination.children].forEach(item => item.classList.remove('banner-pagination-active'));
  bannerPagination.children[bannerIndex - 1].classList.add('banner-pagination-active');
}
// 点击轮播上下一页事件
bannerTool.addEventListener('click', function (e) {
  if (e.target.matches('span') && bannerFlag) {
    bannerWrap.style.transition = 'all .5s linear';
    e.target.classList.contains('banner-next') ? bannerIndex++ : bannerIndex--;
    moveBanner();
  }
});
// 轮播页码点击事件
bannerPagination.addEventListener('click', function (e) {
  if (e.target.matches('li')) {
    bannerWrap.style.transition = 'all .5s linear';
    bannerIndex = +e.target.dataset.index;
    moveBanner();
  }
});
// 轮播过渡结束事件
bannerWrap.addEventListener('transitionend', function () {
  if (bannerIndex >= bannerCount - 1 || bannerIndex < 1) {
    bannerWrap.style.transition = '';
    bannerIndex = bannerIndex < 1 ? bannerCount - 2 : 1;
    moveBanner();
  }
  // 更新轮播页码样式
  changeBannerPag();
  bannerFlag = true;
});
// 开启自动轮播
let bannerTimeId = setInterval(() => bannerTool.children[1].click(), 4000);
// 鼠标移入轮播图停止自动播放
banner.addEventListener('mouseenter', () => clearInterval(bannerTimeId));
// 鼠标移出轮播图开启播放
banner.addEventListener('mouseleave', function () {
  bannerTimeId = setInterval(() => {
    bannerTool.children[1].click();
  }, 4000);
});
/* 轮播图-end */

/* 公告栏-start */
const noticeWrap = document.querySelector('.notice-wrap');
let noticeIndex = 0;
function moveNotice() {
  noticeIndex++;
  noticeWrap.style.transition = 'all .5s linear';
  noticeWrap.style.transform = `translateX(-${noticeIndex * 830}px)`;
}
noticeWrap.addEventListener('transitionend', function () {
  if (noticeIndex > 2) {
    noticeIndex = 0;
    noticeWrap.style.transition = 'none';
    noticeWrap.style.transform = 'translateX(0)';
  }
});
let noticeTimeId = setInterval(() => moveNotice(), 2500);
noticeWrap.addEventListener('mouseenter', () => clearInterval(noticeTimeId));
noticeWrap.addEventListener('mouseleave', function () {
  noticeTimeId = setInterval(() => moveNotice(), 2500);
});
/* 公告栏-end */

/* 新闻资讯-start */
const newsBanner = document.querySelector('.news-banner');
const newsBannerWrap = document.querySelector('.news-banner-wrap');
const newsBannerTitle = document.querySelector('.news-banner-title');
const newsBannerPagination = document.querySelector('.news-banner-pagination');
let newsBannerIndex = 0;
function toogleNewsBanner() {
  [...newsBannerPagination.children].forEach((item, index) => {
    item.classList.remove('news-banner-pagination-active');
    newsBannerTitle.children[index].style.opacity = 0;
    newsBannerWrap.children[index].style.opacity = 0;
  });
  newsBannerPagination.children[newsBannerIndex].classList.add('news-banner-pagination-active');
  newsBannerTitle.children[newsBannerIndex].style.display = 'block';
  newsBannerTitle.children[newsBannerIndex].style.opacity = 1;
  newsBannerWrap.children[newsBannerIndex].style.display = 'block';
  newsBannerWrap.clientWidth;
  newsBannerWrap.children[newsBannerIndex].style.opacity = 1;
}
newsBannerPagination.addEventListener('mouseover', function (e) {
  if (e.target.matches('li')) {
    newsBannerIndex = e.target.dataset.index;
    toogleNewsBanner();
  }
});
newsBanner.addEventListener('transitionend', function (e) {
  if (e.target.matches('.news-banner-wrap li, .news-banner-title li')) {
    if (e.target.style.opacity == 0) {
      e.target.style.display = 'none';
    }
  }
});
function autoPlayNewsBanner() {
  newsBannerIndex++;
  newsBannerIndex > newsBannerPagination.childElementCount - 1 && (newsBannerIndex = 0);
  toogleNewsBanner();
}
let newsBannerTimeId = setInterval(() => autoPlayNewsBanner(), 5000);
newsBanner.onmouseenter = () => clearInterval(newsBannerTimeId);
newsBanner.onmouseleave = () => {
  newsBannerTimeId = setInterval(() => autoPlayNewsBanner(), 5000);
};
/* 新闻资讯-end */

/* 产品中心-start */
const productType = document.querySelector('.product-type');
const productContentWrap = document.querySelector('.product-content-wrap');
const productToolLt = document.querySelector('.product-tool-lt');
const productToolGt = document.querySelector('.product-tool-gt');
let productIndex = 0;
// 产品列表是否可轮播
let productMoveFlag = true;
let productCount = 0;
let ProductList1 = [
  { name: '贵州茅台酒（新飞天500ml）', type1: '酱香型 | 53 | 500', type2: '茅台酒', imgUrl: 'index-goods1.jpg' },
  { name: '贵州茅台酒（生肖戊戌狗年）', type1: '酱香型 | 53 | 500', type2: '茅台酒 贵州 生肖', imgUrl: 'index-goods2.jpg' },
  { name: '贵州茅台酒（生肖乙亥猪年）', type1: '酱香型 | 53 | 500', type2: '茅台酒 贵州 生肖', imgUrl: 'index-goods3.jpg' },
  { name: '贵州茅台酒（生肖丁酉鸡年）', type1: '酱香型 | 53 | 500', type2: '茅台酒 贵州 生肖', imgUrl: 'index-goods4.jpg' },
  { name: '茅台王子酒（黑金）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods5.jpg' },
];
let ProductList2 = [
  { name: '华茅酒（53度500ml）', type1: '酱香型 | 53 |', imgUrl: 'index-goods11.jpg' },
  { name: '财富酒（龙）', type1: '酱香型 | 53 | 1000', imgUrl: 'index-goods12.jpg' },
  { name: '财富酒（贵宾珍藏）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods13.jpg' },
  { name: '财富酒（贵宾珍藏）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods14.jpg' },
  { name: '高尔夫（大师级）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods15.jpg' },
  { name: '汉酱酒（135BC）', type1: '酱香型 | 51 | 500', imgUrl: 'index-goods16.jpg' },
  { name: '汉酱酒（铂金蓝）', type1: '酱香型 | 51 | 500', imgUrl: 'index-goods17.jpg' },
  { name: '仁酒（丹青殊荣）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods18.jpg' },
  { name: '仁酒（和天下）', type1: '酱香型 | 53 | 500', imgUrl: 'index-goods19.jpg' },
];
// 渲染产品列表
function renderProductContentWrap(list) {
  let html = '';
  list.forEach(item => {
    html += `<li>
      <div class="product-goods-img"><img src="./assets/images/${item.imgUrl}" alt="" /></div>
      <p class="product-goods-title">${item.name}</p>
      <div class="product-goods-details">
        <h3><a href="javascript:;">${item.name}</a></h3>
        <p>${item.type1}</p>
        <p>${item.type2 || '茅台酒'}</p>
      </div>
    </li>`;
  });
  html += html;
  productContentWrap.innerHTML = html;
  productCount = productContentWrap.childElementCount;
  productIndex = 0;
  moveProductContentWrap(false, 0);
}
renderProductContentWrap(ProductList1);
productType.addEventListener('click', function (e) {
  if (e.target.matches('li a')) {
    if (e.target.parentNode.classList.contains('product-type-guizhou')) {
      e.target.parentNode.classList.add('product-type-active');
      e.target.parentNode.nextElementSibling.classList.remove('product-type-active');
      renderProductContentWrap(ProductList1);
    } else {
      e.target.parentNode.classList.add('product-type-active');
      e.target.parentNode.previousElementSibling.classList.remove('product-type-active');
      renderProductContentWrap(ProductList2);
    }
  }
});

function moveProductContentWrap(mode, index) {
  // mode为true表示正常轮播，否则为瞬间移动位置
  if (mode) {
    productMoveFlag = false;
    productContentWrap.style.transition = 'all .5s linear';
    productContentWrap.style.transform = `translateX(-${index * 300}px)`;
  } else {
    productContentWrap.style.transition = 'none';
    productContentWrap.style.transform = `translateX(-${index * 300}px)`;
    productContentWrap.clientWidth;
  }
}
productToolLt.onclick = function () {
  if (!productMoveFlag) return;
  // 判断是否为左边临界点，是的话瞬间切换位置
  if (productIndex == 0) {
    productIndex = productCount / 2;
    moveProductContentWrap(false, productIndex);
  }
  productIndex--;
  moveProductContentWrap(true, productIndex);
};
productToolGt.onclick = function () {
  if (!productMoveFlag) return;
  // 判断是否为右边临界点，是的话就瞬间切换位置
  if (productIndex == productCount - 4) {
    productIndex = productCount / 2 - 4;
    moveProductContentWrap(false, productIndex);
  }
  productIndex++;
  moveProductContentWrap(true, productIndex);
};
productContentWrap.addEventListener('transitionend', function () {
  productMoveFlag = true;
});
let productBannerTimeId = setInterval(() => productToolGt.click(), 3000);
productContentWrap.onmouseenter = () => clearInterval(productBannerTimeId);
productToolLt.onmouseenter = () => clearInterval(productBannerTimeId)
productToolGt.onmouseenter = () => clearInterval(productBannerTimeId)
productToolLt.onmouseleave = () => {
  productBannerTimeId = setInterval(() => productToolGt.click(), 3000);
}
productToolGt.onmouseleave = () => {
  productBannerTimeId = setInterval(() => productToolGt.click(), 3000);
}
productContentWrap.onmouseleave = () => {
  productBannerTimeId = setInterval(() => productToolGt.click(), 3000);
};
/* 产品中心-end */