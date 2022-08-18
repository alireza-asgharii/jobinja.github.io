const userContainer = document.querySelector(".user-container");
const moreTools = document.querySelector(".moreTools");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerMenuContainer = document.querySelector(
  ".hamburgerMenuContainer"
);
const selectCity = document.querySelector(".selectCity");
const selectCityItems = selectCity.querySelector(".items");
const slectArrow = selectCity.querySelector(".arrow");
const city = selectCity.querySelector(".city");
const cityItems = selectCity.querySelector("ul").querySelectorAll("li");
const cityItemsUl = selectCity.querySelector("ul");

let clickMenu = false;
let clickTools = false;

hamburgerMenu.addEventListener("click", hamburgerMenuHandler);
userContainer.addEventListener("click", toolsHandler);

function hamburgerMenuHandler() {
  clickMenu = !clickMenu;
  if (clickMenu) {
    hamburgerMenuContainer.classList.add("hamburgerMenuOpen");
    hamburgerMenuContainer.classList.remove("hamburgerMenuClose");
    return;
  }
  hamburgerMenuContainer.classList.remove("hamburgerMenuOpen");
  hamburgerMenuContainer.classList.add("hamburgerMenuClose");
}

function toolsHandler() {
  clickTools = !clickTools;
  if (clickTools) {
    moreTools.classList.remove("toolsClose");
    moreTools.classList.add("toolsShow");
    return;
  }
  moreTools.classList.remove("toolsShow");
  moreTools.classList.add("toolsClose");
}

document.addEventListener("click", (e) => {
  const ele = e.target;
  if (
    hamburgerMenuContainer.classList.contains("hamburgerMenuOpen") &&
    !ele.classList.contains("fa-bars") &&
    !(ele.id === "menuToggle")
  ) {
    hamburgerMenuContainer.classList.remove("hamburgerMenuOpen");
    hamburgerMenuContainer.classList.add("hamburgerMenuClose");
    clickMenu = false;
  }

  if (
    !(ele.id === "toolsToggle") &&
    moreTools.classList.contains("toolsShow")
  ) {
    moreTools.classList.remove("toolsShow");
    moreTools.classList.add("toolsClose");
    clickTools = false;
  }
});

let selectCityisOpen = false;

selectCity.addEventListener("click", (e) => {
  if (!e.target.classList.contains("toggleInput")) {
    selectCityisOpen = !selectCityisOpen;

    selectCityItems.classList.toggle("showCityBox");
    if (selectCityisOpen) {
      slectArrow.classList.remove("rotateArrowRevers");
      slectArrow.classList.add("rotateArrow");
    } else {
      slectArrow.classList.remove("rotateArrow");
      slectArrow.classList.add("rotateArrowRevers");
    }
  }
});

for (let i = 0; i < cityItems.length; i++) {
  cityItems[i].addEventListener("click", () => {
    const value = cityItems[i].innerHTML;
    city.innerHTML = value;
    slected(city.innerHTML, value);
  });
}

const todayData = [
  { name: "استخدام کارشناس سئو", location: " سپاهان همراه ", city: "تهران" },
  {
    name: "استخدام کارشناس پشتیبانی رزرواسیون",
    location: " سفرهای کیش",
    city: "تهران",
  },
  {
    name: "استخدام مدیر کسب و کار اینترنتی",
    location: " سپاهان همراه ",
    city: "تهران",
  },
  
  {
    name: 'استخدام انیماتور (خانم)',
    location: ' تیزر مارکت ',
    city: "تهران",
  },
  {
    name: "استخدام کارشناس ارشد مالی",
    location: " تجارت الکترونیک اول ",
    city: "تهران",
  },
  {
    name: "استخدام کارشناس بازرگانی خارجی",
    location: " نیرو موتور سهند ",
    city: "رشت",
  },
  
  {
    name: 'استخدام انیماتور (خانم)',
    location: ' تیزر مارکت ',
    city: "تهران",
  },
  
  {
    name: 'استخدام انیماتور (خانم)',
    location: ' تیزر مارکت ',
    city: "تهران",
  },
  
  {
    name: "استخدام Operation Senior Specialist",
    location: " گروه اسنپ",
    city: "تهران",
  },
  
  {
    name: 'استخدام انیماتور (خانم)',
    location: ' تیزر مارکت ',
    city: "تهران",
  },
  

  {
    name: "استخدام مدرس برنامه‌نویسی الگوریتم و پایتون",
    location: " مجتمع فنی تهران نمایندگی نارمک",
    city: "تهران",
  },
  {
    name: "استخدام مدیر کسب و کار اینترنتی",
    location: " سپاهان همراه ",
    city: "تهران",
  },
  {
    name: "استخدام مدیر کسب و کار اینترنتی",
    location: " سپاهان همراه ",
    city: "تهران",
  },
  {
    name: "استخدام کارشناس پشتیبانی رزرواسیون",
    location: " سفرهای کیش",
    city: "تهران",
  },
  {
    name: "استخدام مدرس برنامه‌نویسی الگوریتم و پایتون",
    location: " مجتمع فنی تهران نمایندگی نارمک",
    city: "تهران",
  },
  {
    name: 'استخدام انیماتور (خانم)',
    location: ' تیزر مارکت ',
    city: "تهران",
  },
];

const todayDataRender = () => {
  const items = document.querySelector(".Landing .items");
  for (let i of todayData) {
    const markup = `
      <a class="item" href="#">
        <span class="fast">فوری</span>
        <h6>${i.name}</h6>
        <div class="more">
          <div>
            <i class="fa-solid fa-hotel"></i>
            <span>${i.location}</span>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <span>${i.city}</span>
          </div>
        </div>
      </a>
    `;
    items.innerHTML += markup;
  }
};

todayDataRender();

//last Arr
const lastData = [
  {
    name: 'استخدام مسئول دفتر(خانم)', 
    location: ' باگلوس',
    city: 'تهران'
  },
  {
    name: 'استخدام طراح و گرافیست (خانم)', 
    location: ' همراهان نور شبکه',
    city: 'تهران'
  },
  {
    name: 'استخدام سرپرست فروش', 
    location: ' کیان تجارت فیدار',
    city: 'تهران'
  },
  {
    name: 'استخدام مسئول دفتر(خانم)', 
    location: ' باگلوس',
    city: 'تهران'
  },
  
  
  {
    name: 'استخدام مسئول مناقصات', 
    location: ' مهندسی اندیشه سبز تازه',
    city: 'تهران'
  },
  {
    name: 'استخدام کارآموز برنامه نویسی فلاتر', 
    location: ' راه کار درست دیجیتال',
    city: 'تهران'
  },
  {
    name: 'استخدام مسئول دفتر(خانم)', 
    location: ' تهران پارس',
    city: 'تهران'
  },
  {
    name: 'استخدام طراح و گرافیست (خانم)', 
    location: ' همراهان نور شبکه',
    city: 'تهران'
  },
  {
    name: 'استخدام مسئول دفتر(خانم)', 
    location: ' باگلوس',
    city: 'تهران'
  },
  {
    name: 'استخدام کارآموز برنامه نویسی فلاتر', 
    location: ' راه کار درست دیجیتال',
    city: 'تهران'
  },
  {
    name: 'استخدام مسئول دفتر(خانم)', 
    location: ' تهران پارس',
    city: 'تهران'
  },
  
  {
    name: 'استخدام سرپرست فروش', 
    location: ' کیان تجارت فیدار',
    city: 'تهران'
  },
  {
    name: 'استخدام مسئول مناقصات', 
    location: ' مهندسی اندیشه سبز تازه',
    city: 'تهران'
  },
  {
    name: 'استخدام منشی آموزشگاه زبان(خانم)', 
    location: ' عصر کلام زنگنه',
    city: 'تهران'
  },
]

const lastDataRender = () => {
  const lastUl = document.querySelector('.Landing ul');
  for (let item of lastData) {
    const markup = `
      <li class="item">
        <a href="#">
          <h6>
          ${item.name}
          </h6>
          <div class="more">
            <div>
              <i class="fa-solid fa-hotel"></i>
              <span> ${item.location}</span>
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <span>${item.city}</span>
            </div>
          </div>
          <span class="in">امروز</span>
        </a>
      </li>
    `
    lastUl.innerHTML += markup;
  }
}

lastDataRender()
