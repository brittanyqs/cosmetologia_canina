// Función para cargar y mostrar los productos en la página principal
function loadProducts() {
    const productList = document.getElementById('product-list');
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    // Limpiar el contenedor de productos
    productList.innerHTML = '';
  
    // Crear las tarjetas de productos
    products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <h3>${product.category}</h3>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Precio: $${product.price}</p>
        <p>Cantidad disponible: ${product.quantity}</p>
        ${product.quantity === '0' ? '<p class="sold-out">PRODUCTO AGOTADO</p>' : ''}
        <button class="add-to-cart-btn" ${product.quantity === '0' ? 'disabled' : ''} data-index="${index}">Agregar al carrito</button>
      `;
  
      productList.appendChild(productCard);
    });
  
    // Agregar eventos a los botones "Agregar al carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        const selectedProduct = products[productIndex];
        agregarAlCarrito(selectedProduct);
      });
    });
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
  });
  
  
  // Función para verificar si hay un usuario logueado y actualizar la navegación
  function updateNav() {
     const loggedInUser = localStorage.getItem('loggedInUser');
     const loginLink = document.getElementById('login-link');
     const registerLink = document.getElementById('register-link');
     const logoutLink = document.getElementById('logout-link');
     const historialLink = document.getElementById('historial-link');
     const welcomeMessage = document.getElementById('welcome-message');
  
     if (loggedInUser) {
       // Si hay un usuario logueado
       loginLink.style.display = 'none';  // Ocultar el botón de login
       registerLink.style.display = 'none';  // Ocultar el botón de registro
       historialLink.style.display = 'inline';
       welcomeMessage.style.display = 'inline';  // Mostrar mensaje de bienvenida
       welcomeMessage.textContent = `Bienvenido, ${loggedInUser}`;  // Mostrar nombre del usuario
       logoutLink.style.display = 'inline';  // Mostrar botón de cerrar sesión
   
     } else {
       // Si no hay usuario logueado
       loginLink.style.display = 'inline';  // Mostrar el botón de login
       registerLink.style.display = 'inline';  // Mostrar el botón de registro
       welcomeMessage.style.display = 'none';  // Ocultar el mensaje de bienvenida
       logoutLink.style.display = 'none';  // Ocultar el botón de cerrar sesión
     }
   }
   
   // Función para cerrar sesión
   function logoutUser() {
     localStorage.removeItem('loggedInUser');  // Eliminar usuario logueado de localStorage
     alert('Has cerrado sesión exitosamente.');
     updateNav();  // Actualizar la barra de navegación
     window.location.href = 'index.html';  // Redirigir a la página principal
   }
   
   // Evento para gestionar el cierre de sesión
   document.addEventListener('DOMContentLoaded', function() {
     updateNav();  // Llamar a la función para actualizar la navegación cuando la página cargue
   
     const logoutLink = document.getElementById('logout-link');
     if (logoutLink) {
       logoutLink.addEventListener('click', logoutUser);
     }
   });
  
   document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Activa o desactiva la clase "active" para mostrar/ocultar el menú
  });
 

  //Menu hamburguesa
  // Manejar el menú hamburguesa
const hamburgerBtn = document.getElementById('hamburger-btn');
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('active'); // Activa o desactiva la clase "active"
        }
    });
}

function updateNav() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const logoutLink = document.getElementById('logout-link');
  const historialLink = document.getElementById('historial-link');
  const adminLink = document.getElementById('productos-link');
  const welcomeMessage = document.getElementById('welcome-message');

  if (loggedInUser) {
    // Si hay un usuario logueado
    if (loginLink) loginLink.style.display = 'none';
    if (registerLink) registerLink.style.display = 'none';
    if (historialLink) historialLink.style.display = 'inline';
    if (welcomeMessage) {
      welcomeMessage.style.display = 'inline';
      welcomeMessage.textContent = `Bienvenido, ${loggedInUser}`;
    }
    if (loggedInUser === 'admin' && adminLink) {
      adminLink.style.display = 'inline';
    }
    if (logoutLink) logoutLink.style.display = 'inline';
  } else {
    // Si no hay usuario logueado
    if (loginLink) loginLink.style.display = 'inline';
    if (registerLink) registerLink.style.display = 'inline';
    if (welcomeMessage) welcomeMessage.style.display = 'none';
    if (logoutLink) logoutLink.style.display = 'none';
  }
}

// Función para cerrar sesión
function logoutUser() {
  localStorage.removeItem('loggedInUser');
  alert('Has cerrado sesión exitosamente.');
  updateNav();
  window.location.href = '/index.html';
}

document.addEventListener('DOMContentLoaded', function () {
  updateNav();

  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', logoutUser);
  }

  // Agregar el evento del botón del menú hamburguesa
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('active');
      }
    });
  }
});

// Cargar y actualizar los productos cuando se cargue la página principal
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('index.html')) {
    loadProducts();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themes = ['theme-normal','theme-dark', 'theme-palette1', 'theme-palette2', 'theme-palette3', 'theme-palette4', 'theme-paletteHallo2', 'theme-paletteChristmas','theme-paletteIndependencia' ];
  let currentThemeIndex = parseInt(localStorage.getItem('themeIndex')) || 0;

  // Aplicar el tema guardado en localStorage
  document.body.classList.add(themes[currentThemeIndex]);
  themeToggleBtn.textContent = `Cambiar a ${themes[(currentThemeIndex + 1) % themes.length].replace('theme-', '')}`;

  themeToggleBtn.addEventListener('click', function () {
    document.body.classList.remove(themes[currentThemeIndex]);

    // Alternar al siguiente tema
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
    themeToggleBtn.textContent = `Cambiar a ${themes[(currentThemeIndex + 1) % themes.length].replace('theme-', '')}`;
    
    // Guardar el índice del tema actual
    localStorage.setItem('themeIndex', currentThemeIndex);
  });
});