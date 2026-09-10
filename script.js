(function () {
  "use strict";

  /* --------------------------------------------------------------
     NAVEGACIÓN SPA POR PESTAÑAS
  -------------------------------------------------------------- */
  const panels = document.querySelectorAll('.tab-panel');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.15 });

  function goToTab (tabId) {
    panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-nav').classList.remove('open');
    const activePanel = document.querySelector('.tab-panel.active');
    if (activePanel) activePanel.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  document.querySelectorAll('[data-tab]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      goToTab(el.dataset.tab);
    });
  });

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });

  /* --------------------------------------------------------------
     CARTA REAL — extraída de la carta oficial en PDF ("La Vida Es
     Un Vals"). Selección curada de la casa; la carta completa
     supera los 100 productos entre café, milkshakes, sándwiches,
     burgers, pizzas, tablas, completos, postres y heladería.
     Fotografías: fotos reales del local y recortes de producto
     tomados de la carta oficial.
  -------------------------------------------------------------- */
  const CATEGORIES = [
    { id: 'todas',      label: 'Todas' },
    { id: 'cafe',       label: 'Café y desayuno' },
    { id: 'bebidas',    label: 'Bebidas frías y jugos' },
    { id: 'milkshake',  label: 'Milkshakes zodiacales' },
    { id: 'sandwich',   label: 'Sándwiches' },
    { id: 'burger',     label: 'Burgers' },
    { id: 'pizza',      label: 'Pizzas' },
    { id: 'compartir',  label: 'Tablas, parrilla y picoteo' },
    { id: 'postres',    label: 'Postres y heladería' }
  ];

  const CAT_LABEL = {
    cafe: 'Café y desayuno', bebidas: 'Bebidas frías y jugos', milkshake: 'Milkshakes zodiacales',
    sandwich: 'Sándwiches', burger: 'Burgers', pizza: 'Pizzas',
    compartir: 'Tablas, parrilla y picoteo', postres: 'Postres y heladería'
  };

  const MENU = [
    { id: 1, name: 'Americano (simple)', cat: 'cafe', price: 2200, img: 'IMG_latte' },
    { id: 2, name: 'Americano (doble)', cat: 'cafe', price: 2800, img: 'IMG_latte' },
    { id: 3, name: 'Latte (simple)', cat: 'cafe', price: 2800, img: 'IMG_latte' },
    { id: 4, name: 'Latte (doble)', cat: 'cafe', price: 3400, img: 'IMG_latte' },
    { id: 5, name: 'Cappuccino (simple)', cat: 'cafe', price: 2900, img: 'IMG_latte' },
    { id: 6, name: 'Cappuccino (doble)', cat: 'cafe', price: 3500, img: 'IMG_latte' },
    { id: 7, name: 'Mocaccino (simple)', cat: 'cafe', price: 3600, img: 'IMG_latte', desc: 'Blanco o negro' },
    { id: 8, name: 'Mocaccino (doble)', cat: 'cafe', price: 4200, img: 'IMG_latte', desc: 'Blanco o negro' },
    { id: 9, name: 'Espresso (simple)', cat: 'cafe', price: 2000, img: 'IMG_latte' },
    { id: 10, name: 'Espresso (doble)', cat: 'cafe', price: 2600, img: 'IMG_latte' },
    { id: 11, name: 'Latte Suspiro Limeño', cat: 'cafe', price: 3400, img: 'IMG_latte', desc: 'Vainilla, canela, merenguito' },
    { id: 12, name: 'Café Tiramisú', cat: 'cafe', price: 3700, img: 'IMG_latte', desc: 'Amaretto, chocolate, crema chantilly' },
    { id: 13, name: 'Café Nutella', cat: 'cafe', price: 4990, img: 'IMG_latte', desc: 'Nutella, crema chantilly' },
    { id: 14, name: 'Café Bom Bom', cat: 'cafe', price: 4200, img: 'IMG_latte', desc: 'Leche condensada' },
    { id: 15, name: 'Café Irlandés', cat: 'cafe', price: 4200, img: 'IMG_latte', desc: 'Esencia de whisky' },
    { id: 16, name: 'Café Oreo', cat: 'cafe', price: 4600, img: 'IMG_latte', desc: 'Chocolate, galleta oreo, chantilly' },
    { id: 17, name: 'Café Vienes', cat: 'cafe', price: 3400, img: 'IMG_latte', desc: 'Crema chantilly' },
    { id: 18, name: 'Frappé', cat: 'cafe', price: 3800, img: 'IMG_latte' },
    { id: 19, name: 'Frappé Bombom', cat: 'cafe', price: 4500, img: 'IMG_latte', desc: 'Manjar, bon o bon, rollitos dulces, chantilly' },
    { id: 20, name: 'Affogato', cat: 'cafe', price: 3200, img: 'IMG_latte' },
    { id: 21, name: 'Café Helado', cat: 'cafe', price: 4500, img: 'IMG_latte' },
    { id: 22, name: 'Latte Frío', cat: 'cafe', price: 3500, img: 'IMG_latte' },
    { id: 23, name: 'Latte Frío Saborizado', cat: 'cafe', price: 4000, img: 'IMG_latte' },
    { id: 24, name: 'Americano Frío', cat: 'cafe', price: 3000, img: 'IMG_latte' },
    { id: 25, name: 'Chocolate caliente', cat: 'cafe', price: 4000, img: 'IMG_latte' },
    { id: 26, name: 'Chocolate americano', cat: 'cafe', price: 4500, img: 'IMG_latte' },
    { id: 27, name: 'Cortado', cat: 'cafe', price: 2400, img: 'IMG_latte' },
    { id: 28, name: 'Ice Caramel Macchiato', cat: 'cafe', price: 3800, img: 'IMG_latte' },
    { id: 29, name: 'Ice Latte Matcha', cat: 'cafe', price: 4200, img: 'IMG_latte' },
    { id: 30, name: 'Latte Matcha', cat: 'cafe', price: 3800, img: 'IMG_latte', desc: 'Sin café' },
    { id: 31, name: 'Masala Chai Latte', cat: 'cafe', price: 3900, img: 'IMG_latte', desc: 'Sin café' },
    { id: 32, name: 'Golden Chai Latte', cat: 'cafe', price: 4000, img: 'IMG_latte', desc: 'Cúrcuma, sin café' },
    { id: 33, name: 'Té Variedades', cat: 'cafe', price: 2300, img: 'IMG_latte' },
    { id: 34, name: 'Té Infusiones en teterita', cat: 'cafe', price: 3200, img: 'IMG_latte' },
    { id: 35, name: 'Paila de huevo', cat: 'cafe', price: 4000, img: 'IMG_latte', desc: 'Desayuno' },
    { id: 36, name: 'Paila de huevo con jamón', cat: 'cafe', price: 5000, img: 'IMG_latte', desc: 'Desayuno' },
    { id: 37, name: 'Paila de huevo con queso', cat: 'cafe', price: 5000, img: 'IMG_latte', desc: 'Desayuno' },
    { id: 38, name: '3 tostadas con palta', cat: 'cafe', price: 4000, img: 'IMG_latte', desc: 'Desayuno' },
    { id: 39, name: '3 tostadas con mermelada', cat: 'cafe', price: 3500, img: 'IMG_latte', desc: 'Desayuno' },
    { id: 40, name: 'Desayuno americano', cat: 'cafe', price: 8000, img: 'IMG_latte', desc: 'Huevos, tocino, tostadas de pan, té o café americano o cortado, jugo de naranja' },
    { id: 41, name: 'Media luna', cat: 'cafe', price: 1200, img: 'IMG_latte', desc: 'Bollería' },
    { id: 42, name: 'Rollitos de canela', cat: 'cafe', price: 2500, img: 'IMG_latte', desc: 'Bollería' },
    { id: 43, name: 'Trenza de chocolate', cat: 'cafe', price: 2500, img: 'IMG_latte', desc: 'Bollería' },
    { id: 44, name: 'Piña colada sin alcohol', cat: 'bebidas', price: 4800, img: 'IMG_bebida', desc: 'Batido' },
    { id: 45, name: 'Batido de fruta', cat: 'bebidas', price: 4500, img: 'IMG_bebida' },
    { id: 46, name: 'Smoothie de fruta', cat: 'bebidas', price: 4800, img: 'IMG_bebida' },
    { id: 47, name: 'Batido con helado y fruta', cat: 'bebidas', price: 5000, img: 'IMG_bebida' },
    { id: 48, name: 'Té frío', cat: 'bebidas', price: 3000, img: 'IMG_bebida' },
    { id: 49, name: 'Batido de chocolate', cat: 'bebidas', price: 4200, img: 'IMG_bebida' },
    { id: 50, name: 'Jugo natural', cat: 'bebidas', price: 3500, img: 'IMG_bebida' },
    { id: 51, name: 'Bebida lata', cat: 'bebidas', price: 1800, img: 'IMG_bebida' },
    { id: 52, name: 'Bebida en vidrio', cat: 'bebidas', price: 1800, img: 'IMG_bebida' },
    { id: 53, name: 'Agua vidrio', cat: 'bebidas', price: 1800, img: 'IMG_bebida' },
    { id: 54, name: 'Mojito tradicional', cat: 'bebidas', price: 4000, img: 'IMG_bebida', desc: 'Sin alcohol' },
    { id: 55, name: 'Mojito frutal', cat: 'bebidas', price: 4500, img: 'IMG_bebida', desc: 'Sin alcohol' },
    { id: 56, name: 'Mojito Jamaica', cat: 'bebidas', price: 4700, img: 'IMG_bebida', desc: 'Sin alcohol' },
    { id: 57, name: 'Limonada', cat: 'bebidas', price: 3500, img: 'IMG_bebida' },
    { id: 58, name: 'Limonada menta jengibre', cat: 'bebidas', price: 3700, img: 'IMG_bebida' },
    { id: 59, name: 'Limonada menta albahaca', cat: 'bebidas', price: 3700, img: 'IMG_bebida' },
    { id: 60, name: 'Limonada cerezada', cat: 'bebidas', price: 3800, img: 'IMG_bebida' },
    { id: 61, name: 'Limonada coco', cat: 'bebidas', price: 3800, img: 'IMG_bebida' },
    { id: 62, name: 'Limonada naranja albahaca', cat: 'bebidas', price: 4000, img: 'IMG_bebida' },
    { id: 63, name: 'Limonada maracuyá albahaca', cat: 'bebidas', price: 4000, img: 'IMG_bebida' },
    { id: 64, name: 'Aries', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Vainilla con un toque de canela, salsa de frambuesa y galletas de oblea' },
    { id: 65, name: 'Tauro', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Pie de limón, leche condensada y trozo de pie de limón' },
    { id: 66, name: 'Géminis', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Vainilla, salsa de chocolate y galletas kukys' },
    { id: 67, name: 'Cáncer', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Frutilla, salsa de frambuesa y un muffin' },
    { id: 68, name: 'Leo', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Vainilla con mantequilla de maní, salsa de manjar y galletas de mantequilla y tiffany' },
    { id: 69, name: 'Virgo', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Cookies and cream, salsa de chocolate y galletas oreo' },
    { id: 70, name: 'Libra', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Frutos del bosque, salsa de frambuesa y leche condensada; dulces de colores más cono de helado' },
    { id: 71, name: 'Escorpión', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Chocolate, salsa de chocolate y variedad de chocolates' },
    { id: 72, name: 'Sagitario', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Coco, salsa de chocolate y un brownie entero' },
    { id: 73, name: 'Capricornio', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Capuchino, salsa de chocolate y un trozo de waffle' },
    { id: 74, name: 'Piscis', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Pitufo (ice blue), salsa de frambuesa y dulces ácidos de colores' },
    { id: 75, name: 'Acuario', cat: 'milkshake', price: 7900, img: 'IMG_milkshake', desc: 'Menta chips, salsa de chocolate y trozos de chocolate de menta' },
    { id: 76, name: 'Caballero del Zodiaco', cat: 'milkshake', price: 8900, img: 'IMG_milkshake', desc: 'Arma tu milkshake base Nutella: escoge dos sabores, una salsa y tres toppings (dulces, galletas, chocolates)' },
    { id: 77, name: 'Caprese', cat: 'sandwich', price: 5500, img: 'IMG_sandwich', desc: 'Pasta pesto, queso mozzarella, tomate cherry, albahaca' },
    { id: 78, name: 'Caprese Cabra', cat: 'sandwich', price: 7000, img: 'IMG_sandwich', desc: 'Pasta pesto, 100 grs queso cabra, tomate cherry, albahaca o rúcula' },
    { id: 79, name: 'Caprese Cabra Premium', cat: 'sandwich', price: 7000, img: 'IMG_sandwich', desc: 'Pasta pesto, queso cabra, tomate cherry, rúcula, aceite de oliva y toques de orégano' },
    { id: 80, name: 'Salmón', cat: 'sandwich', price: 9000, img: 'IMG_sandwich', desc: '150 grs de salmón cocido a la plancha, lechuga, palta, queso crema' },
    { id: 81, name: 'Marino', cat: 'sandwich', price: 8000, img: 'IMG_sandwich', desc: '160 grs atún desmenuzado, lechuga, tomate, aceituna, palta, cilantro y aceite de oliva' },
    { id: 82, name: 'Los Roques', cat: 'sandwich', price: 12000, img: 'IMG_sandwich', desc: '200 grs de lomo de res, lechuga, tomate cherry, cebolla morada, pimentón rojo y chimichurry' },
    { id: 83, name: 'Caribeño', cat: 'sandwich', price: 9000, img: 'IMG_sandwich', desc: '60 grs jamón serrano, pasta de alcachofa, lechuga, tomate cherry, tocino y toques de orégano' },
    { id: 84, name: 'Happy Chicken', cat: 'sandwich', price: 7000, img: 'IMG_sandwich', desc: '120 grs de pollo crispy, lechuga, pimentón cocido, cebolla morada, salsa de ajo' },
    { id: 85, name: 'Mexicanísimo', cat: 'sandwich', price: 10000, img: 'IMG_sandwich', desc: '120 grs carne de res, pico de gallo, guacamole' },
    { id: 86, name: 'La Vida es un Vals', cat: 'sandwich', price: 8000, img: 'IMG_sandwich', desc: '140 grs de carne de res desmechada, salsa de ajo, palta, lechuga' },
    { id: 87, name: 'Tentáculos del Mar', cat: 'sandwich', price: 10000, img: 'IMG_sandwich', desc: 'Pulpo en aceite de oliva y chimichurry' },
    { id: 88, name: 'Entrañita', cat: 'sandwich', price: 13000, img: 'IMG_sandwich', desc: '200 grs entraña, chimichurry, cebolla morada, pimentón salteado, champiñón salteado' },
    { id: 89, name: 'Ciabatta', cat: 'sandwich', price: 1000, img: 'IMG_sandwich', desc: 'Pan solo' },
    { id: 90, name: 'Jamón Queso', cat: 'sandwich', price: 5000, img: 'IMG_sandwich', desc: '50 grs de jamón, 50 grs queso gauda' },
    { id: 91, name: 'Pollo Pimentón', cat: 'sandwich', price: 5000, img: 'IMG_sandwich', desc: '140 grs pasta de pimentón rojo con pollo desmenuzado' },
    { id: 92, name: 'Napolitano', cat: 'sandwich', price: 5000, img: 'IMG_sandwich', desc: '50 grs de jamón, 50 grs queso gauda' },
    { id: 93, name: 'Pollo Palta', cat: 'sandwich', price: 5000, img: 'IMG_sandwich', desc: '120 grs de pollo y palta' },
    { id: 94, name: 'Chacarero', cat: 'sandwich', price: 6700, img: 'IMG_sandwich', desc: '120 grs de carne de res, tomate, poroto verde cocido, ají verde y mayonesa casera. Con papas fritas o aros de cebolla' },
    { id: 95, name: 'Barros Luco', cat: 'sandwich', price: 6500, img: 'IMG_sandwich', desc: '120 grs de carne de res, 100 grs queso fundido. Con papas fritas o aros de cebolla' },
    { id: 96, name: 'Chemilico', cat: 'sandwich', price: 6800, img: 'IMG_sandwich', desc: '120 grs de carne de res, cebolla caramelizada, huevo frito. Con papas fritas o aros de cebolla' },
    { id: 97, name: 'Churrasco Italiano', cat: 'sandwich', price: 7000, img: 'IMG_sandwich', desc: '120 grs de carne de res, tomate, palta y mayonesa casera. Con papas fritas o aros de cebolla' },
    { id: 98, name: 'Churrasino', cat: 'sandwich', price: 6700, img: 'IMG_sandwich', desc: '120 grs de carne de res, tomate, tocino y salsa barbacoa. Con papas fritas o aros de cebolla' },
    { id: 99, name: 'Lomo de cerdo o vacuno campestre', cat: 'sandwich', price: 13000, img: 'IMG_sandwich', desc: 'Lomo 250 grs, salsa verde, lechuga, tomate, salsa de la casa. Con papas fritas o aros de cebolla' },
    { id: 100, name: 'Cayo Sal', cat: 'burger', price: 10000, img: 'IMG_burger', desc: 'Lechuga, tomate, aros de cebolla, tocino, huevo, salsa de la casa, papas hilo' },
    { id: 101, name: 'Entre Chile y Venezuela', cat: 'burger', price: 10000, img: 'IMG_burger', desc: '200 grs malaya, 200 grs de carne, lechuga, papas hilo, huevo, ensalada chilena, salsa de la casa' },
    { id: 102, name: 'Isla Larga', cat: 'burger', price: 24000, img: 'IMG_burger', desc: '60 cm de pan ciabatta, con mix de carne y pollo, tocino, lechuga, tomate, papas hilo, queso gauda, mayonesa, ketchup, mostaza y salsa de ajo' },
    { id: 103, name: 'América Cheeseburger', cat: 'burger', price: 10000, img: 'IMG_burger', desc: 'Carne 200 gr, queso cheddar, tocino, salsa de la casa' },
    { id: 104, name: 'Texas', cat: 'burger', price: 10000, img: 'IMG_burger', desc: 'Carne 200 grs, queso cheddar, pepinillos, cebolla morada, repollo morado, mayonesa casera, salsa de la casa' },
    { id: 105, name: 'Tierra del Fuego', cat: 'burger', price: 10000, img: 'IMG_burger', desc: '200 grs de carne, 100 grs de pollo apanado, lechuga, tomate, papas hilo, tocino, huevo, queso cheddar' },
    { id: 106, name: 'Porki', cat: 'burger', price: 10000, img: 'IMG_burger', desc: '150 grs de malaya, pimentón cocido, salsa de la casa, cebolla caramelizada, lechuga, tomate, toques de limón y orégano' },
    { id: 107, name: 'Pizza Margarita', cat: 'pizza', price: 9000, img: 'IMG_pizza', desc: 'Queso mozzarella, albahaca, tomate cherry' },
    { id: 108, name: 'Pizza Peperoni', cat: 'pizza', price: 10000, img: 'IMG_pizza', desc: 'Pepperoni, salame, queso mozzarella, tomate cherry' },
    { id: 109, name: 'Pizza Hawaiana', cat: 'pizza', price: 9000, img: 'IMG_pizza', desc: 'Jamón, queso mozzarella, piña' },
    { id: 110, name: 'Pizza Un Vals', cat: 'pizza', price: 13000, img: 'IMG_pizza', desc: 'Carne mechada, albahaca, pimentón, cebolla morada' },
    { id: 111, name: 'Pizza Napolitana', cat: 'pizza', price: 9000, img: 'IMG_pizza', desc: 'Salsa de tomate, queso mozzarella, jamón, tomate y aceitunas negras' },
    { id: 112, name: 'Pizza 4 Estaciones', cat: 'pizza', price: 12000, img: 'IMG_pizza', desc: 'Choclo, aceituna, jamón, champiñón' },
    { id: 113, name: 'Pizza 4 Carnes', cat: 'pizza', price: 14000, img: 'IMG_pizza', desc: 'Carne de vacuno, pollo, chorizo, jamón' },
    { id: 114, name: 'Chorrillana', cat: 'compartir', price: 15000, img: 'IMG_completos', desc: 'Para compartir' },
    { id: 115, name: 'Tabla Mixta (4 personas)', cat: 'compartir', price: 18000, img: 'IMG_completos', desc: '6 tequeños, 6 empanaditas, 6 aros de cebolla, 6 nuggets, frutillas, 100grs de salame, 200grs queso gauda, 200grs jamón, aceituna, pepinillo, frutos secos' },
    { id: 116, name: 'Tabla Ganadera (4 personas)', cat: 'compartir', price: 30000, img: 'IMG_completos', desc: 'Filete, pollo, chorizo, cerdo, papas fritas, ensalada fresca, lechuga, tomate, cebolla y 2 salsas de la casa' },
    { id: 117, name: 'Lomo a lo Pobre', cat: 'compartir', price: 14000, img: 'IMG_completos' },
    { id: 118, name: 'Parrilla para 2 personas', cat: 'compartir', price: 35000, img: 'IMG_completos', desc: '2 lomos, 2 chuletas, 2 chorizos, 1/4 de pollo, 2 papas cocidas y ensalada mixta' },
    { id: 119, name: 'Parrilla para 4 personas', cat: 'compartir', price: 55000, img: 'IMG_completos', desc: '4 lomos, 2 chuletas, 2 chorizos, 1/2 pollo, 4 papas cocidas y ensalada mixta' },
    { id: 120, name: 'Vienesa Alemana', cat: 'compartir', price: 3200, img: 'IMG_completos' },
    { id: 121, name: 'Completo', cat: 'compartir', price: 4000, img: 'IMG_completos', desc: 'Vienesa, tomate' },
    { id: 122, name: 'El Vals', cat: 'compartir', price: 2800, img: 'IMG_completos', desc: 'Vienesa, tomate, salsa verde, salsa de la casa y americana' },
    { id: 123, name: 'Italiano', cat: 'compartir', price: 3200, img: 'IMG_completos', desc: 'Vienesa, tomate, palta, mayonesa' },
    { id: 124, name: 'Dinámico', cat: 'compartir', price: 3200, img: 'IMG_completos', desc: 'Vienesa, tomate, palta, chucrut, americana, salsa verde, mayonesa' },
    { id: 125, name: 'Perro Caliente', cat: 'compartir', price: 3500, img: 'IMG_completos', desc: 'Vienesa, ensalada de zanahoria y repollo, maíz, queso amarillo, papas hilo, salsas a elección' },
    { id: 126, name: 'Alemán', cat: 'compartir', price: 3200, img: 'IMG_completos', desc: 'Vienesa, chucrut, tomate' },
    { id: 127, name: 'Brasil', cat: 'compartir', price: 4000, img: 'IMG_completos', desc: 'Vienesa, queso, palta' },
    { id: 128, name: 'Ass', cat: 'compartir', price: 4000, img: 'IMG_completos' },
    { id: 129, name: 'Salchipapas', cat: 'compartir', price: 6000, img: 'IMG_completos' },
    { id: 130, name: 'Porción de Papas Fritas (300 gr)', cat: 'compartir', price: 4000, img: 'IMG_completos' },
    { id: 131, name: 'Tequeños (6 unidades)', cat: 'compartir', price: 4500, img: 'IMG_completos' },
    { id: 132, name: 'Fingers de Pollo (5 unidades)', cat: 'compartir', price: 3500, img: 'IMG_completos' },
    { id: 133, name: 'Empanaditas Fritas (6 unidades)', cat: 'compartir', price: 3500, img: 'IMG_completos' },
    { id: 134, name: 'Waffle Solo', cat: 'postres', price: 3000, img: 'IMG_waffle' },
    { id: 135, name: 'Waffle Choco-Guinda', cat: 'postres', price: 7800, img: 'IMG_waffle', desc: 'Helado de vainilla, varillas de chocolate, guinda, salsa de chocolate y crema chantilly' },
    { id: 136, name: 'Waffle Frutal', cat: 'postres', price: 6000, img: 'IMG_waffle', desc: 'Base salsa a elección, crema chantilly, rodajas de frutilla y plátano' },
    { id: 137, name: 'Waffle Mora-Miel', cat: 'postres', price: 6800, img: 'IMG_waffle', desc: 'Moras, arándanos, almendra molida o nueces, crema chantilly y miel' },
    { id: 138, name: 'Waffle Helado', cat: 'postres', price: 6200, img: 'IMG_waffle', desc: 'Salsa a elección, 2 cups de helado, fruta a elección, crema chantilly' },
    { id: 139, name: 'Waffle Bon o Bon', cat: 'postres', price: 7500, img: 'IMG_waffle', desc: 'Salsa a elección, 3 cups de helado, bon o bon triturado, crema chantilly' },
    { id: 140, name: 'Waffle Un Vals', cat: 'postres', price: 8200, img: 'IMG_waffle', desc: 'Nutella, plátano, frutilla, oreo, chantilly, cerezas y cup de helado a elección' },
    { id: 141, name: 'Waffle Marshmallows', cat: 'postres', price: 6200, img: 'IMG_waffle', desc: 'Salsa a elección, frutilla, marshmallows, 1 cup de helado, crema chantilly' },
    { id: 142, name: 'Waffle Snickers', cat: 'postres', price: 8000, img: 'IMG_waffle', desc: 'Salsa a elección, helado a elección, almendras trituradas, crema chantilly, 1 Snickers' },
    { id: 143, name: 'Panqueque Solo', cat: 'postres', price: 2500, img: 'IMG_panqueque' },
    { id: 144, name: 'Panqueque con Manjar', cat: 'postres', price: 3500, img: 'IMG_panqueque' },
    { id: 145, name: 'Panqueque Abanico', cat: 'postres', price: 6500, img: 'IMG_panqueque' },
    { id: 146, name: 'Cheesecake (variedades)', cat: 'postres', price: 5000, img: 'IMG_heladeria' },
    { id: 147, name: 'Pie / Kuchen', cat: 'postres', price: 3500, img: 'IMG_heladeria' },
    { id: 148, name: 'Traviatta', cat: 'postres', price: 6000, img: 'IMG_heladeria' },
    { id: 149, name: 'Bol de Helado (5 sabores)', cat: 'postres', price: 5000, img: 'IMG_heladeria' },
    { id: 150, name: 'Copa de Helado Tropical', cat: 'postres', price: 6000, img: 'IMG_heladeria' },
    { id: 151, name: 'Frutillas con Crema y Nutella', cat: 'postres', price: 6000, img: 'IMG_heladeria' },
    { id: 152, name: 'Copa para Niños', cat: 'postres', price: 5000, img: 'IMG_heladeria' },
    { id: 153, name: 'Copa de Helado con Torta', cat: 'postres', price: 6000, img: 'IMG_heladeria' },
    { id: 154, name: 'Copa de Helado para 2', cat: 'postres', price: 4500, img: 'IMG_heladeria' },
    { id: 155, name: 'Torta (variedades)', cat: 'postres', price: 4200, img: 'IMG_heladeria' },
    { id: 156, name: 'Banana Split', cat: 'postres', price: 8000, img: 'IMG_heladeria' },
    { id: 157, name: 'Volcán de Chocolate', cat: 'postres', price: 7000, img: 'IMG_heladeria' },
    { id: 158, name: 'Helado Simple', cat: 'postres', price: 2000, img: 'IMG_heladeria' },
    { id: 159, name: 'Helado Doble', cat: 'postres', price: 2800, img: 'IMG_heladeria' },
    { id: 160, name: '8 Churros con Manjar y Crema de Avellana', cat: 'postres', price: 7500, img: 'IMG_heladeria' },
    { id: 161, name: 'Brownie con Helado', cat: 'postres', price: 4500, img: 'IMG_heladeria' },
    { id: 162, name: 'Brownie', cat: 'postres', price: 2600, img: 'IMG_heladeria' },
    { id: 163, name: 'Donuts Rellenas', cat: 'postres', price: 2000, img: 'IMG_heladeria' },
    { id: 164, name: 'Donuts sin Relleno', cat: 'postres', price: 1600, img: 'IMG_heladeria' },
    { id: 165, name: 'Fondue', cat: 'postres', price: 15000, img: 'IMG_heladeria', desc: 'Frutillas, plátano, waffles y marshmallows' }
  ];

  const IMG_SRC = {
    IMG_bebida:     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBlMWEzNSIvPjxwYXRoIGQ9Ik03MCA2MGg2MGwtOCAxMDBhNiA2IDAgMCAxLTYgNUg4NGE2IDYgMCAwIDEtNi01TDcwIDYweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDg5QjNDIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNNzggODVoNDRNNzQgMTEwaDUyIiBzdHJva2U9IiNEODlCM0MiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0xMDAgNjBWMzhNMTEyIDQ0bDYtMTAiIHN0cm9rZT0iI0Q4OUIzQyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
    IMG_latte:      'fotos/latte.jpg',
    IMG_milkshake:  'fotos/milkshake.jpg',
    IMG_sandwich:   'fotos/sandwich.jpg',
    IMG_burger:     'fotos/burger.jpg',
    IMG_pizza:      'fotos/pizza.jpg',
    IMG_completos:  'fotos/completos.jpg',
    IMG_heladeria:  'fotos/heladeria.jpg',
    IMG_waffle:     'fotos/waffle.jpg',
    IMG_panqueque:  'fotos/panqueque.jpg'
  };
  MENU.forEach(m => { m.imgSrc = IMG_SRC[m.img]; });

  const fmt = n => '$' + n.toLocaleString('es-CL');

  /* --------------------------------------------------------------
     FILTROS + GRILLA
  -------------------------------------------------------------- */
  const filtersEl = document.getElementById('filters');
  const gridEl = document.getElementById('menu-grid');
  let activeCat = 'todas';

  function renderFilters () {
    filtersEl.innerHTML = CATEGORIES.map(c => {
      const count = c.id === 'todas' ? MENU.length : MENU.filter(m => m.cat === c.id).length;
      return `<button class="cat-btn border hairline px-5 py-2.5 font-mono-label text-[11px] uppercase transition-colors flex items-center gap-2"
                data-cat="${c.id}" data-active="${c.id === activeCat}">
                ${c.label} <span class="cat-count text-inksoft/50">${count}</span>
              </button>`;
    }).join('');
  }

  function renderGrid () {
    const items = activeCat === 'todas' ? MENU : MENU.filter(m => m.cat === activeCat);
    gridEl.innerHTML = items.map(item => `
      <article class="group bg-cream border hairline cursor-pointer" data-id="${item.id}" data-open-modal>
        <div class="aspect-[4/3] overflow-hidden bg-paper">
          <img src="${item.imgSrc}" alt="${item.name}" loading="lazy"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-5">
          <p class="font-mono-label text-[9px] uppercase text-maroon mb-1">${CAT_LABEL[item.cat]}</p>
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display font-bold text-xl leading-tight">${item.name}</h3>
            <span class="font-mono-label text-sm shrink-0 mt-0.5">${fmt(item.price)}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    activeCat = btn.dataset.cat;
    renderFilters();
    renderGrid();
  });

  /* --------------------------------------------------------------
     MODAL
  -------------------------------------------------------------- */
  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCat = document.getElementById('modal-cat');
  const modalName = document.getElementById('modal-name');
  const modalDesc = document.getElementById('modal-desc');
  const modalPrice = document.getElementById('modal-price');
  const modalAdd = document.getElementById('modal-add');
  let modalItem = null;

  function openModal (item) {
    modalItem = item;
    modalImg.src = item.imgSrc; modalImg.alt = item.name;
    modalCat.textContent = CAT_LABEL[item.cat];
    modalName.textContent = item.name;
    modalDesc.textContent = item.desc;
    modalPrice.textContent = fmt(item.price);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal () { modal.classList.remove('open'); document.body.style.overflow = ''; }

  gridEl.addEventListener('click', e => {
    const card = e.target.closest('[data-open-modal]');
    if (!card) return;
    const item = MENU.find(m => m.id === Number(card.dataset.id));
    if (item) openModal(item);
  });
  modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  modalAdd.addEventListener('click', () => { if (modalItem) { addToCart(modalItem); closeModal(); openCart(); } });

  /* --------------------------------------------------------------
     CARRITO
  -------------------------------------------------------------- */
  const cart = new Map();
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartItemsEl = document.getElementById('cart-items');
  const cartEmptyEl = document.getElementById('cart-empty');
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cart-total');
  const copyBtn = document.getElementById('copy-order');
  const copyToast = document.getElementById('copy-toast');

  function addToCart (item) {
    const entry = cart.get(item.id) || { item, qty: 0 };
    entry.qty += 1;
    cart.set(item.id, entry);
    renderCart();
  }
  function changeQty (id, delta) {
    const entry = cart.get(id);
    if (!entry) return;
    entry.qty += delta;
    if (entry.qty <= 0) cart.delete(id);
    renderCart();
  }

  function renderCart () {
    const entries = Array.from(cart.values());
    cartEmptyEl.classList.toggle('hidden', entries.length > 0);
    cartItemsEl.classList.toggle('hidden', entries.length === 0);

    cartItemsEl.innerHTML = entries.map(({ item, qty }) => `
      <div class="flex items-center gap-4">
        <img src="${item.imgSrc}" alt="${item.name}" class="w-16 h-16 object-cover shrink-0">
        <div class="flex-1 min-w-0">
          <p class="font-display font-bold text-lg truncate">${item.name}</p>
          <p class="font-mono-label text-[11px] text-inksoft/70">${fmt(item.price)}</p>
        </div>
        <div class="flex items-center gap-3 font-mono-label text-sm">
          <button data-qty="-1" data-id="${item.id}" class="w-6 h-6 flex items-center justify-center border hairline">−</button>
          <span>${qty}</span>
          <button data-qty="1" data-id="${item.id}" class="w-6 h-6 flex items-center justify-center border hairline">+</button>
        </div>
      </div>
    `).join('');

    const totalQty = entries.reduce((s, e) => s + e.qty, 0);
    const totalPrice = entries.reduce((s, e) => s + e.qty * e.item.price, 0);
    cartCountEl.textContent = totalQty;
    cartCountEl.classList.toggle('hidden', totalQty === 0);
    cartCountEl.classList.toggle('flex', totalQty > 0);
    cartTotalEl.textContent = fmt(totalPrice);
  }

  cartItemsEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-qty]');
    if (!btn) return;
    changeQty(Number(btn.dataset.id), Number(btn.dataset.qty));
  });

  function currentDeliveryLabel () {
    const checked = document.querySelector('input[name="delivery"]:checked');
    return checked ? checked.value : 'Retiro en local';
  }

  function buildOrderText () {
    const entries = Array.from(cart.values());
    const delivery = currentDeliveryLabel();
    let msg = `Hola La Vida Es Un Vals! Quisiera hacer el siguiente pedido:\n\n`;
    if (entries.length === 0) {
      msg += `(Aún sin productos seleccionados)\n\n`;
    } else {
      entries.forEach(({ item, qty }) => { msg += `• ${qty}x ${item.name} — ${fmt(item.price * qty)}\n`; });
      const total = entries.reduce((s, e) => s + e.qty * e.item.price, 0);
      msg += `\nTotal: ${fmt(total)}\n\n`;
    }
    msg += `Modalidad: ${delivery}`;
    return msg;
  }

  copyBtn.addEventListener('click', async () => {
    const text = buildOrderText();
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    copyToast.style.opacity = '1';
    setTimeout(() => { copyToast.style.opacity = '0'; }, 2200);
  });

  document.querySelectorAll('input[name="delivery"]').forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('.delivery-label').forEach(l => l.classList.remove('bg-ink', 'text-cream'));
      const label = document.querySelector(`label[for="${r.id}"]`);
      if (r.checked) label.classList.add('bg-ink', 'text-cream');
    });
  });
  document.getElementById('delivery-retiro').checked = true;
  document.querySelector('label[for="delivery-retiro"]').classList.add('bg-ink', 'text-cream');

  function openCart () { cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); }
  function closeCart () { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); }
  document.getElementById('cart-btn').addEventListener('click', openCart);
  document.getElementById('cart-close').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  /* --------------------------------------------------------------
     ESTADO ABIERTO / CERRADO — horario real y completo confirmado
     por Instagram (Lun-Jue 9:30-22:00, Vie 9:30-22:30,
     Sáb 15:00-22:30, Dom 15:00-22:00).
  -------------------------------------------------------------- */
  const HOURS = {
    0: [15 * 60, 22 * 60],        // domingo
    1: [9 * 60 + 30, 22 * 60],    // lunes
    2: [9 * 60 + 30, 22 * 60],
    3: [9 * 60 + 30, 22 * 60],
    4: [9 * 60 + 30, 22 * 60],
    5: [9 * 60 + 30, 22 * 60 + 30], // viernes
    6: [15 * 60, 22 * 60 + 30]     // sábado
  };

  function updateOpenStatus () {
    let day, minutes;
    try {
      const now = new Date();
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Santiago', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(now);
      const map = {}; parts.forEach(p => map[p.type] = p.value);
      const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      day = weekdayMap[map.weekday];
      minutes = parseInt(map.hour) * 60 + parseInt(map.minute);
    } catch (e) {
      const now = new Date(); day = now.getDay(); minutes = now.getHours() * 60 + now.getMinutes();
    }

    const [open, close] = HOURS[day];
    const isOpen = minutes >= open && minutes < close;

    const dot = document.getElementById('status-dot');
    const text = document.getElementById('status-text');
    const line = document.getElementById('status-line');

    if (isOpen) {
      dot.className = 'w-1.5 h-1.5 rounded-full bg-green-600';
      text.textContent = 'Abierto ahora';
      line.className = 'font-mono-label text-[11px] uppercase mt-3 text-green-700';
      line.textContent = 'Abierto ahora';
    } else {
      dot.className = 'w-1.5 h-1.5 rounded-full bg-maroon';
      text.textContent = 'Cerrado ahora';
      line.className = 'font-mono-label text-[11px] uppercase mt-3 text-maroon';
      line.textContent = 'Cerrado en este momento';
    }
  }
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  document.querySelector('.tab-panel.active').querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  renderFilters();
  renderGrid();
  renderCart();
})();
