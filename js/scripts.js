const schemesvg = document.querySelector(".scheme-svg");
const cost = 800;

// Проверяем, существует ли схема на странице, чтобы скрипт не ломался
if (schemesvg) {
    schemesvg.addEventListener('click', (event) => {
        // Клик только по креслу и не по занятому
        if (event.target.tagName === 'path' && !event.target.classList.contains("baaked")) {
            
            // Выделяем/снимаем выделение
            event.target.classList.toggle('active');
            
            // Считаем сумму
            let totalSeats = schemesvg.querySelectorAll(".active").length;
            let totalPrice = totalSeats * cost;
            
            // НАХОДИМ ЭЛЕМЕНТ ПРЯМО ЗДЕСЬ И МЕНЯЕМ ТЕКСТ
            let priceSpan = document.querySelector(".price-total");
            if (priceSpan) {
                priceSpan.textContent = totalPrice;
                console.log("Цена обновлена на: " + totalPrice); // Проверка в консоли
            } else {
                console.error("Ошибка: span .price-total не найден на странице!");
            }
        }
    });
} else {
    console.error("Ошибка: .scheme-svg не найден на странице!");
}