import "../css/style.css";
import "../css/reset.css";

const articlesContainer = document.getElementById("articlesContainer");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const cat = document.getElementById("cat");
const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");

const noCat = document.getElementById("noCat");

const data = {
  pages: [
    {
      articles: [
        {
          title: "Chien Fou",
          imgSrc: "../assets/img/image_1.jpg",
          cat: 1,
        },
        {
          title: "Shrek Coincé",
          imgSrc: "../assets/img/image_2.jpg",
          cat: 2,
        },
        {
          title: "Singe Affamé",
          imgSrc: "../assets/img/image_3.jpg",
          cat: 3,
        },
        {
          title: "Paresseux Surfeur",
          imgSrc: "../assets/img/image_4.jpg",
          cat: 1,
        },
        {
          title: "Chiens Oeufs",
          imgSrc: "../assets/img/image_5.jpg",
          cat: 2,
        },
        {
          title: "Canard Banane",
          imgSrc: "../assets/img/image_6.jpg",
          cat: 3,
        },
        {
          title: "M&M'S Concept",
          imgSrc: "../assets/img/image_7.jpg",
          cat: 1,
        },
        {
          title: "Coq Klaxon",
          imgSrc: "../assets/img/image_8.jpg",
          cat: 2,
        },
        {
          title: "Princess Bart Concept",
          imgSrc: "../assets/img/image_9.jpg",
          cat: 3,
        },
      ],
    },
    {
      articles: [
        {
          title: "Mini-Porc",
          imgSrc: "../assets/img/image_10.jpg",
          cat: 1,
        },
        {
          title: "Nez Gru",
          imgSrc: "../assets/img/image_11.jpg",
          cat: 2,
        },
        {
          title: "Green Land",
          imgSrc: "../assets/img/image_12.jpg",
          cat: 3,
        },
        {
          title: "3D Frog",
          imgSrc: "../assets/img/image_13.jpg",
          cat: 1,
        },
        {
          title: "Cringe Family",
          imgSrc: "../assets/img/image_14.jpg",
          cat: 2,
        },
        {
          title: "Elmo au toilette",
          imgSrc: "../assets/img/image_15.jpg",
          cat: 3,
        },
        {
          title: "Chinois Market",
          imgSrc: "../assets/img/image_16.jpg",
          cat: 1,
        },
        {
          title: "Tuto Meurtre",
          imgSrc: "../assets/img/image_17.jpg",
          cat: 2,
        },
        {
          title: "Gros Chat",
          imgSrc: "../assets/img/image_18.jpg",
          cat: 3,
        },
      ],
    },
    {
      articles: [
        {
          title: "Shiba",
          imgSrc: "../assets/img/image_19.jpg",
          cat: 1,
        },
        {
          title: "Pokeboule",
          imgSrc: "../assets/img/image_20.jpg",
          cat: 2,
        },
        {
          title: "Poisson Poulet",
          imgSrc: "../assets/img/image_21.jpg",
          cat: 3,
        },
        {
          title: "Singe",
          imgSrc: "../assets/img/image_22.jpg",
          cat: 1,
        },
        {
          title: "Bob Chicken qui Pleure",
          imgSrc: "../assets/img/image_23.jpg",
          cat: 2,
        },
        {
          title: "Zelda Bros",
          imgSrc: "../assets/img/image_24.jpg",
          cat: 3,
        },
        {
          title: "Stifleur",
          imgSrc: "../assets/img/image_25.jpg",
          cat: 1,
        },
        {
          title: "Shrega",
          imgSrc: "../assets/img/image_26.jpg",
          cat: 2,
        },
        {
          title: "Shrekoquin",
          imgSrc: "../assets/img/image_27.jpg",
          cat: 3,
        },
      ],
    },
  ],
};

let currentCat = 0;
let currentPage = 0;

nextBtn.addEventListener("click", () => {
  if (currentPage !== 2) {
    currentPage++;

    if (currentCat) {
      const FilteredArticles = getFilteredArticles(currentCat);

      generateArticle(FilteredArticles);
    } else {
      generateArticle(data.pages[currentPage].articles);
    }
  } else return;
});

previousBtn.addEventListener("click", () => {
  if (currentPage !== 0) {
    currentPage--;

    if (currentCat) {
      const FilteredArticles = getFilteredArticles(currentCat);

      generateArticle(FilteredArticles);
    } else {
      generateArticle(data.pages[currentPage].articles);
    }
  } else return;
});

cat1.addEventListener("click", () => {
  currentCat = 1;

  const FilteredArticles = getFilteredArticles(currentCat);

  cat.textContent = `Category ${currentCat}`;

  generateArticle(FilteredArticles);
});

cat2.addEventListener("click", () => {
  currentCat = 2;

  const FilteredArticles = getFilteredArticles(currentCat);

  cat.textContent = `Category ${currentCat}`;

  generateArticle(FilteredArticles);
});

cat3.addEventListener("click", () => {
  currentCat = 3;

  const FilteredArticles = getFilteredArticles(currentCat);

  cat.textContent = `Category ${currentCat}`;

  generateArticle(FilteredArticles);
});

noCat.addEventListener("click", () => {
  currentCat = 0;
  generateArticle(data.pages[currentPage].articles);
});

const generateArticle = (articles) => {
  articlesContainer.innerHTML = ``;

  for (const article of articles) {
    articlesContainer.innerHTML += `
            <li class="main--section--ul--li">
                <article class="ul--li--article">
                    <img src="${article.imgSrc}" alt="${article.imgSrc}" class="li--article--img">
                    <h3 class="li--article--h3">${article.title}</h3>
                </article>
            </li>
        `;
  }
};

const getFilteredArticles = (filter) => {
  const filtredArticle = data.pages[currentPage].articles.filter(
    (article) => article.cat === filter
  );

  return filtredArticle;
};

generateArticle(data.pages[currentPage].articles);
