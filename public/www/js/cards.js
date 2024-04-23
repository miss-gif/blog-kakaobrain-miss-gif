window.addEventListener("load", () => {
  const dataUrl = "./apis/cards.json";
  fetch(dataUrl)
    .then(res => {
      const result = res.json();
      return result;
    })
    .then(result => {
      // 우리가 할일을 진행
      // 내용을 출력할 DOM 선택
      const cardsWhere = document.querySelector(".cardslide .swiper-wrapper");
      // 출력해줄 html 글자를 모을 일반 변수 : let으로 작성.
      let cardsTags = "";
      // 배열의 반복문 중 forEach를 사용해서 태그 글자를 만든다.
      result.forEach(item => {
        // console.log(item); 아이템은 {} 형태이다. `.`으로 접근
        const tag = `
        <div class="swiper-slide">
          <a href=${item.link} class="card-link br-20" style="background: url('./images/${item.imgpath}') no-repeat center / cover;">
            <div class="card-txt">
              <h3 class="card-title">${item.cardname}</h3>
              <span class="card-count">${item.cardno}</span>
            </div>
          </a>
        </div>`;
        // console.log(tag);
        cardsTags += tag;
      });
      // console.log(cardsTags);
      cardsWhere.innerHTML = cardsTags;
      // swiper 작동시키기
      const cardSlide = new Swiper(".cardslide", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
      });
    })
    .catch(error => {
      console.log(error);
    });
});
