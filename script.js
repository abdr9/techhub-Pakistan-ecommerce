// Shopping Cart functionality
let cart = [];
let cartTotal = 0;

// DOM elements
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const closeModal = document.querySelector('.close');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.querySelector('.checkout-btn');

// Product data
const products = [
    {
        id: 1,
        name: 'NVIDIA RTX 4090',
        price: 450000,
        image: 'https://via.placeholder.com/300x200/FF6B6B/ffffff?text=RTX+4090'
    },
    {
        id: 2,
        name: 'Intel Core i9-13900K',
        price: 120000,
        image: 'https://via.placeholder.com/300x200/4ECDC4/ffffff?text=Intel+i9'
    },
    {
        id: 3,
        name: 'AMD Ryzen 9 7950X',
        price: 135000,
        image: 'https://via.placeholder.com/300x200/45B7D1/ffffff?text=AMD+Ryzen'
    },
    {
        id: 4,
        name: 'Noctua NH-D15',
        price: 18000,
        image: 'https://via.placeholder.com/300x200/96CEB4/ffffff?text=CPU+Cooler'
    },
    {
        id: 5,
        name: 'Corsair Vengeance 32GB',
        price: 35000,
        image: 'https://via.placeholder.com/300x200/FECA57/ffffff?text=32GB+RAM'
    },
    {
        id: 6,
        name: 'Samsung 980 PRO 1TB',
        price: 25000,
        image: 'https://via.placeholder.com/300x200/FF9FF3/ffffff?text=1TB+SSD'
    }
];

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadCartFromStorage();
    updateCartDisplay();
});

function initializeEventListeners() {
    // Cart icon click
    cartIcon.addEventListener('click', openCartModal);
    
    // Close modal
    closeModal.addEventListener('click', closeCartModal);
    
    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Add to cart buttons
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            addToCart(products[index]);
        });
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Shop Now') {
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            } else if (this.textContent === 'Custom Build') {
                document.getElementById('custom-builds').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', handleContactForm);
    
    // Category cards click
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Build cards customize buttons
    const customizeButtons = document.querySelectorAll('.build-card .btn');
    customizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Custom build configuration will be available soon! Please contact us for personalized builds.');
        });
    });
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showAddToCartNotification(product.name);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToStorage();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalAmount.textContent = cartTotal.toLocaleString();
    
    // Update cart items display
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid #eee;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div style="flex: 1;">
                        <h4>${item.name}</h4>
                        <p>₨ ${item.price.toLocaleString()}</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" style="background: #f0f0f0; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" style="background: #f0f0f0; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
}

function openCartModal() {
    cartModal.style.display = 'block';
}

function closeCartModal() {
    cartModal.style.display = 'none';
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Simulate checkout process
    alert(`Thank you for your order! Total: ₨ ${cartTotal.toLocaleString()}\n\nOrder details will be sent to your email. Our team will contact you within 24 hours for delivery confirmation.`);
    
    // Clear cart after checkout
    cart = [];
    updateCartDisplay();
    saveCartToStorage();
    closeCartModal();
}

function performSearch() {
    const searchTerm = document.querySelector('.search-box input').value.toLowerCase();
    if (searchTerm.trim() === '') {
        alert('Please enter a search term');
        return;
    }
    
    // Simple search simulation
    const productCards = document.querySelectorAll('.product-card');
    let found = false;
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (!found) {
        alert('No products found matching your search');
        // Reset display
        productCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email} within 24 hours.`);
    
    // Reset form
    e.target.reset();
}

function showAddToCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.innerHTML = `${productName} added to cart!`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4285f4;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function saveCartToStorage() {
    localStorage.setItem('techhub_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techhub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.category-card, .product-card, .build-card, .feature');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animations
    const elements = document.querySelectorAll('.category-card, .product-card, .build-card, .feature');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);

// Add CSS animation keyframes
const style = document.createElement('style');
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
    
    .cart-item {
        animation: fadeIn 0.3s ease;
    }
    
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
`;
document.head.appendChild(style);

// Mobile menu toggle (for responsive design)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add mobile menu button for smaller screens
if (window.innerWidth <= 768) {
    const header = document.querySelector('.header .container');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: block;
    `;
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    header.appendChild(mobileMenuBtn);
}

// Newsletter signup (optional feature)
function handleNewsletterSignup() {
    const email = prompt('Subscribe to our newsletter for latest updates and offers:');
    if (email && email.includes('@')) {
        alert('Thank you for subscribing! You will receive our latest offers and updates.');
    } else if (email) {
        alert('Please enter a valid email address.');
    }
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click tracking for analytics (placeholder)
    const trackClicks = document.querySelectorAll('button, a');
    trackClicks.forEach(element => {
        element.addEventListener('click', function() {
            // Placeholder for analytics tracking
            console.log('Click tracked:', this.textContent || this.getAttribute('href'));
        });
    });
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x200/cccccc/ffffff?text=Image+Not+Available';
        });
    });
});

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.handleNewsletterSignup = handleNewsletterSignup;
