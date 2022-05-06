window.addEventListener("DOMContentLoaded", () => {
   /*
   * Main 
   * Slider
   */
   const slidesContainer = document.querySelector(".slides_container");
   const slides = document.querySelectorAll(".slide");
   const nextBtn = document.querySelector(".next_btn");
   const prevBtn = document.querySelector(".prev_btn");
   const navigationDots = document.querySelector(".navigation_dots");

   let numberOfSlides = slides.length;
   let slideWidth = slides[0].clientWidth;
   let currentSlide = 0;

   // Set up the slider
   function init() {
      slides.forEach((slide, i) => {
         slide.style.left = i * 100 + "%";
      });

      slides[0].classList.add("active");
      createNavigationDots();
   }

   init();

   // Create navigation dots
   function createNavigationDots() {
      for (let i = 0; i < numberOfSlides; i++) {
         const dot = document.createElement("div");
         dot.classList.add("single_dot");
         navigationDots.appendChild(dot);

         dot.addEventListener("click", () => {
            goToSlide(i);
         });
      }

      navigationDots.children[0].classList.add("active");
   }

   // Next Button
   nextBtn.addEventListener("click", () => {
      if (currentSlide >= numberOfSlides - 1) {
         goToSlide(0);
         return;
      }

      currentSlide++;
      goToSlide(currentSlide);
   })

   // prev Button
   prevBtn.addEventListener("click", () => {
      if (currentSlide <= 0) {
         goToSlide(numberOfSlides - 1);
         return;
      }

      currentSlide--;
      goToSlide(currentSlide);
   });

   // Go to the slide
   function goToSlide(slideNumber) {
      slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
      currentSlide = slideNumber;
      setActiveClass();
   }

   function setActiveClass() {
      let currentActive = document.querySelector(".slide.active");
      currentActive.classList.remove("active");
      slides[currentSlide].classList.add("active");

      let currentDot = document.querySelector(".single_dot.active");
      currentDot.classList.remove("active");
      navigationDots.children[currentSlide].classList.add("active");
   }

   /*
   * About
   * Slider
   */

   const aboutSlidesContainer = document.querySelector(".about_slides-container");
   const aboutSlides = document.querySelectorAll(".about_slide");
   const aboutNextBtn = document.querySelector(".about_next-btn");
   const aboutPrevBtn = document.querySelector(".about_prev-btn");
   const aboutNavigationDots = document.querySelector(".about_navigation-dots");

   let numberOfSlidesAbout = aboutSlides.length;
   let slideWidthAbout = aboutSlides[0].clientWidth;
   let currentSlideAbout = 0;

   // Set up the slider
   function initAboutSlider() {
      aboutSlides.forEach((slide, i) => {
         slide.style.left = i * 100 + "%";
      });

      aboutSlides[0].classList.add("active");
      createNavigationDotsInAbout();
   }

   initAboutSlider();

   // Create navigation dots in About
   function createNavigationDotsInAbout() {
      for (let i = 0; i < numberOfSlidesAbout; i++) {
         const dotAbout = document.createElement("div");
         dotAbout.classList.add("about_single-dot");
         aboutNavigationDots.appendChild(dotAbout);

         dotAbout.addEventListener("click", () => {
            goToSlideInAbout(i);
         });
      }

      aboutNavigationDots.children[0].classList.add("active");
   }

   // About Next Button
   aboutNextBtn.addEventListener("click", () => {
      if (currentSlideAbout >= numberOfSlidesAbout - 1) {
         goToSlideInAbout(0);
         return;
      }

      currentSlideAbout++;
      goToSlideInAbout(currentSlideAbout);
   })

   // About prev Button
   aboutPrevBtn.addEventListener("click", () => {
      if (currentSlideAbout <= 0) {
         goToSlideInAbout(numberOfSlidesAbout - 1);
         return;
      }

      currentSlideAbout--;
      goToSlideInAbout(currentSlideAbout);
   });

   // Go to the slide
   function goToSlideInAbout(slideNumber) {
      aboutSlidesContainer.style.transform = "translateX(-" + slideWidthAbout * slideNumber + "px)";
      currentSlideAbout = slideNumber;
      setActiveClassInAbout();
   }

   function setActiveClassInAbout() {
      let currentActiveAbout = document.querySelector(".about_slide.active");
      currentActiveAbout.classList.remove("active");
      aboutSlides[currentSlide].classList.add("active");

      let currentDotAbout = document.querySelector(".about_single-dot.active");
      currentDotAbout.classList.remove("active");
      aboutNavigationDots.children[currentSlideAbout].classList.add("active");
   }

   // Hamburger Menu
   const openMenuBtn = document.querySelector(".hamburger_btn");
   const closeMenuBtn = document.querySelector(".close_btn")
   const menu = document.querySelector(".nav_inner-menu");
   const body = document.querySelector("body");

   openMenuBtn.addEventListener("click", () => {
      menu.style.left = "0";
      body.style.overflow = "hidden";
   });

   closeMenuBtn.addEventListener("click", () => {
      menu.style.left = "-100%";
      body.style.overflow = "visible";
   });

   // Making main menu on position fixed
   const nav = document.querySelector(".nav");
   window.onscroll = function() {
      let scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll > 500) {
         nav.classList.add("fixed");
      } else {
         nav.classList.remove("fixed");
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
         document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
         });

         menu.style.left = "-100%";
         body.style.overflow = "visible";
      });
   });

   // Translate the page
   const wordsUz = [
      "Asosiy",
      "Xizmatlar",
      "Biz Haqimizda",
      "Mahsulotlar",
      "DUNYONING ENG YUQORI SIFATLI MOTOR MOYLARI ENG ARZON NARXLARDA!",
      "QO'NG'IROQ QILING!",
      "MOTOR MOYINI ALMASHTIRING VA FAQATGINA MOTOR MOYIGA PUL TO'LANG!",
      "QO'NG'IROQ QILING!",
      "BARCHA MAHSULOTLAR RASMIY DILLERLAR TOMONIDAN YETKAZIB BERILADI!",
      "QO'NG'IROQ QILING!",
      "BIZNI XIZMATLAR",
      "Motor Moyini Almashtirish",
      "AKPP Moyini Almashtirish",
      "MKPP Moyini Almashtirish",
      "Sovuqgichlar Suyuqliklarini Almashtirish",
      "Tormoz Suyuqligini Almashtirish",
      "Benzin Filtrini Va Pampersini Almashtirish",
      "Gur Suyuqligini Almashtirish",
      "Filtrlarni Almashtirish",
      "BIZ HAQIMIZDA",
      "Avtoservisimiz Haqida",
      "Bizni ustoxonamizda yuqori sifatli xizmatlar ko'rsatiladi. Shu bilan birgalikda bu ustoxona zamon talablariga javob beradigan jihozlar bilan jihozlangan. Xohlagan turdagi motor moylarini xamyonbop narxda topishiz mumkin. Ustoxonamizda yillab tajribaga ega bo'lgan xodimlar ishlashida. Biz barcha ko'rsatgan xizmatimiz uchun 100 foiz kafil bo'lamiz!",
      "Bizning Manzil: Samarqand shahri, Usmon Yusupov ko'chasi 159, Mo'ljal DEU",
      "QO'NG'IROQ",
      "BIZ XARITADA",
      "Samarqand shahri, Usmon Yusupov ko’chasi 159",
      "Asosiy",
      "Xizmatlar",
      "Xaritada",
      "Biz Haqimizda",
      "Mahsulotlar",
      "Barcha huquqlar himoyalangan"
   ];

      // Translate the page
      const wordsRu = [
         "Главная",
         "Сервисы",
         "О нас",
         "Продукты",
         "ЛУЧШИЕ МОТОРНОЕ МАСЛО В САМИМ ЛУЧШЕМ ЦЕНЕ",
         "ЗВОНИТЕ!",
         "ЗАМЕНИТЕ МОТОРНОЕ МАСЛО И ПЛАТИТЕ ТОЛЬКО ЗА МАСЛОМ",
         "ЗВОНИТЕ!",
         "ВСЕ ПРОДУКТЫ ПОСТАВЛЯЕТСЯ ТОЛЬКО ЧЕРЕЗ ОФИЦИАЛЬНЫЙ ДИЛЛЕРЫ",
         "ЗВОНИТЕ!",
         "НАШИ УСЛУГИ",
         "Замена масла в двигателе",
         "Замена масла в АКПП",
         "Замена масла в МКПП",
         "Замена охлаждающей жидкости",
         "Замена тормозной жидкости",
         "Замена фильтр бензина и памперсей",
         "Замена житкость в гур",
         "Замена Фильтров",
         "О НАС",
         "Наша Автосервис",
         "Мы предоставляем качественные услуги в нашей мастерской. При этом цех оснащен современным оборудованием. Вы можете найти любой тип моторного масла по доступной цене. В работе нашей мастерской работают сотрудники с многолетним опытом. Мы даем 100-процентную гарантию на все услуги, которые мы предоставляем!",
         "Наш адресс: Город Самарканд, улица Усмана Юсупова 159. Ориентир ДЕУ",
         "ЗВОНИТЕ!",
         "МЫ В КАРТЕ",
         "Город Самарканд, улица Усмана Юсупова 159",
         "Главная",
         "Сервисы",
         "В Карте",
         "О нас",
         "Продукты",
         "Все права защищены",
      ];

      const translatedWords = document.querySelectorAll("#translate");
      const russian = document.querySelector("#russian");
      const uzbek = document.querySelector("#uzbek");

      russian.addEventListener("click", () => {
         translatedWords.forEach((item, idx) => {
            item.textContent = wordsRu[idx];
            russian.style.color = "#08f800";
            uzbek.style.color = "#FF3F3F";
         })
      });

      uzbek.addEventListener("click", () => {
         translatedWords.forEach((item, idx) => {
            item.textContent = wordsUz[idx];
            russian.style.color = "#FF3F3F";
            uzbek.style.color = "#08f800";
         })
      });



  

   
   // Reload Page
   window.addEventListener("resize", () => {
      if(window.innerWidth > 550) {
         location.reload(); 
      }   
   });

   window.addEventListener("orientationchange", () => {
      location.reload(); 
   });
});