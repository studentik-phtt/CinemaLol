const schemesvg = document.querySelector(".scheme-svg");
const cost = 800;


const menubutton = document.querySelector(".m-menu"); 
const menu = document.querySelector(".menu");

if (schemesvg) {
    schemesvg.addEventListener('click', (event) => {
        if (event.target.tagName === 'path' && !event.target.classList.contains("baaked") && !event.target.classList.contains("light")) {
            event.target.classList.toggle('active');
            let totalSeats = schemesvg.querySelectorAll(".active").length;
            let totalPrice = totalSeats * cost;
            
            let priceSpan = document.querySelector(".price-total");
            if (priceSpan) {
                priceSpan.textContent = totalPrice;
            }
        }
    });
}


if (menubutton && menu) {
    menubutton.addEventListener('click', () => {
        menu.classList.toggle("is-open");
    });
}