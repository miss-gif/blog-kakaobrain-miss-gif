window.addEventListener("load", () => {
  //할일
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then(response => {
      //   console.log(response);
      const result = response.json();
      return result;
    })
    .then(result => {
      //   console.log(result);
      // 할일작성
      // 전체 html 저장용 일반 변수
      let allTag = "";
      const news = document.querySelector("#crew");

      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const tag = `<a href="#" class="list-box">
        <div
          class="list-box-img br-20"
          style="background: url('./images/${obj.imgpath}') no-repeat center; background-size: cover"
        ></div>
        <div class="list-box-cate">
          <img src="./images/icon/${obj.icon}" alt="${obj.category}" />
          <span>${obj.category}</span>
        </div>
        <p class="list-box-title">${obj.title}</p>
        <span class="list-box-day">${obj.day}</span>
      </a>`;
        allTag = allTag + tag;
      }

      news.innerHTML = allTag;
    })
    .catch(error => {
      console.log(error);
    });
});

console.log("연결");
