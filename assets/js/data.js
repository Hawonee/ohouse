$(function (e) {


// 포스팅 데이터 

fetch("./assets/data/postData.json")
.then((response) => response.json())
.then((json) => {
  data = json.items; //모든데이터

  let html = "";
  data.forEach((element) => {

    html += `<li class="post-item">
    <div class="img-box">
      <a href="">
        <img src="${element.thumb}" alt="" />
      </a>
      <button class="btn-scrap">
        <svg class="css-whh5e5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15409_67579)">
            <g filter="url(#filter0_d_15409_67579)">
              <path
                d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3ZM4 2.75H20C20.5523 2.75 21 3.19772 21 3.75V20.8228C21 21.1988 20.6005 21.4403 20.2676 21.2655L12.4648 17.169C12.1738 17.0162 11.8262 17.0162 11.5352 17.169L3.73242 21.2655C3.39948 21.4403 3 21.1988 3 20.8228V3.75C3 3.19771 3.44772 2.75 4 2.75Z"
                fill="white"
              ></path>
              <path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3Z" fill="white" fill-opacity="0.5"></path>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_15409_67579" x="-2" y="-0.25" width="28" height="28.5735" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
              <feOffset dy="2"></feOffset>
              <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
              <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"></feColorMatrix>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15409_67579"></feBlend>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15409_67579" result="shape"></feBlend>
            </filter>
            <clipPath id="clip0_15409_67579"><rect width="24" height="24" fill="white"></rect></clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <a href="" class="text-box">
      <strong>${element.title} </strong>
      ${element.subTitle}
    </a>
    </li>`;
    // html += `<li> 이름:${element.이름}, title:${element.title}, subTitle:${element.subTitle}</li>`;
  });

  $(".post-list").html(html);

  });

///////////////////////////////////
// 물어보기: 똑같은 CSS의 다른 데이터 값 불러올 때 편하게 불러오는 방법?? 똑같은 명령어 두 번 반복해야 되는지??


//   let html = "";
//   data.forEach((element) => {
//     // age = (element.나이 >= 20) ? '성인' : '미성년자';

//     html += `<li class="post-item">
//     <div class="img-box">
//       <a href="">
//         <img src="${element.thumb}" alt="" />
//       </a>
//       <button class="btn-scrap">
//         <svg class="css-whh5e5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g clip-path="url(#clip0_15409_67579)">
//             <g filter="url(#filter0_d_15409_67579)">
//               <path
//                 d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3ZM4 2.75H20C20.5523 2.75 21 3.19772 21 3.75V20.8228C21 21.1988 20.6005 21.4403 20.2676 21.2655L12.4648 17.169C12.1738 17.0162 11.8262 17.0162 11.5352 17.169L3.73242 21.2655C3.39948 21.4403 3 21.1988 3 20.8228V3.75C3 3.19771 3.44772 2.75 4 2.75Z"
//                 fill="white"
//               ></path>
//               <path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3Z" fill="white" fill-opacity="0.5"></path>
//             </g>
//           </g>
//           <defs>
//             <filter id="filter0_d_15409_67579" x="-2" y="-0.25" width="28" height="28.5735" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//               <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
//               <feOffset dy="2"></feOffset>
//               <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//               <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"></feColorMatrix>
//               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15409_67579"></feBlend>
//               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15409_67579" result="shape"></feBlend>
//             </filter>
//             <clipPath id="clip0_15409_67579"><rect width="24" height="24" fill="white"></rect></clipPath>
//           </defs>
//         </svg>
//       </button>
//     </div>
//     <a href="" class="text-box">
//       <strong>${element.title} </strong>
//       ${element.subTitle}
//     </a>
//     </li>`;
//   });

//   $(".post-list").html(html);

// });


// 베스트 데이터 

  $('.best-gnb-list a').click(function(e){
    e.preventDefault();
    best = $(this).data('best'); //데이터 속성값 (가구, 패브릭..)

    console.log(best);
    bestList(best)
  })

  function bestList(zip="all"){

    fetch("./assets/data/bestData.json")
    .then((response) => response.json())
    .then((json) => {
      data = json.items; //모든데이터

      if (zip === "all") { //만약 all이 zip과 같다면
        result = json.items;
      } else {
        var result = data.filter(function (parm) {
          return parm["type"].indexOf(zip) >= 0; 
        })
      }
    
      let html = "";
      result.forEach(element => {
        html+=`<li class="best-item">
        <div class="img-box">
          <a href="" data-best="${element.type}">
            <em class="number">2</em>
            <span class="badge">
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/thumbnail_badges/167633960040654859.png?w=360&h=360&c=c&webp=1" alt="" />
            </span>
            <img src="${element.thumb}" alt="" />
          </a>
          <button class="btn-scrap">
            <svg class="css-whh5e5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_15409_67579)">
                <g filter="url(#filter0_d_15409_67579)">
                  <path
                    d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3ZM4 2.75H20C20.5523 2.75 21 3.19772 21 3.75V20.8228C21 21.1988 20.6005 21.4403 20.2676 21.2655L12.4648 17.169C12.1738 17.0162 11.8262 17.0162 11.5352 17.169L3.73242 21.2655C3.39948 21.4403 3 21.1988 3 20.8228V3.75C3 3.19771 3.44772 2.75 4 2.75Z"
                    fill="white"
                  ></path>
                  <path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3Z" fill="white" fill-opacity="0.5"></path>
                </g>
              </g>
              <defs>
                <filter id="filter0_d_15409_67579" x="-2" y="-0.25" width="28" height="28.5735" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15409_67579"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15409_67579" result="shape"></feBlend>
                </filter>
                <clipPath id="clip0_15409_67579"><rect width="24" height="24" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <a href="" class="text-box">
          <em class="brand">${element.brand}</em>
          <strong>${element.desc}</strong>
          <div class="price-wrap">
            <em class="discount">58%</em>
            <span class="price">295,900</span>
          </div>
          <div class="review-wrap">
            <em>4.7</em>
            <span>리뷰 22,420</span>
          </div>
          <div class="badge-wrap">
            <span class="free">무료배송</span>
            <span class="sale">특가</span>
          </div>
        </a>
      </li>`;
      });
    
      $(".best-list").html(html);
    
      })

  }

  bestList();


}); //지우지 마시오



