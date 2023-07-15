const forYouBtn = document.getElementById("for-you");
const followingBtn = document.getElementById("following");

console.log(forYouBtn);

forYouBtn.addEventListener("click", () => {
    forYouBtn.classList.remove("for-you-following");
    forYouBtn.classList.add("clicked");
    followingBtn.classList.remove("clicked");
    followingBtn.classList.add("following-btn");
    console.log("clicked");
});

followingBtn.addEventListener("click", () => {
    followingBtn.classList.remove("for-you-following");
    followingBtn.classList.add("clicked");
    forYouBtn.classList.remove("clicked");
    forYouBtn.classList.add("following-btn");
    console.log("clicked");
});
