window.addEventListener("DOMContentLoaded", () => {
   const catologSpareParts = document.querySelectorAll(".catalog_inner-item.spare-hide");
   const catalogOilParts = document.querySelectorAll(".catalog_inner-item.oil-hide");
   const catalogBtnSpare = document.querySelector("#catalog_btn-spare-parts");
   const catalogBtnOil = document.querySelector("#catalog_btn-motor-oil");
   const textShowLess = document.querySelectorAll(".text_show-less");
   const textShowMore = document.querySelectorAll(".text_show-more");

   // Switching Oil Parts
   catalogBtnOil.addEventListener("click", () => {
      catalogOilParts.forEach(item => {
         item.classList.toggle("show");
      });

      textShowLess[0].classList.toggle("switch");
      textShowMore[0].classList.toggle("switch");
   });


   // Switching Spare Parts
   catalogBtnSpare.addEventListener("click", () => {
      catologSpareParts.forEach(item => {
         item.classList.toggle("show");
      });
      textShowLess[1].classList.toggle("switch");
      textShowMore[1].classList.toggle("switch");
   });

   // Translating the page
   const wordsUzMain = [
      "Asosiy Menu",
      "Motor Moylari",
      "Hammasini Ko'rsatish",
      "Ozginasini Ko'rsatish",
      "Qo'shimcha Zapchastlar",
      "Hammasini Ko'rsatish",
      "Ozginasini Ko'rsatish",
      "Samarqand shahri, Usmon Yusupov ko’chasi 159",
      "Asosiy Menu",
      "Barcha huquqlar himoyalangan"
   ];

   const wordsRuMain = [
      "Главная Меню",
      "Моторные масла",
      "Показать больше",
      "Показать меньше",
      "Дополнительные запчасти",
      "Показать больше",
      "Показать меньше",
      "Город Самарканд, Улица Усмана Юсупова, 159",
      "Главная Меню",
      "Все права защищены"
   ];

   const wordsUzCatalog = [
      "Motor moyi",
      "Yopishqoqlilik turi:",
      "Ishlabchiqaruvchi:",
      "Bir litr narxi:",
      "So'm"
   ];

   const wordsRuCatalog = [
      "Моторное масло",
      "Класс вязкости:",
      "Производитель:",
      "Цена за литр:",
      "Сум"
   ];

   const wordsRuCatalogSpare = [
      "Масляный фильтр",
      "Производитель:",
      "Цена за штука",
      "Сум",
   ];

   const wordsUzCatalogSpare = [
      "Moy Filteri",
      "Ishlabchiqaruvchi:",
      "Donasi",
      "So'm",
   ];

   const catalogOil = document.querySelectorAll(".catalog_inner");
   const catalogOilItem = catalogOil[0].children;
   const catalogSpareItem = catalogOil[1].children;
   const translatedWords = document.querySelectorAll("#translate-main");
   const russian = document.querySelector("#russian");
   const uzbek = document.querySelector("#uzbek");

   function translateToRussian() {
      for (let i = 0; i < catalogOilItem.length; i++) {
         const catalogWordsOilToTranslate = catalogOilItem[i].querySelectorAll(".translate-catalog");
         catalogWordsOilToTranslate.forEach((item, idx) => {
            item.textContent = wordsRuCatalog[idx];
         });
      }
      for (let i = 0; i < catalogSpareItem.length; i++) {
         const catalogWordsSpareToTranslate = catalogSpareItem[i].querySelectorAll(".translate-catalog");
         const catalogWordsAirToTranslate = catalogSpareItem[i].querySelectorAll(".translate-catalog.air-filter");
         catalogWordsSpareToTranslate.forEach((item, idx) => {
            item.textContent = wordsRuCatalogSpare[idx];
         });
         catalogWordsAirToTranslate.forEach(item => {
            item.textContent = "Воздушный фильтр";
         });

      }
   }

   function translateToUzbek() {
      for (let i = 0; i < catalogOilItem.length; i++) {
         const catalogWordsToTranslate = catalogOilItem[i].querySelectorAll(".translate-catalog");
         catalogWordsToTranslate.forEach((item, idx) => {
            item.textContent = wordsUzCatalog[idx];
         });
      }

      for (let i = 0; i < catalogSpareItem.length; i++) {
         const catalogWordsSpareToTranslate = catalogSpareItem[i].querySelectorAll(".translate-catalog");
         const catalogWordsAirToTranslate = catalogSpareItem[i].querySelectorAll(".translate-catalog.air-filter");
         catalogWordsSpareToTranslate.forEach((item, idx) => {
            item.textContent = wordsUzCatalogSpare[idx];
            item.querySelectorAll(".air-filter").forEach(item => {
               item.textContent = "Havo filteri"
            });
            catalogWordsAirToTranslate.forEach(item => {
               item.textContent = "Havo filteri";
            });
   
         });
      }
   }

   russian.addEventListener("click", () => {
      translatedWords.forEach((item, idx) => {
         item.textContent = wordsRuMain[idx];
         russian.style.color = "#08f800";
         uzbek.style.color = "#FF3F3F";
         translateToRussian();
      })
   });

   uzbek.addEventListener("click", () => {
      translatedWords.forEach((item, idx) => {
         item.textContent = wordsUzMain[idx];
         russian.style.color = "#FF3F3F";
         uzbek.style.color = "#08f800";
         translateToUzbek();
      })
   });


});
