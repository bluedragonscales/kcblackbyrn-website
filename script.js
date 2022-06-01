// Buttons to go to specific book pages on Amazon to buy them.
const stirringPower = document.getElementById("sp-amazon");
const acceptingPower = document.getElementById("ap-amazon");

stirringPower.onclick = function(){
    location.href = "https://www.amazon.com/Stirring-Power-Evolution-Magic-Book-ebook/dp/B01N8R12LY";
};

acceptingPower.onclick = function(){
    location.href = "https://www.amazon.com/Accepting-Power-K-C-Blackbyrn-ebook/dp/B09QQHC2YP";
};



// Buttons to go to social media pages for novels.
const facebookButton = document.getElementById("facebook-button");
const amazonButton = document.getElementById("amazon-button");

facebookButton.onclick = function(){
    location.href = "https://www.facebook.com/profile.php?id=100070407158426";
};

amazonButton.onclick = function(){
    location.href = "https://www.amazon.com/~/e/B01MTY79EY";
};
