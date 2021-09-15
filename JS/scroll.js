
const badgeEl = document.querySelector('#badge');
window.addEventListener('scroll', _.throttle(function () { 
  //브라우저 창을 의미 보고있는 화면자체
  console.log(window.scrollY);
  if(window.scrollY>500){
    // 배지 숨기기 
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }else{
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
 }, 300));
 // _.throttle(함수, 시간)