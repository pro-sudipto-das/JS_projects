document.addEventListener('DOMContentLoaded', function () {
  let parallaxImage = document.getElementById('parallax_image');
  let headerContainer = document.querySelector('.header_container');

  //parallax effect
  function updateParallax() {
    let scrollPositon = window.pageYOffset;
    let headerHeight = headerContainer.offsetHeight;

    //only animate if header is still visible
    if (scrollPositon < headerHeight) {
      //Move image at slower rate than scroll(parallax effect)
      let imageOffset = scrollPositon * 0.5;
      parallaxImage.style.transform = `translateY(${imageOffset}px)`;

      //Move header text at slightly different rate for depth
      let overlayOffset = scrollPositon * 0.3;
      document.querySelector(
        '.header_text'
      ).style.transform = `translateY(${overlayOffset}px)`;

      //Adjust opacity of header text as we scroll
      let opacitys = 1 - scrollPositon / (headerHeight * 0.8);
      document.querySelector('.header_text').style.opacity = opacitys;
    }
  }
  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateParallax);
  });
  updateParallax();
});

// =============================== navigation menu ============================
document.getElementById('nav_show').onclick = function () {
  document.getElementById('nav').style.right = '0px';
};
document.getElementById('nav_hide').onclick = function () {
  document.getElementById('nav').style.right = '-200px';
};

// =================================== dark mood ================================


let isDark = false;
let body = document.getElementById('body');
let darkMood = document.getElementById('dark_mood');
let logo = document.getElementById('logo')
let midTitleH = document.querySelectorAll('#mid_title_h');
let midTitleP = document.querySelectorAll('#mid_title_p');
let trainer_icon = document.querySelectorAll('#trainer_icon');
let myLInk = document.getElementById('myLink');
let about_i = document.querySelectorAll('#about_i');
let membership = document.getElementById('membership_plan2');
let most_popular = document.getElementById('most_popular');
let form = document.querySelectorAll('#form');
let membership_btn = document.querySelectorAll('#membership_btn');
let membership_btn_a = document.querySelectorAll('#membership_btn_a');


darkMood.addEventListener('click', function () {
  if (!isDark) {
    darkMood.innerHTML = '<i class="fa-regular fa-sun"></i>';
    darkMood.style.background = '#00F0FF';
    darkMood.style.color = '#000';
    body.style.background = '#1c1c1c';
    document.getElementById('hero_btn2').style.borderColor = '#00F0FF';
    document.getElementById('hero_btn2').onmouseenter = function () {
      document.getElementById('hero_btn2').style.background = '#00F0FF';
      myLInk.style.color = '#1c1c1c';
    };
    document.getElementById('hero_btn2').onmouseleave = function () {
      document.getElementById('hero_btn2').style.background = 'transparent';
      myLInk.style.color = '#00F0FF';
    };
    myLink.style.color = '#00F0FF';
    for (let input of form) {
      input.style.color = '#00F0FF';
      input.style.borderColor = '#00F0FF';
    }
    for (let i of about_i) {
      i.style.color = '#00F0FF';
    }
    for (let i of trainer_icon) {
      i.style.color = '#bbb';
      i.addEventListener('mouseenter', function () {
        i.style.color = '#00F0FF';
      });
      i.addEventListener('mouseleave', function () {
        i.style.color = '#bbb'
      })
    }
    for (let h of midTitleH) {
      h.style.color = '#F5F5F5';
    }
    for (let p of midTitleP) {
      p.style.color = '#bbb';
    }
    logo.style.color = '#00F0FF';
    membership.style.borderColor = "#00F0FF";
    most_popular.style.background = '#00F0FF';
    most_popular.style.color = '#000';
    for (let membershipBTN of membership_btn) {
      membershipBTN.style.background = '#00F0FF'
      membershipBTN.style.color = '#000'
      membershipBTN.addEventListener('mouseenter', function () {
        membershipBTN.style.boxShadow = '0px 10px 20px #00F0FF70';
      });
      membershipBTN.addEventListener('mouseleave', function () {
        membershipBTN.style.boxShadow = 'none';
      });
    }
    for (let membershipBTN_A of membership_btn_a) {
      membershipBTN_A.style.color = '#000'
    }
    isDark = true;
  }
  else {
    darkMood.innerHTML = '<i class="fa-regular fa-moon"></i>';
    darkMood.style.background = '#ff6b6b';
    darkMood.style.color = '#fff';
    body.style.background = '#fff';
    document.getElementById('hero_btn2').style.borderColor = '#fff';
    document.getElementById('hero_btn2').onmouseenter = function () {
      document.getElementById('hero_btn2').style.background = '#fff';
      myLInk.style.color = '#000';
    };
    document.getElementById('hero_btn2').onmouseleave = function () {
      document.getElementById('hero_btn2').style.background = 'transparent';
      myLInk.style.color = '#fff';
    };
    myLink.style.color = '#fff';
    for (let input of form) {
      input.style.color = '#777';
      input.style.borderColor = '#ddd';
    }
    for (let i of about_i) {
      i.style.color = '#ff6b6b';
    }
    for (let i of trainer_icon) {
      i.style.color = '#777';
    }
    for (let h of midTitleH) {
      h.style.color = '#333';
    }
    for (let p of midTitleP) {
      p.style.color = '#777';
    }
    logo.style.color = '#ff6b6b';
    membership.style.borderColor = '#ff6b6b';
    most_popular.style.background = '#ff6b6b';
    most_popular.style.color = '#fff';
    for (let membershipBTN of membership_btn) {
      membershipBTN.style.background = '#ff6b6b';
      membershipBTN.style.color = '#fff';
      membershipBTN.addEventListener('mouseenter', function () {
        membershipBTN.style.boxShadow = '0px 10px 20px #ff525260';
      });
      membershipBTN.addEventListener('mouseleave', function () {
        membershipBTN.style.boxShadow = 'none';
      });
    }
    for (let i of trainer_icon) {
      i.style.color = '#777';
      i.addEventListener('mouseenter', function () {
        i.style.color = '#ff6b6b';
      });
      i.addEventListener('mouseleave', function () {
        i.style.color = '#777';
      });
    }
    for (let membershipBTN_A of membership_btn_a) {
      membershipBTN_A.style.color = '#fff';
    }
    isDark = false;
  }
})
