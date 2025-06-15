const stations = [
    // Switzerland
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",

    // France
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",

    // Italy
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",

    // Austria
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",

    // Germany
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",

    // Slovenia
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

const inputs = document.querySelectorAll(".js-autocomplete");

// Функция, которая будет настраивать автозаполнение
function setupAutocomplete(inputElement, suggestionElement) {

    // Обработчик события "input" на поле ввода, срабатывает, когда пользователь печатает
    inputElement.addEventListener("input", () => {
        const inputData = inputElement.value.toLowerCase(); //данные полученные при вводе текста в поле инпут (маленькими буквами)

        // Фильтруем список станций, оставляем только те, что начинаются с введённого текста (сначала все в нижний регистр переводим)
        const matches = stations.filter(station =>
            station.toLowerCase().startsWith(inputData)
        );

        // Очищаем старые подсказки (внутренность элемента делаем пустой)
        suggestionElement.innerHTML = "";

        // Если есть совпадения, то показываем подсказки
        if (matches.length > 0) {
            suggestionElement.hidden = false; // показываем блок с подсказками

            // Перебираем все подходящие станции
            matches.forEach(station => {
                // Создаем новый <li> элемент для каждой станции
                const li = document.createElement("li");
                li.textContent = station; // добавляем текст (название станции)
                li.classList.add("form__suggestion-item"); // добавляем CSS-класс для стилей

                // вещаем обработчик событий по клику на подсказку
                li.addEventListener("click", () => {
                    inputElement.value = station; // вставляем выбранную станцию в поле ввода
                    suggestionElement.hidden = true; // скрываем список подсказок
                });

                // Добавляем <li> в контейнер подсказок ul class="form__suggestions"
                suggestionElement.appendChild(li);
            });
        } else {
            // Если ничего не найдено, то скрываем подсказки
            suggestionElement.hidden = true;
        }
    });

    // Когда поле теряет фокус
    inputElement.addEventListener("blur", () => {
        // Ждем немного (чтобы клик на подсказку успел обработаться), затем скрываем подсказки
        setTimeout(() => {
            suggestionElement.hidden = true;
        }, 150);
    });

    // Когда пользователь кликает по полю ввода (:focus)
    inputElement.addEventListener("focus", () => {
        // Запускаем событие "input", чтобы сразу показать подсказки, как будто пользователь только что печатал
        inputElement.dispatchEvent(new Event("input"));
    });

}

// Для каждого поля ввода (Departure или Arrival)
inputs.forEach(input => {
    // Находим рядом элемент, куда будут выводиться подсказки, в этом случае parentElement - это ul с классом form__suggestions
    const suggestionList = input.parentElement.querySelector(".form__suggestions");
    // Настраиваем автозаполнение для каждого input
    setupAutocomplete(input, suggestionList);
});

