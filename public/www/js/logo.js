/*
 상단 로고 기능
 처음에는 로고가 기본 그림이 보인다.
 사용자가 마우스 오버를 하면 로고가 부드럽게 변경이 된다.
 사용자가 마우스 아웃을 하면 첫 기본 그림으로 보인다.
 
 나는 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정이다.
 이유는 React로 마이그레이션 할 거니까.


    1. 라이브러리를 사용하려면 레퍼런스를 참조해야 한다.
    https://swiperjs.com/
*/

// 과연 swlogo라는 html 클래스를 찾을 수 있을까?
// 증명해 보자.

var swLogo = document.querySelector(".swlogo");
console.log(swLogo);

var swiper = new Swiper(".swlogo", {
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".gogo", {});
