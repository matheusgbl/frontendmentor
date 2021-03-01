var bookmarked = false;

function markBook() {
  let bookmarkText = document.getElementById("bookmark-p");
  let bookmarkImg = document.getElementById("bookmark-img");


  if(bookmarked) {
    bookmarkText.style.color = "hsl(0, 0%, 48%)";
    bookmarkImg.setAttribute("src", "./images/icon-bookmark.svg");
    bookmarkText.innerHTML = "Bookmark";

    bookmarked = false;
  } else {
    bookmarkText.style.color = "hsl(176, 72%, 28%)";
    bookmarkImg.setAttribute("src", "./images/icon-bookmarked.svg");
    bookmarkText.innerHTML = "Bookmarked";
    bookmarkText.style.marginLeft = "20px";

    bookmarked = true;
  }
}