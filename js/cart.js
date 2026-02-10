const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const cartSummary = document.getElementById('cartSummary');
const totalItems = document.getElementById('totalItems');
const subtotalPrice = document.getElementById('subtotalPrice');
const deliveryPrice = document.getElementById('deliveryPrice');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

let cart = JSON.parse(localStorage.getItem('booklyCart')) || [];
let deliveryCost = 0;

let checkoutNameInput, checkoutContactInput, checkoutNameError, checkoutContactError, checkoutPaymentError;

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function saveCartToStorage() {
    localStorage.setItem('booklyCart', JSON.stringify(cart));
    updateHeaderCartCount();
}

function displayCartItems() {
    cartItems.innerHTML = '';
    
    updateHeaderCartCount();
    
    const cartContainer = document.querySelector('.cart-container');
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        if (checkoutBtn) checkoutBtn.disabled = true;
        
        if (cartContainer) cartContainer.classList.add('empty-mode');
        
        cartItems.innerHTML = `
            <div class="empty-cart" id="emptyCart" style="display: block;">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Ваша корзина пуста</h3>
                <p>Добавьте книги из каталога, чтобы сделать заказ</p>
                <a href="catalog.html" class="btn btn-primary">
                    <i class="fas fa-book"></i> Перейти в каталог
                </a>
            </div>
        `;
        return;
    }
    
    if (cartContainer) cartContainer.classList.remove('empty-mode');
    
    if (cartSummary) cartSummary.style.display = 'block';
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}" 
                     onerror="this.src='https://via.placeholder.com/120x170?text=No+Image'; this.onerror=null;">
            </div>
            <div class="cart-item-content">
                <h3 class="cart-item-title">${item.title}</h3>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Удалить
                    </button>
                </div>
            </div>
            <div class="cart-item-price">
                <div class="price-current">${formatPrice(item.price * item.quantity)} ₸</div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    addCartEventListeners();
    updateCartSummary();
}

function updateCartSummary() {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    deliveryCost = subtotal >= 3000 ? 0 : 290;
    const total = subtotal + deliveryCost;
    
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems) totalItems.textContent = totalItemsCount;
    if (subtotalPrice) subtotalPrice.textContent = formatPrice(subtotal) + ' ₸';
    if (deliveryPrice) deliveryPrice.textContent = deliveryCost === 0 ? 'Бесплатно' : formatPrice(deliveryCost) + ' ₸';
    if (totalPrice) totalPrice.textContent = formatPrice(total) + ' ₸';
}

function updateHeaderCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItemsCount;
        cartCountElement.style.display = 'flex';
    }
}

function addCartEventListeners() {
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            increaseQuantity(parseInt(this.dataset.id));
        });
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            decreaseQuantity(parseInt(this.dataset.id));
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(parseInt(this.dataset.id));
        });
    });
}

function increaseQuantity(bookId) {
    const itemIndex = cart.findIndex(item => item.id === bookId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        saveCartToStorage();
        displayCartItems();
    }
}

function decreaseQuantity(bookId) {
    const itemIndex = cart.findIndex(item => item.id === bookId);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
            saveCartToStorage();
            displayCartItems();
        } else {
            removeFromCart(bookId);
        }
    }
}

function removeFromCart(bookId) {
    const itemIndex = cart.findIndex(item => item.id === bookId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        saveCartToStorage();
        displayCartItems();
    }
}

function showCheckoutForm() {
    if (cart.length === 0) {
        return;
    }
    
    modalBody.innerHTML = '';
    
    const formWrapper = document.createElement('div');
    formWrapper.className = 'checkout-form-wrapper';
    formWrapper.id = 'checkoutFormWrapper';
    
    formWrapper.innerHTML = `
        <div class="form-header">
            <h2 class="form-title">Оформление заказа</h2>
            <p class="form-subtitle">Заполните данные для завершения заказа</p>
        </div>
        
        <form id="checkoutForm" class="checkout-form">
            <div class="form-group">
                <label for="checkoutName">Имя</label>
                <input type="text" id="checkoutName" name="name" required 
                       placeholder="Введите ваше имя">
                <div class="error-message" id="checkoutNameError"></div>
            </div>
            
            <div class="form-group">
                <label for="checkoutContact">Телефон или Email</label>
                <input type="text" id="checkoutContact" name="contact" required 
                       placeholder="+7 (771) 123-45-67 или email@example.com">
                <div class="error-message" id="checkoutContactError"></div>
            </div>
            
            <div class="form-group">
                <label>Способ оплаты</label>
                <div class="payment-methods">
                    <div class="payment-option">
                        <input type="radio" id="paymentCard" name="paymentMethod" value="card" required>
                        <label for="paymentCard">
                            <i class="fas fa-credit-card"></i>
                            <span>Банковская карта</span>
                        </label>
                    </div>
                    
                    <div class="payment-option">
                        <input type="radio" id="paymentCash" name="paymentMethod" value="cash">
                        <label for="paymentCash">
                            <i class="fas fa-money-bill-wave"></i>
                            <span>Наличными при получении</span>
                        </label>
                    </div>
                    
                    <div class="payment-option">
                        <input type="radio" id="paymentTransfer" name="paymentMethod" value="transfer">
                        <label for="paymentTransfer">
                            <i class="fas fa-university"></i>
                            <span>Банковский перевод</span>
                        </label>
                    </div>
                </div>
                <div class="error-message" id="checkoutPaymentError"></div>
            </div>
            
            <div class="order-summary">
                <h4>Детали заказа:</h4>
                <div class="summary-details">
                    <div class="summary-row">
                        <span>Товары:</span>
                        <span id="modalTotalItems">${totalItems ? totalItems.textContent : '0 шт.'}</span>
                    </div>
                    <div class="summary-row">
                        <span>Сумма:</span>
                        <span id="modalTotalPrice">${subtotalPrice ? subtotalPrice.textContent : '0 ₸'}</span>
                    </div>
                    <div class="summary-row">
                        <span>Доставка:</span>
                        <span id="modalDeliveryPrice">${deliveryPrice ? deliveryPrice.textContent : '0 ₸'}</span>
                    </div>
                    <div class="summary-divider"></div>
                    <div class="summary-row total">
                        <span>Итого:</span>
                        <span id="modalFinalPrice">${totalPrice ? totalPrice.textContent : '0 ₸'}</span>
                    </div>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-submit">
                    <i class="fas fa-check-circle"></i> Подтвердить заказ
                </button>
                <button type="button" class="btn btn-secondary btn-back" id="backToCart">
                    <i class="fas fa-arrow-left"></i> Вернуться к корзине
                </button>
            </div>
        </form>
    `;
    
    modalBody.appendChild(formWrapper);
    
    initCheckoutFormElements();
    setupCheckoutFormHandlers();
}

function initCheckoutFormElements() {
    checkoutNameInput = document.getElementById('checkoutName');
    checkoutContactInput = document.getElementById('checkoutContact');
    checkoutNameError = document.getElementById('checkoutNameError');
    checkoutContactError = document.getElementById('checkoutContactError');
    checkoutPaymentError = document.getElementById('checkoutPaymentError');
}

function setupCheckoutFormHandlers() {
    const form = document.getElementById('checkoutForm');
    const backBtn = document.getElementById('backToCart');
    
    if (form) {
        form.addEventListener('submit', handleCheckoutSubmit);
        
        if (checkoutNameInput) {
            checkoutNameInput.addEventListener('blur', validateCheckoutName);
        }
        if (checkoutContactInput) {
            checkoutContactInput.addEventListener('blur', validateCheckoutContact);
        }
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            closeModal();
        });
    }
}

function validateCheckoutName() {
    if (!checkoutNameInput) return false;
    
    const name = checkoutNameInput.value.trim();
    if (!name) {
        showCheckoutError(checkoutNameError, 'Введите ваше имя');
        return false;
    }
    if (name.length < 2) {
        showCheckoutError(checkoutNameError, 'Имя должно содержать минимум 2 символа');
        return false;
    }
    clearCheckoutError(checkoutNameError);
    return true;
}

function validateCheckoutContact() {
    if (!checkoutContactInput) return false;
    
    const contact = checkoutContactInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    
    if (!contact) {
        showCheckoutError(checkoutContactError, 'Введите телефон или email');
        return false;
    }
    
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
        showCheckoutError(checkoutContactError, 'Введите корректный телефон или email');
        return false;
    }
    
    clearCheckoutError(checkoutContactError);
    return true;
}

function validateCheckoutPayment() {
    const paymentSelected = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentSelected) {
        showCheckoutError(checkoutPaymentError, 'Выберите способ оплаты');
        return false;
    }
    clearCheckoutError(checkoutPaymentError);
    return true;
}

function showCheckoutError(errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearCheckoutError(errorElement) {
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function validateCheckoutForm() {
    let isValid = true;
    
    if (!validateCheckoutName()) isValid = false;
    if (!validateCheckoutContact()) isValid = false;
    if (!validateCheckoutPayment()) isValid = false;
    
    return isValid;
}

function handleCheckoutSubmit(event) {
    event.preventDefault();
    
    if (!validateCheckoutForm()) {
        return;
    }
    
    const formData = {
        name: checkoutNameInput.value.trim(),
        contact: checkoutContactInput.value.trim(),
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        orderDetails: {
            items: cart,
            subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            delivery: deliveryCost,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + deliveryCost,
            totalItems: cart.reduce((sum, item) => sum + item.quantity, 0)
        },
        timestamp: new Date().toISOString(),
        orderId: generateOrderId()
    };
    
    const orders = JSON.parse(localStorage.getItem('booklyOrders')) || [];
    orders.push(formData);
    localStorage.setItem('booklyOrders', JSON.stringify(orders));
    
    showOrderConfirmation(formData);
}

function generateOrderId() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ORD-${timestamp}${random}`;
}

function showOrderConfirmation(orderData) {
    modalBody.innerHTML = '';
    
    const paymentMethods = {
        'card': 'Банковская карта',
        'cash': 'Наличными при получении',
        'transfer': 'Банковский перевод'
    };
    
    const successContent = document.createElement('div');
    successContent.className = 'checkout-success';
    successContent.id = 'checkoutSuccess';
    
    successContent.innerHTML = `
        <div class="success-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h2 class="form-title">Заказ оформлен успешно!</h2>
        <p class="form-subtitle">Спасибо за ваш заказ. Мы свяжемся с вами для подтверждения в ближайшее время.</p>
        
        <div class="order-details">
            <h4>Детали заказа:</h4>
            <div class="detail-row">
                <strong>Номер заказа:</strong>
                <span>${orderData.orderId}</span>
            </div>
            <div class="detail-row">
                <strong>Имя:</strong>
                <span>${orderData.name}</span>
            </div>
            <div class="detail-row">
                <strong>Контакт:</strong>
                <span>${orderData.contact}</span>
            </div>
            <div class="detail-row">
                <strong>Способ оплаты:</strong>
                <span>${paymentMethods[orderData.paymentMethod]}</span>
            </div>
            <div class="detail-row">
                <strong>Количество товаров:</strong>
                <span>${orderData.orderDetails.totalItems} шт.</span>
            </div>
            <div class="detail-row">
                <strong>Сумма заказа:</strong>
                <span>${formatPrice(orderData.orderDetails.total)} ₸</span>
            </div>
        </div>
        
        <div class="form-actions">
            <button class="btn btn-primary" id="continueShopping">
                <i class="fas fa-shopping-bag"></i> Продолжить покупки
            </button>
        </div>
    `;
    
    modalBody.appendChild(successContent);
    
    document.getElementById('continueShopping').addEventListener('click', function() {
        closeModal();
        clearCart();
        window.location.href = 'catalog.html';
    });
}

function checkout() {
    if (cart.length === 0) {
        return;
    }
    
    checkoutModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    showCheckoutForm();
    
    if (modalClose) {
        modalClose.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f4f8';
        });
        
        modalClose.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    }
}

function clearCart() {
    cart = [];
    saveCartToStorage();
    displayCartItems();
}

function closeModal() {
    checkoutModal.style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
});