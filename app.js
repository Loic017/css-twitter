const forYouBtn = document.getElementById("for-you");
const followingBtn = document.getElementById("following");
const tweetInput = document.getElementById("tweet-input");
const tweetButton = document.getElementById("tweet-btn-small");

tweetButton.disabled = true;

forYouBtn.classList.remove("for-you-following");
forYouBtn.classList.add("clicked");
followingBtn.classList.remove("clicked");
followingBtn.classList.add("following-btn");
console.log("clicked");

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

tweetInput.addEventListener("keyup", () => {
    if (tweetInput.value.trim() !== "") {
        tweetButton.disabled = false;
        tweetButton.classList.remove("tweet-btn-small");
        tweetButton.classList.add("tweet-btn-small-on");
    } else {
        tweetButton.disabled = true;
        tweetButton.classList.add("tweet-btn-small");
        tweetButton.classList.remove("tweet-btn-small-on");
    }
});
