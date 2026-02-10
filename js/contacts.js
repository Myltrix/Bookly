const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const sendAnotherBtn = document.getElementById('sendAnother');
const faqGrid = document.getElementById('faqGrid');
const openMapBtn = document.getElementById('openMap');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');

function displayFAQ() {
    if (!faqGrid) return;

    faqGrid.innerHTML = '';
}

function validateName() {
    if (!nameInput) return true;
    
    const name = nameInput.value.trim();
    if (!name) {
        showError(nameError, 'Введите ваше имя');
        return false;
    }
    if (name.length < 2) {
        showError(nameError, 'Имя должно содержать минимум 2 символа');
        return false;
    }
    clearError(nameError);
    return true;
}

function validateEmail() {
    if (!emailInput) return true;
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showError(emailError, 'Введите ваш email');
        return false;
    }
    if (!emailRegex.test(email)) {
        showError(emailError, 'Введите корректный email адрес');
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePhone() {
    if (!phoneInput) return true;
    
    const phone = phoneInput.value.trim();
    if (phone) {
        const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        if (!phoneRegex.test(phone)) {
            showError(phoneError, 'Введите корректный номер телефона');
            return false;
        }
    }
    clearError(phoneError);
    return true;
}

function validateMessage() {
    if (!messageInput) return true;
    
    const message = messageInput.value.trim();
    if (!message) {
        showError(messageError, 'Введите ваше сообщение');
        return false;
    }
    if (message.length < 10) {
        showError(messageError, 'Сообщение должно содержать минимум 10 символов');
        return false;
    }
    clearError(messageError);
    return true;
}

function showError(errorElement, message) {
    if (!errorElement) return;
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(errorElement) {
    if (!errorElement) return;
    
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function validateForm() {
    let isValid = true;
    
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateMessage()) isValid = false;
    
    return isValid;
}

function submitForm(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        showAlert('Пожалуйста, исправьте ошибки в форме', 'error');
        return;
    }
    
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim() || 'Не указан',
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
    };
    
    const submissions = JSON.parse(localStorage.getItem('booklyContactSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('booklyContactSubmissions', JSON.stringify(submissions));
    
    if (contactForm) contactForm.style.display = 'none';
    if (successMessage) successMessage.style.display = 'block';
    
    demonstrateFormSubmission(formData);
    
    showAlert('Сообщение успешно отправлено!', 'success');
}

function resetForm() {
    if (contactForm) contactForm.reset();
    
    clearError(nameError);
    clearError(emailError);
    clearError(phoneError);
    clearError(messageError);
    
    if (contactForm) contactForm.style.display = 'block';
    if (successMessage) successMessage.style.display = 'none';
}

function demonstrateFormSubmission(formData) {
    console.log('\n=== ОБРАБОТКА ОТПРАВКИ ФОРМЫ ===');
    
    console.log('1. Проверка данных формы:');
    if (formData.phone === 'Не указан') {
        console.log('Телефон не указан, свяжемся по email');
    } else {
        console.log('Телефон указан, можем позвонить');
    }
    
    console.log('\n2. Статистика символов в сообщении:');
    const message = formData.message;
    let wordCount = 0;
    let charCount = 0;
    
    for (let i = 0; i < message.length; i++) {
        charCount++;
        if (message[i] === ' ' || i === message.length - 1) {
            wordCount++;
        }
    }
    
    console.log(`Сообщение содержит ${wordCount} слов и ${charCount} символов`);
    
    console.log('\n3. Анализ данных формы:');
    console.log('Время отправки:', formatDate(formData.timestamp));
}

function formatDate(isoString) {
    const date = new Date(isoString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function countFormSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('booklyContactSubmissions')) || [];
    return submissions.length;
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem('booklyCart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCountElement.textContent = totalItems;
    }
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    if (type === 'success') {
        alertDiv.style.backgroundColor = '#2a9d8f';
    } else if (type === 'error') {
        alertDiv.style.backgroundColor = '#e63946';
    } else {
        alertDiv.style.backgroundColor = '#4a6fa5';
    }
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (alertDiv.parentNode) {
                document.body.removeChild(alertDiv);
            }
        }, 300);
    }, 3000);
}

function setupCartButton() {
    const cartBtn = document.getElementById('cartBtn');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentPath = window.location.pathname;
            let cartPath = 'cart.html';
            
            if (currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
                cartPath = 'pages/cart.html';
            }
            else if (currentPath.includes('/pages/')) {
                cartPath = 'cart.html';
            }
            
            console.log('Переход на корзину по пути:', cartPath);
            window.location.href = cartPath;
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupCartButton();
    displayFAQ(); // Теперь эта функция только очищает контейнер FAQ
    
    if (nameInput) nameInput.addEventListener('blur', validateName);
    if (emailInput) emailInput.addEventListener('blur', validateEmail);
    if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
    if (messageInput) messageInput.addEventListener('blur', validateMessage);
    
    if (contactForm) {
        contactForm.addEventListener('submit', submitForm);
    }
    
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', resetForm);
    }
    
    if (openMapBtn) {
        openMapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://2gis.kz/astana/geo/70000001041702253', '_blank');
        });
    }
    
    const submissionsCount = countFormSubmissions();
    console.log(`\nВсего отправлено форм: ${submissionsCount}`);
    
    if (!document.querySelector('#contacts-animations')) {
        const style = document.createElement('style');
        style.id = 'contacts-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .contact-form-wrapper {
                animation: fadeIn 0.6s ease;
            }
            
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
            
            .success-message {
                animation: fadeIn 0.6s ease;
            }
            
            .transport-card {
                opacity: 0;
                transform: translateY(20px);
                animation: fadeInUp 0.6s ease forwards;
            }
            
            .transport-card:nth-child(1) { animation-delay: 0.1s; }
            .transport-card:nth-child(2) { animation-delay: 0.2s; }
            .transport-card:nth-child(3) { animation-delay: 0.3s; }
            
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .alert {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 9999;
                animation: slideIn 0.3s ease;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            
            .alert-success {
                background-color: #2a9d8f;
            }
            
            .alert-error {
                background-color: #e63946;
            }
            
            .alert-info {
                background-color: #4a6fa5;
            }
        `;
        document.head.appendChild(style);
    }
});