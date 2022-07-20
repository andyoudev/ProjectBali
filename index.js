// Dynamic Copyright Year

let thisYear = new Date();

$("#dynYear").text(thisYear.getFullYear());

let imgId = 2;



$(document).ready(function(){

  myFadeAnim(1);
  setInterval(function() {
    if(imgId > 8) {
        imgId = 1;
    }

    myFadeAnim(imgId);
    imgId++;

  }, 6000);

  $("#goToWhatsAppBtn").click(function() {
    // window.open("https://api.whatsapp.com/send?phone=00447843242539");
    window.open("https://wa.me/6287734574969");

  });

  //Drop down menu code ---------------------------------------------------------------
  let thisScreenWidth = window.screen.width;
  let useDDscreenWidth = 960;
  //console.log(thisScreenWidth);

  $("#WWD-menu-item").mouseover(function() {
    if(thisScreenWidth > useDDscreenWidth) {
    $("#WWD-dropdown").show();
    }

    $("#WWD-menu-item").mouseout(function() {
      $("#WWD-dropdown").hide();
    });
  });

  $("#WUS-menu-item").mouseover(function() {
    if(thisScreenWidth > useDDscreenWidth) {
    $("#WUS-dropdown").show();
    }

    $("#WUS-menu-item").mouseout(function() {
      $("#WUS-dropdown").hide();
    });
  });

  $("#ODE-menu-item").mouseover(function() {
    if(thisScreenWidth > useDDscreenWidth) {
    $("#ODE-dropdown").show();
    }

    $("#ODE-menu-item").mouseout(function() {
      $("#ODE-dropdown").hide();
    });
  });



  //------------------------------------------------------------------------------------


  // $("#openEmailClientBtn").click(function() {
  //   window.open('mailto:address@mail.com?subject=sub&body=this is body');
  // });
  $("#openEmailClientBtn").click(function (event) {
       var email = 'enquiries@project-bali.com';
       var subject = 'Project Bali Website Enquiry';
       var emailBody = 'Hi Project Bali,';
       // var attach = 'path';
       window.open("mailto:"+email+"?subject="+subject+"&body="+emailBody);
       // document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
           // "?attach="+attach;
     });

//hmmm might not be able to use for free...
 $("#submitEmailForm").click(function() {
   var email = 'enquiries@project-bali.com';
   var subject = 'Project Bali Website Enquiry';
   var emailBody = $("#contactFormEmailBody").val();
   window.open("mailto:"+email+"?subject="+subject+"&body="+emailBody);
   //console.log(emailBody);
});


});

function myFadeAnim (id) {
  let imgId = "#landing-graphic" + id;

//  $(imgId).fadeIn(2500).fadeOut(2500);
  //$("#anim-logo").show().fadeTo(1000, 0.2);
  $(imgId).fadeIn(3000).fadeOut(3000);

}
