const faqData = [
    {
        id: 1,
        question: "Как заказать книгу?",
        answer: "Выберите книгу в каталоге, добавьте в корзину и перейдите к оформлению заказа."
    },
    {
        id: 2,
        question: "Какие способы оплаты есть?",
        answer: "Мы принимаем банковские карты, наличные при получении и онлайн-платежи."
    },
    {
        id: 3,
        question: "Сколько стоит доставка?",
        answer: "Доставка по городу стоит 500 тенге, по стране - от 1000 тенге."
    },
    {
        id: 4,
        question: "Как отследить заказ?",
        answer: "После отправки мы вышлем вам номер для отслеживания по SMS или email."
    },
    {
        id: 5,
        question: "Можно ли вернуть книгу?",
        answer: "Да, если книга имеет дефекты. Возврат возможен в течение 14 дней."
    },
    {
        id: 6,
        question: "Как сделать возврат?",
        answer: "Свяжитесь с поддержкой, опишите проблему и следуйте инструкциям менеджера."
    },
    {
        id: 7,
        question: "Есть ли электронные книги?",
        answer: "Да, многие книги доступны в электронном формате после покупки."
    },
    {
        id: 8,
        question: "Как узнать о новых поступлениях?",
        answer: "Подпишитесь на рассылку или следите за обновлениями в каталоге."
    },
    {
        id: 9,
        question: "Есть ли аудиокниги?",
        answer: "Да, в каталоге есть раздел с аудиокнигами в формате MP3."
    },
    {
        id: 10,
        question: "Можно ли заказать книгу под заказ?",
        answer: "Да, свяжитесь с нами, мы найдем нужную книгу у поставщиков."
    }
];

const faqContainer = document.getElementById('faqContainer');

function displayFAQ() {
    faqContainer.innerHTML = '';
    
    let faqHTML = '';
    
    faqData.forEach((faq, index) => {
        faqHTML += `
            <div class="faq-item" data-id="${faq.id}">
                <div class="faq-question">
                    <div class="faq-question-content">
                        <div class="faq-number">${index + 1}</div>
                        <div class="faq-question-text">
                            <h3>${faq.question}</h3>
                        </div>
                    </div>
                    </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    faqContainer.innerHTML = faqHTML;
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

function demonstrateProjectRequirements() {
    console.log('=== ДЕМОНСТРАЦИЯ ТРЕБОВАНИЙ ПРОЕКТА (FAQ) ===');
    
    console.log('1. УСЛОВИЯ (if/else) - анализ FAQ:');
    const totalQuestions = faqData.length;
    
    if (totalQuestions >= 10) {
        console.log('Всего вопросов: ' + totalQuestions);
    } else if (totalQuestions >= 5) {
        console.log('Вопросов: ' + totalQuestions);
    } else {
        console.log('Мало вопросов: ' + totalQuestions);
    }
    
    console.log('\n2. ЦИКЛ (for) - список всех вопросов:');
    for (let i = 0; i < faqData.length; i++) {
        console.log((i + 1) + '. ' + faqData[i].question);
    }
    
    console.log('\n3. SWITCH - категоризация вопросов:');
    
    let orderQuestions = 0;
    let otherQuestions = 0;
    
    for (const faq of faqData) {
        const question = faq.question.toLowerCase();
        
        switch(true) {
            case question.includes('заказ'):
            case question.includes('доставк'):
            case question.includes('оплат'):
                orderQuestions++;
                break;
            default:
                otherQuestions++;
        }
    }
    
    console.log('Вопросов про заказы: ' + orderQuestions);
    console.log('Других вопросов: ' + otherQuestions);
}

function countFAQ() {
    return faqData.length;
}

function getLongestAnswer() {
    let longestQuestion = '';
    let longestLength = 0;
    
    for (const faq of faqData) {
        if (faq.answer.length > longestLength) {
            longestQuestion = faq.question;
            longestLength = faq.answer.length;
        }
    }
    
    return { question: longestQuestion, length: longestLength };
}

function getShortestAnswer() {
    let shortestQuestion = '';
    let shortestLength = Infinity;
    
    for (const faq of faqData) {
        if (faq.answer.length < shortestLength) {
            shortestQuestion = faq.question;
            shortestLength = faq.answer.length;
        }
    }
    
    return { question: shortestQuestion, length: shortestLength };
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('booklyCart')) || [];
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartCountElement.textContent = totalItems;
    }
}

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

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    initSidebar();
    
    displayFAQ();
    
    demonstrateProjectRequirements();
    
    console.log('\n=== ИНФОРМАЦИЯ О FAQ ===');
    console.log('Всего вопросов: ' + countFAQ());
    
    const longest = getLongestAnswer();
    console.log('Самый длинный ответ: ' + longest.question);
    
    const shortest = getShortestAnswer();
    console.log('Самый короткий ответ: ' + shortest.question);
    
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .faq-item {
            animation: fadeIn 0.4s ease;
        }
        
        /* Анимация для FAQ */
        .faq-item:nth-child(1) { animation-delay: 0.1s; }
        .faq-item:nth-child(2) { animation-delay: 0.2s; }
        .faq-item:nth-child(3) { animation-delay: 0.3s; }
        .faq-item:nth-child(4) { animation-delay: 0.4s; }
        .faq-item:nth-child(5) { animation-delay: 0.5s; }
        .faq-item:nth-child(6) { animation-delay: 0.6s; }
        .faq-item:nth-child(7) { animation-delay: 0.7s; }
        .faq-item:nth-child(8) { animation-delay: 0.8s; }
        .faq-item:nth-child(9) { animation-delay: 0.9s; }
        .faq-item:nth-child(10) { animation-delay: 1s; }
        
        /* Стиль для активного FAQ */
        .faq-item.active .faq-question {
            background-color: #f0f4f8;
        }
        
        .faq-item.active .faq-question-text h3 {
            color: #4a6fa5;
        }
    `;
    document.head.appendChild(style);
});