// Dynamic Copyright Year

let thisYear = new Date();

$("#dynYear").text(thisYear.getFullYear());

let imgId = 2;



$(document).ready(function(){

  myFadeAnim(1);
  setInterval(function() {
    if(imgId > 6) {
        imgId = 1;
    }

    myFadeAnim(imgId);
    imgId++;

  }, 6000);




});

function myFadeAnim (id) {
  let imgId = "#landing-graphic" + id;

//  $(imgId).fadeIn(2500).fadeOut(2500);
  //$("#anim-logo").show().fadeTo(1000, 0.2);
  $(imgId).fadeIn(3000).fadeOut(3000);

}
