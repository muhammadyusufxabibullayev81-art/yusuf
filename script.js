const buttons = document.querySelectorAll(".book-btn");

const title = document.getElementById("result-title");
const text = document.getElementById("result-text");    
const loginBtn = document.getElementById("loginBtn");
const loginBox = document.getElementById("loginBox");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", () => {
    loginBox.classList.add("active");
});

closeLogin.addEventListener("click", () => {
    loginBox.classList.remove("active");
});
const books = [
    {
        title: "The Power of Mind",
        text: "Bu kitob insonning fikrlash qobiliyatini rivojlantirish va kuchli maqsadlar qo‘yishga yordam beradi."
    },
    {
        title: "The Secret of Life",
        text: "Hayotdagi muhim qarorlar, tajribalar va muvaffaqiyat haqida qiziqarli fikrlar beruvchi kitob."
    },
    {
        title: "Find Your Way",
        text: "O‘z maqsadingizni topish va kelajak uchun to‘g‘ri yo‘l tanlash haqida motivatsion kitob."
    },
    {
        title: "New Ideas",
        text: "Yangi g‘oyalar yaratish, ijodkorlikni rivojlantirish va boshqacha fikrlash haqida kitob."
    }
];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        title.textContent = books[index].title;
        text.textContent = books[index].text;
    });
});