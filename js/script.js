const main_swiper = new Swiper("main", {
    wrapperClass:"container",
    slideClass:"area",
    direction:"vertical",
    speed:800,
    mousewheel:{
        enabled:true,
    },
   
});
var btns = document.querySelectorAll(".tab_menu a");

function removeActive(b, t){
  var actives = document.querySelectorAll("#p_wrap .active");
  var actives =Array.from(actives);
   t = Array.from(t);
  var re = actives.filter((x) => !t.includes(x));
  re.forEach(function(at){
    if(at !== b && at !== t) at.classList.remove("active");
  });
};

    btns.forEach(function(btn){
      btn.addEventListener("click",function(e){  // e = event 객체
        e.preventDefault();   // 태그가 원래 가지고 있는 기본 이벤트의 실행을 막음(p.411)
        var href = this.getAttribute("href");  // getAttribute = html 요소 중 특정 속성값을 가져오는 메소드

        var targets = document.querySelectorAll(href);
              
        targets.forEach(function(target){
          target.classList.add("active");
        });
        this.classList.add("active");
        removeActive(this, targets);
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      document.body.classList.add('loaded');  // 페이지가 로드되면 클래스 추가
    });