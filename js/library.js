const librariesData = [
    {
        id: 1,
        name: "Национальная библиотека РК",
        description: "Крупнейшая библиотека Казахстана с уникальным архитектурным дизайном в форме глаза. Здесь хранятся редкие издания, исторические документы и современная литература.",
        image: "https://sxodim.com/uploads/posts/2023/03/07/optimized/37b6fbcd972449dc3cf56a9500e8f93f_1522x570-q-85.jpg",
        rating: 4.8,
        address: "ул. Достык, 11",
        hours: "09:00 - 20:00",
        days: "Пн-Вс",
        phone: "+7 (7172) 79-83-00",
        website: "https://nlrk.kz",
        gisUrl: "https://go.2gis.com/0aLVz",
        booksCount: "6 млн+",
        special: "Редкие документы"
    },
    {
        id: 2,
        name: "Библиотека Первого Президента",
        description: "Современная библиотека с уникальным фондом документов и книг по истории Казахстана. Имеет музейный комплекс и выставочные залы.",
        image: "https://e-history.kz/media/upload/ckimages/%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%B1%D0%B0%D0%B5%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80(3).jpg",
        rating: 4.6,
        address: "ул. Бейбитшилик, 11",
        hours: "10:00 - 19:00",
        days: "Вт-Вс",
        phone: "+7 (7172) 70-50-00",
        website: "https://fprk.kz",
        gisUrl: "https://go.2gis.com/Ns6hE",
        booksCount: "500 тыс+",
        special: "Архив Первого Президента"
    },
    {
        id: 3,
        name: "Центральная городская библиотека",
        description: "Главная публичная библиотека Астаны с богатым фондом художественной литературы. Регулярно проводит литературные вечера и встречи с авторами.",
        image: "https://madeniportal.kz/assets/upload/images/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B1%D0%B8%D0%B1-%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1-%D0%B8%D0%BA%D0%B8-%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD-%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B0-kazakhst-97669062_1528211463126.jpg",
        rating: 4.5,
        address: "ул. Абая, 68",
        hours: "09:00 - 19:00",
        days: "Пн-Сб",
        phone: "+7 (7172) 32-61-41",
        website: "https://cbs.astana.kz",
        gisUrl: "https://go.2gis.com/GBfa9",
        booksCount: "300 тыс+",
        special: "Большой детский отдел"
    },
    {
        id: 4,
        name: "Центральная детско-юношеская библиотека",
        description: "Современный культурный центр с обширным фондом литературы на казахском, русском и английском языках.",
        image: "https://static-pano.maps.yandex.ru/v1/?panoid=1499798093_719035106_23_1714219889&size=500%2C240&azimuth=179.5&tilt=10&api_key=maps&signature=HtFP8qasHcgaPeMkFYoMz2IxedA59En5snKHbEvH0bM=",
        rating: 4.7,
        address: "пр. Республики, 2",
        hours: "10:00 - 20:00",
        days: "Пн-Вс",
        phone: "+7 (7172) 75-12-34",
        website: "#",
        gisUrl: "https://go.2gis.com/L4cK1",
        booksCount: "400 тыс+",
        special: "Электронный читальный зал"
    },
    {
        id: 5,
        name: "Библиотека имени Бегалина",
        description: "Специализированная библиотека для детей и подростков. Проводит развивающие занятия, мастер-классы и литературные конкурсы.",
        image: "https://almatylibrary.kz/wp-content/uploads/2023/04/dsc_0651-1-scaled.jpg",
        rating: 4.4,
        address: "ул. Кенесары, 40",
        hours: "09:00 - 18:00",
        days: "Пн-Пт",
        phone: "+7 (7172) 32-51-62",
        website: "#",
        gisUrl: "https://go.2gis.com/vRL5w",
        booksCount: "150 тыс+",
        special: "Интерактивные детские зоны"
    },
    {
        id: 6,
        name: "Научная библиотека ЕНУ",
        description: "Крупнейшая университетская библиотека с научной и учебной литературой. Доступна не только студентам, но и всем желающим.",
        image: "https://avatars.mds.yandex.net/get-altay/3518606/2a000001794950ae4e24b86f8de72a56ded7/orig",
        rating: 4.3,
        address: "ул. Кажымукана, 13",
        hours: "08:30 - 20:00",
        days: "Пн-Сб",
        phone: "+7 (7172) 70-95-00",
        website: "https://enu.kz",
        gisUrl: "https://go.2gis.com/1AJwc",
        booksCount: "2 млн+",
        special: "Научные издания и диссертации"
    }
];

// Элементы DOM
const librariesGrid = document.getElementById('librariesGrid');
const openMapBtn = document.getElementById('openMap');

function displayLibraries() {
    librariesGrid.innerHTML = '';
    
    librariesData.forEach(library => {
        const libraryCard = document.createElement('div');
        libraryCard.className = 'library-card';
        libraryCard.innerHTML = `
            <div class="library-image">
                <img src="${library.image}" alt="${library.name}" loading="lazy">
            </div>
            <div class="library-content">
                <div class="library-header">
                    <h3>${library.name}</h3>
                    <div class="library-rating">
                        <i class="fas fa-star"></i>
                        <span>${library.rating}</span>
                    </div>
                </div>
                <p class="library-description">${library.description}</p>
                
                <div class="library-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${library.address}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${library.hours} (${library.days})</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <span>${library.phone}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-book"></i>
                        <span>Книг: ${library.booksCount}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-star"></i>
                        <span>Особенность: ${library.special}</span>
                    </div>
                </div>
                
                <div class="library-actions">
                    <a href="${library.gisUrl}" class="btn btn-primary" target="_blank" style="width: 100%; text-align: center;">
                        <i class="fas fa-external-link-alt"></i> Открыть в 2ГИС
                    </a>
                </div>
            </div>
        `;
        
        librariesGrid.appendChild(libraryCard);
    });
}

// Функция для демонстрации требований проекта
function demonstrateProjectRequirements() {
    console.log('=== ДЕМОНСТРАЦИЯ ТРЕБОВАНИЙ ПРОЕКТА (Библиотеки) ===');
    
    // 1. Условия (if/else) - анализ библиотек
    console.log('1. УСЛОВИЯ (if/else) - анализ библиотек:');
    const totalLibraries = librariesData.length;
    
    if (totalLibraries >= 6) {
        console.log('✅ Отличный выбор! В Астане ' + totalLibraries + ' замечательных библиотек');
    } else if (totalLibraries >= 3) {
        console.log('📚 Хорошо: ' + totalLibraries + ' библиотеки для посещения');
    } else {
        console.log('⚠️ Мало библиотек: всего ' + totalLibraries);
    }
    
    // Проверим, какие библиотеки работают по выходным
    const weekendLibraries = librariesData.filter(lib => lib.days.includes('Вс'));
    console.log('📅 Библиотек, работающих в воскресенье: ' + weekendLibraries.length);
    
    // 2. Цикл (for) - информация о всех библиотеках
    console.log('\n2. ЦИКЛ (for) - список всех библиотек:');
    for (let i = 0; i < librariesData.length; i++) {
        const lib = librariesData[i];
        console.log(`${i + 1}. ${lib.name} - Рейтинг: ${lib.rating}/5`);
    }
    
    // 3. Switch - категоризация по типу библиотек
    console.log('\n3. SWITCH - анализ по типам библиотек:');
    
    let nationalLibraries = 0;
    let cityLibraries = 0;
    let specialLibraries = 0;
    
    for (const library of librariesData) {
        const name = library.name.toLowerCase();
        
        // Используем switch для категоризации
        switch(true) {
            case name.includes('национальн'):
            case name.includes('елбасы'):
                nationalLibraries++;
                break;
            case name.includes('городск'):
            case name.includes('центральн'):
                cityLibraries++;
                break;
            case name.includes('детск'):
            case name.includes('научн'):
            case name.includes('университет'):
                specialLibraries++;
                break;
            default:
                specialLibraries++;
        }
    }
    
    console.log('🏛️ Национальные библиотеки: ' + nationalLibraries);
    console.log('🏙️ Городские библиотеки: ' + cityLibraries);
    console.log('🎯 Специализированные библиотеки: ' + specialLibraries);
}

// Пользовательские функции (требование проекта)
function countLibraries() {
    return librariesData.length;
}

function getHighestRatedLibrary() {
    let highestRating = 0;
    let bestLibrary = '';
    
    for (const library of librariesData) {
        if (library.rating > highestRating) {
            highestRating = library.rating;
            bestLibrary = library.name;
        }
    }
    
    return { name: bestLibrary, rating: highestRating };
}

function getLibraryWithMostBooks() {
    let maxBooks = 0;
    let libraryName = '';
    
    for (const library of librariesData) {
        // Извлекаем число из строки (например: "6 млн+" -> 6)
        const booksText = library.booksCount;
        const match = booksText.match(/(\d+)/);
        if (match) {
            const booksCount = parseInt(match[0]);
            if (booksCount > maxBooks) {
                maxBooks = booksCount;
                libraryName = library.name;
            }
        }
    }
    
    return { name: libraryName, books: maxBooks + ' млн+' };
}

// Функция для работы с корзиной
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('booklyCart')) || [];
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartCountElement.textContent = totalItems;
    }
}

// Функция для сайдбара
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
            sidebarOverlay.style.display = 'block';
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('open');
            sidebarOverlay.style.display = 'none';
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            this.style.display = 'none';
        });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем корзину
    updateCartCount();
    
    // Инициализируем сайдбар
    initSidebar();
    
    // Отображаем все библиотеки
    displayLibraries();
    
    // Демонстрация требований проекта
    demonstrateProjectRequirements();
    
    // Показать дополнительную информацию в консоли
    console.log('\n=== ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ ===');
    console.log('📊 Всего библиотек в списке: ' + countLibraries());
    
    const highestRated = getHighestRatedLibrary();
    console.log('⭐ Самая высоко оцененная библиотека: "' + highestRated.name + '"');
    console.log('   Рейтинг: ' + highestRated.rating + '/5');
    
    const mostBooks = getLibraryWithMostBooks();
    console.log('📚 Библиотека с самым большим фондом: "' + mostBooks.name + '"');
    console.log('   Количество книг: ' + mostBooks.books);
    
    // Обработчик для кнопки корзины в шапке
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    // Обработчик для кнопки карты
    if (openMapBtn) {
        openMapBtn.addEventListener('click', function(e) {
            // Можно добавить дополнительную логику при открытии карты
            console.log('Открытие карты библиотек в 2ГИС');
        });
    }
    
    // Добавляем CSS для анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .library-card {
            animation: fadeIn 0.6s ease;
        }
        
        .stat-card {
            animation: fadeIn 0.6s ease;
        }
        
        .tip-card {
            animation: fadeIn 0.6s ease;
        }
        
        /* Анимация для библиотек */
        .library-card:nth-child(1) { animation-delay: 0.1s; }
        .library-card:nth-child(2) { animation-delay: 0.2s; }
        .library-card:nth-child(3) { animation-delay: 0.3s; }
        .library-card:nth-child(4) { animation-delay: 0.4s; }
        .library-card:nth-child(5) { animation-delay: 0.5s; }
        .library-card:nth-child(6) { animation-delay: 0.6s; }
        
        /* Анимация для статистики */
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }
        
        /* Анимация для советов */
        .tip-card:nth-child(1) { animation-delay: 0.1s; }
        .tip-card:nth-child(2) { animation-delay: 0.2s; }
        .tip-card:nth-child(3) { animation-delay: 0.3s; }
        .tip-card:nth-child(4) { animation-delay: 0.4s; }
        
        /* Фон для карты библиотек */
        #mapPlaceholder {
            background-image: url('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    `;
    document.head.appendChild(style);
});