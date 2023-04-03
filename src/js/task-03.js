const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const container = document.querySelector(".gallery");

// const image = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="gallery_item">
//       <img
//       src="${url}"
//       alt="${alt}"
//       class="${gallery__img}">
//       </li>`
//   )
//   .join("");

// console.log(image);
// container.insertAdjacentHTML("beforeend", image);

const galleryItem = "gallery__item";
const galleryImages = "gallery__image";
const galletyWidth = 400;
const galleryHight = 250;
const galleryListRef = document.querySelector(".gallery");

const createGalleryMarkup = (images) =>
  images
    .map(
      ({ url, alt }) =>
        `<li class=${".galleryItem"}>
            <img 
              class=${".galleryImages"}
              src=${url}
              width=${galletyWidth}
              hidht=${galleryHight}
              alt=${alt}
              />
        </li>`
    )
    .join("");

galleryListRef.insertAdjacentHTML("afterbegin", createGalleryMarkup(images));
