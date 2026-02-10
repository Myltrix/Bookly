const popularBooks = [
    { id: 1, title: "1984", author: "Джордж Орвелл", price: 2999, genre: "Антиутопия", description: "Культовый роман-антиутопия, изображающий тоталитарное общество под постоянным контролем «Большого Брата». Оруэлл создает мрачное видение будущего, где независимое мышление преследуется, история постоянно переписывается, а любовь становится политическим преступлением. Роман остается актуальным предупреждением об опасностях тоталитаризма и потере индивидуальности.", image: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/6/26_1_329.jpg" },    
    { id: 2, title: "Мастер и Маргарита", author: "Михаил Булгаков", price: 3249, genre: "Классика", description: "Гениальный философский роман, в котором переплетаются сатира, мистика и глубокие размышления о вечных вопросах добра и зла, искусства и власти. История визита Сатаны в Москву 1930-х годов, параллельно с повествованием о Понтии Пилате и Иешуа Га-Ноцри, создает уникальное литературное полотно о ценности искреннего творчества и силе любви.", image: "https://simg.marwin.kz/media/catalog/product/f/u/fullimage5_868.jpg" },    
    { id: 3, title: "Колесо Времени: Око Мира", author: "Роберт Джордан", price: 3999, genre: "Фэнтези", description: "Первая книга эпической саги «Колесо Времени», которая переносит читателей в мир, где магия, политические интриги и древнее зло переплетаются в грандиозном повествовании. История начинается в тихой деревушке Двуречье, откуда трое молодых людей отправляются в опасное путешествие, даже не подозревая, что им суждено изменить судьбу всего мира.", image: "https://cdn.azbooka.ru/cv/w1100/1f027f4a-ee64-4d5b-8bb5-f452e104c458.jpg" },    
    { id: 4, title: "Три товарища", author: "Эрих Мария Ремарк", price: 2749, genre: "Роман", description: "Пронзительная история о дружбе, любви и потерях в Германии между двумя мировыми войнами. Три фронтовых товарища пытаются найти свое место в послевоенном мире, сталкиваясь с экономическими трудностями, но сохраняя верность друг другу. Роман о хрупкости счастья, силе человеческих связей и попытке остаться человеком в бесчеловечное время.", image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697121655i/199532736.jpg" },    
    { id: 5, title: "Бедные люди", author: "Федор Достоевский", price: 2899, genre: "Классика", description: "Дебютный роман Достоевского, представляющий собой переписку между мелким чиновником Макаром Девушкиным и молодой сиротой Варварой Доброселовой. Глубокий психологический анализ «маленького человека», его достоинства, страданий и внутреннего мира. Книга, в которой уже проявился уникальный стиль и гуманизм великого русского писателя.", image: "https://www.mann-ivanov-ferber.ru/assets/images/covers/82/33782/1.00x-thumb.png" },    
    { id: 6, title: "Голос разума", author: "Айн Рэнд", price: 4999, genre: "Философия", description: "Монументальный социально-философский роман о творческом гении, отказывающемся идти на компромисс со своими принципами. История архитектора Говарда Рорка становится манифестом объективизма, прославляющим индивидуализм, разум и право человека на собственное счастье. Книга, вызывающая споры и заставляющая пересмотреть свои взгляды на общество и мораль.", image: "https://ir.ozone.ru/s3/multimedia-1-8/c1000/7328600492.jpg" },    
    { id: 7, title: "Дюна", author: "Фрэнк Герберт", price: 4599, genre: "Научная фантастика", description: "Первая книга эпической саги, действие которой разворачивается в далеком будущем на пустынной планете Арракис. История Пола Атрейдеса, наследника знатного рода, который становится центральной фигурой в борьбе за контроль над спайсом — самым ценным веществом во Вселенной. Грандиозное произведение о политике, экологии, религии и судьбе человечества.", image: "https://images.deal.by/433924493_w640_h640_kniga-dyuna-podarochnoe.jpg" },    
    { id: 8, title: "Война и мир", author: "Лев Толстой", price: 5499, genre: "Классика", description: "Величайший роман-эпопея, охватывающий судьбы нескольких дворянских семей на фоне наполеоновских войн 1805-1812 годов. Монументальное произведение о любви и предательстве, героизме и трусости, поиске смысла жизни и влиянии истории на судьбы отдельных людей. Философские размышления автора сочетаются с подробным историческим анализом и глубоким психологизмом персонажей.", image: "https://www.mann-ivanov-ferber.ru/assets/images/covers/33/31833/1.50x-thumb.png" }
];

const newBooks = [
    { id: 9, title: "Убийство в Восточном экспрессе", author: "Агата Кристи", price: 2799, genre: "Детектив", description: "Знаменитый детектив королевы криминального жанра, в котором Эркюль Пуаро расследует убийство в застрявшем в снегу поезсе. Блестяще построенный сюжет с неожиданной развязкой демонстрирует виртуозное мастерство автора в создании интриги и психологических портретов. Один из самых известных детективов в мировой литературе.", image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/69f101ea-8185-488a-9d5f-a3b5419b63f6/600x900" },    
    { id: 10, title: "Остров сокровищ", author: "Р. Л. Стивенсон", price: 2499, genre: "Приключения", description: "Великая классика приключенческой литературы, повествующая о юном Джиме Хокинсе, отправившемся на поиски сокровищ капитана Флинта. Пираты, морские сражения, предательство и дружба — все это ждет читателей в этой захватывающей истории. Книга, определившая каноны жанра и продолжающая увлекать новые поколения любителей приключений.", image: "https://simg.marwin.kz/media/catalog/product/4/e/stivenson_r_l_ostrov_sokrovishch_novobl.jpg" },    
    { id: 11, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", price: 1999, genre: "Философия", description: "Мудрая и трогательная философская сказка-притча, рассказывающая о встрече летчика, потерпевшего крушение в пустыне, с маленьким принцем с далекой планеты. Сквозь простой и поэтичный текст проступают глубокие размышления о дружбе, любви, ответственности и смысле жизни. Книга, которую стоит перечитывать в разные периоды жизни, каждый раз открывая новые смыслы.", image: "https://litres.az/pub/c/cover/68042933.jpg" },    
    { id: 12, title: "Властелин колец", author: "Дж. Р. Р. Толкин", price: 6499, genre: "Фэнтези", description: "Эпическая трилогия, ставшая фундаментом современного фэнтези и одной из самых популярных книг XX века. История хоббита Фродо Бэггинса, взявшего на себя миссию уничтожить Кольцо Всевластья, разворачивается в тщательно проработанном мире Средиземья. Грандиозное повествование о добре и зле, дружбе, жертве и надежде в борьбе против тьмы.", image: "https://cdn.litres.ru/pub/c/cover/128316.jpg" },    
    { id: 13, title: "Красная таблетка", author: "Андрей Курпатов", price: 3299, genre: "Психология", description: "Бестселлер известного психотерапевта, объясняющий работу мозга и сознания доступным языком. Книга помогает понять, как наши мыслительные процессы влияют на восприятие реальности, принятие решений и эмоциональное состояние. Практические советы и научные обоснования делают эту работу ценным инструментом для саморазвития и улучшения качества жизни.", image: "https://knygy.com.ua/pix/11/9e/ee/119eee76521e14697b070908a36f1874.jpg" },    
    { id: 14, title: "Атомные привычки", author: "Джеймс Клир", price: 3899, genre: "Саморазвитие", description: "Практическое руководство по формированию полезных привычек и избавлению от вредных. Автор предлагает систему небольших, но последовательных изменений, которые приводят к значительным результатам. Книга основана на научных исследованиях и содержит конкретные стратегии для достижения личных и профессиональных целей через управление своими ежедневными ритуалами.", image: "https://basket-14.wbbasket.ru/vol2154/part215490/215490861/images/big/1.webp" },    
    { id: 15, title: "Шантарам", author: "Грегори Дэвид Робертс", price: 4899, genre: "Приключения", description: "Захватывающий роман, основанный на реальных событиях из жизни автора, сбежавшего из австралийской тюрьмы в Индию. История Линдсея, который оказывается в бомбейских трущобах, где находит друзей, любовь и новые испытания. Эпическое повествование о поиске себя, искуплении и силе человеческого духа в экзотических декорациях Мумбаи.", image: "https://s.f.kz/prod/90/89644_1000.jpg" },    
    { id: 16, title: "Финансист", author: "Теодор Драйзер", price: 3199, genre: "Роман", description: "Первая книга «Трилогии желания», рассказывающая о становлении Фрэнка Каупервуда — талантливого и беспринципного финансиста. Драйзер создает масштабное полотно американского общества конца XIX века, исследуя психологию бизнеса, власть денег и моральные дилеммы капитализма. Роман о человеке, для которого финансовая игра становится смыслом жизни.", image: "https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915/debbbb0442c/c/o/drayzer_t_finansist_4.jpg" }
];

let cart = JSON.parse(localStorage.getItem('booklyCart')) || [];

function displayBooks(books, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    books.forEach(book => {
        const isInCart = cart.some(item => item.id === book.id);
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}" 
                     onerror="this.src='https://via.placeholder.com/220x260?text=No+Image'; this.onerror=null;">
            </div>
            <div class="book-content">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-genre">${book.genre}</p>
                <div class="book-price">${formatPrice(book.price)} ₸</div>
                <div class="book-actions">
                    <button class="book-btn details" onclick="showBookDetails(${book.id})">
                        Подробнее
                    </button>
                    <button class="book-btn cart ${isInCart ? 'in-cart' : ''}" 
                            onclick="toggleCart(${book.id}, '${book.title.replace(/'/g, "\\'")}', ${book.price}, '${book.image}', '${book.genre}')"
                            id="cartBtn-${book.id}">
                        ${isInCart ? 'В корзине' : 'В корзину'}
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(bookCard);
    });
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function toggleCart(bookId, title, price, image, genre) {
    const index = cart.findIndex(item => item.id === bookId);
    const cartBtn = document.getElementById(`cartBtn-${bookId}`);
    
    if (index === -1) {
        cart.push({ id: bookId, title: title, price: price, image: image, genre: genre, quantity: 1 });
        if (cartBtn) {
            cartBtn.textContent = 'В корзине';
            cartBtn.classList.add('in-cart');
        }
    } else {
        cart.splice(index, 1);
        if (cartBtn) {
            cartBtn.textContent = 'В корзину';
            cartBtn.classList.remove('in-cart');
        }
    }
    
    localStorage.setItem('booklyCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        cartCountElement.style.transform = 'scale(1.2)';
        setTimeout(() => { cartCountElement.style.transform = 'scale(1)'; }, 300);
    }
}

function showBookDetails(bookId) {
    let book = popularBooks.find(b => b.id === bookId) || 
               newBooks.find(b => b.id === bookId);
    
    if (!book && cart) {
        book = cart.find(b => b.id === bookId);
    }
    
    if (!book) return;

    createAndShowModal(book);
}

function setupSlider(sliderId, prevBtnId, nextBtnId) {
    const slider = document.getElementById(sliderId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const scrollAmount = 240; 
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

function createAndShowModal(book) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
        padding: 15px;
        overflow: hidden; 
    `;
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background-color: white;
        border-radius: 12px;
        padding: 25px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: scroll;
        position: relative;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: #f0f4f8;
        border: none;
        font-size: 20px;
        color: #666;
        cursor: pointer;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s;
        z-index: 10;
    `;
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.style.cssText = `
        display: flex;
        gap: 30px;
        margin-top: 10px;
        align-items: flex-start;
    `;
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'modal-image-container';
    imageContainer.style.cssText = `
        flex: 0 0 auto;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `;
    
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookImage.style.cssText = `
        width: 100%;
        max-width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    `;
    bookImage.onerror = function() {
        this.src = 'https://via.placeholder.com/300x400?text=No+Image';
    };
    
    const textContainer = document.createElement('div');
    textContainer.className = 'modal-text-container';
    textContainer.style.cssText = `
        flex: 1;
        min-width: 0;
    `;
    
    const title = document.createElement('h2');
    title.textContent = book.title;
    title.style.cssText = `
        margin-bottom: 10px;
        color: #1a365d;
        font-family: 'Merriweather', serif;
        font-size: 26px;
        line-height: 1.3;
        word-wrap: break-word;
    `;
    
    const author = document.createElement('h4');
    author.textContent = `Автор: ${book.author}`;
    author.style.cssText = `
        margin-bottom: 15px;
        color: #666;
        font-size: 16px;
        font-weight: 500;
    `;
    
    const genreContainer = document.createElement('div');
    genreContainer.style.marginBottom = '20px';
    
    const genreSpan = document.createElement('span');
    genreSpan.textContent = book.genre;
    genreSpan.style.cssText = `
        background-color: #f0f4f8;
        color: #4a6fa5;
        padding: 6px 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    `;
    
    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.marginBottom = '25px';
    
    const description = document.createElement('p');
    description.textContent = book.description || 'Описание отсутствует.';
    description.style.cssText = `
        color: #333;
        font-size: 15px;
        line-height: 1.6;
        text-align: left;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #4a6fa5;
        margin: 0;
    `;
    
    genreContainer.appendChild(genreSpan);
    descriptionContainer.appendChild(description);
    
    textContainer.appendChild(title);
    textContainer.appendChild(author);
    textContainer.appendChild(genreContainer);
    textContainer.appendChild(descriptionContainer);
    
    imageContainer.appendChild(bookImage);
    modalBody.appendChild(imageContainer);
    modalBody.appendChild(textContainer);
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.backgroundColor = '#e0e6ed');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.backgroundColor = '#f0f4f8');
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscKey);
        }
    };
    document.addEventListener('keydown', handleEscKey);
    
    document.body.style.overflow = 'hidden';

    if (!document.getElementById('bookly-modal-unified-styles')) {
        const style = document.createElement('style');
        style.id = 'bookly-modal-unified-styles';
        style.textContent = `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
            
            .modal-content::-webkit-scrollbar { display: none; }
            .modal-content { -ms-overflow-style: none; scrollbar-width: none; }

            @media (max-width: 900px) {
                .modal-body { flex-direction: column; align-items: center; }
                .modal-image-container { width: 100% !important; justify-content: center; margin-bottom: 20px; }
                .modal-image-container img { height: 350px !important; max-width: 260px !important; }
                .modal-text-container { width: 100%; text-align: center; }
                .modal-text-container p { text-align: left; }
            }
            
            @media (max-width: 600px) {
                .modal-content { padding: 20px 15px !important; }
                .modal-image-container img { height: 280px !important; max-width: 200px !important; }
                .modal h2 { font-size: 22px !important; }
                .modal p { font-size: 14px !important; padding: 15px !important; }
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayBooks(popularBooks, 'popularBooks');
    displayBooks(newBooks, 'newBooks');
    updateCartCount();
    
    setupSlider('popularBooks', 'prevPopular', 'nextPopular');
    setupSlider('newBooks', 'prevNew', 'nextNew');
    
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => { window.location.href = 'pages/cart.html'; });
    }
});