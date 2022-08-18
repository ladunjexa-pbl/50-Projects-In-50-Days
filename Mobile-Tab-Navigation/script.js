const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("show"));
    listItems.forEach((item) => item.classList.remove("active"));

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});
