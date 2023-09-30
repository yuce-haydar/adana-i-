document.querySelector('.menu-item').addEventListener('click', function (e) {
    e.preventDefault();
  });
document.querySelector('.menu-item1').addEventListener('click', function (e) {
    e.preventDefault();
  });
document.querySelector('.select-language').addEventListener('click', function (e) {
    e.preventDefault();
  });
document.querySelector('.select-currency').addEventListener('click', function (e) {
    e.preventDefault();
  });


  function toggleAboutDropdown() {
    var aboutDropdown = document.getElementById("aboutDropdown");
    aboutDropdown.classList.toggle("active");
  }
  function toggleFindDropdown() {
    var findDropdown = document.getElementById("findDropdown");
    findDropdown.classList.toggle("active");
  }
  function toggleLanguage() {
    var languageDropdown = document.getElementById("drop-down-language");
    languageDropdown.classList.toggle("active");
    var currencyDropdown = document.getElementById("drop-down-currency");
    currencyDropdown.classList.remove("active");
  }
  function toggleCurrency() {
    var currencyDropdown = document.getElementById("drop-down-currency");
    currencyDropdown.classList.toggle("active");
    var languageDropdown = document.getElementById("drop-down-language");
    languageDropdown.classList.remove("active");
    
  }


  /*yorumlar kısmı*/
  document.addEventListener("DOMContentLoaded", function() {
    var slideCount = document.querySelectorAll(".slide").length;
    var slideWidth = document.querySelector(".slide").clientWidth;
    var slideIndex = 0;
  
    function showSlides() {
      var translateX = -slideIndex * slideWidth;
      document.querySelector(".slider").style.transform = "translateX(" + translateX + "px)";
    }
  
    var prevBtn = document.querySelector(".prev-btn");
    var nextBtn = document.querySelector(".next-btn");
  
    prevBtn.addEventListener("click", function() {
      if (slideIndex > 0) {
        slideIndex--;
        showSlides();
      }
    });
  
    nextBtn.addEventListener("click", function() {
      if (slideIndex < slideCount - 1) {
        slideIndex++;
        showSlides();
      }
    });
  
    showSlides();
  });