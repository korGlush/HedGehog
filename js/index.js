document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.catalog__swiper', {
        loop: true,
        spaceBetween: 43,
        slidesPerGroup: 2,
        slidesPerView: 2,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
          },

        breakpoints: {
          
            1600: {
                slidesPerView: 2,
                spaceBetween: 35,
                slidesPerGroup: 2,
            }
        },


    });

    document.querySelectorAll(".header__nav-list-item").forEach(item => {
        item.addEventListener("click", function () {
          // Переменные
          let btn = this;
          let dropdown = this.parentElement.querySelector(".dropdown");
    
          document.querySelectorAll(".header__nav-list-item").forEach(el => {
            //   Если элемент не равен btn
            if (el != btn) {
              el.classList.remove("active");
            }
          });
    
          document.querySelectorAll(".dropdown").forEach(el => {
            if (el != dropdown) {
              el.classList.remove("active-dropdown");
            }
          })
          dropdown.classList.toggle("active-dropdown");
          btn.classList.toggle("active")
        })
      })
    
      document.addEventListener("click", function (e) {
        let target = e.target;
        if (!target.closest(".header__nav-list")) {
          document.querySelectorAll(".dropdown").forEach(el => {
            el.classList.remove("active-dropdown");
          })
          document.querySelectorAll(".header__nav-list-item").forEach(el => {
            el.classList.remove("active");
          });
        }
      })
      const params = {
        btnClassName: "js-header-dropdown-btn",
        dropClassName: "js-header-drop",
        activeClassName: "is-active",
        disabledClassName: "is-disabled"
      }
    
      function onDisable(evt) {
        if (evt.target.classList.contains(params.disabledClassName)) {
          evt.target.classList.remove(params.disabledClassName, params.activeClassName);
          evt.target.removeEventListener("animationend", onDisable);
        }
      }
    
      function setMenuListener() {
        document.body.addEventListener("click", (evt) => {
          const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);
    
          if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
            activeElements.forEach((current) => {
              if (current.classList.contains(params.btnClassName)) {
                current.classList.remove(params.activeClassName);
              } else {
                current.classList.add(params.disabledClassName);
              }
            });
          }
    
          if (evt.target.closest(`.${params.btnClassName}`)) {
            const btn = evt.target.closest(`.${params.btnClassName}`);
            const path = btn.dataset.path;
            const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
    
            btn.classList.toggle(params.activeClassName);
    
            if (!drop.classList.contains(params.activeClassName)) {
              drop.classList.add(params.activeClassName);
              drop.addEventListener("animationend", onDisable);
            } else {
              drop.classList.add(params.disabledClassName);
            }
            }
            

            
        });
    }
    
    // Burger
  document.querySelector('#burger').addEventListener('click',
  function () {
  document.querySelector('#menu').classList.toggle('active')
  })
document.querySelector('#close-menu').addEventListener('click',
  function () {
  document.querySelector('#menu').classList.toggle('active')
})


    

})