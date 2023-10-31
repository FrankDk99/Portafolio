// Función para mostrar el menú en pantallas más anchas
function showMenuOnLargeScreens() {
    if ($(window).width() >= 480) {
        $('header nav').show();
    } else {
        $('header nav').hide();
    }
}

// Ejecutar la función al cargar la página
$(document).ready(function() {
    showMenuOnLargeScreens();
});

// Ejecutar la función en eventos de redimensionamiento de la ventana
$(window).resize(function() {
    showMenuOnLargeScreens();
});

// Manejar el clic en el ícono del menú
$('.menu-icon').click(function() {
    $('header nav').slideToggle();
});


// Carga dinamicamente las tecnologias en la section de tecnologia

const tecnologias = [
    { nombre: 'Java', imgSrc: 'assets/img/java.svg' },
    { nombre: 'Python', imgSrc: 'assets/img/python.svg' },
    { nombre: 'SpringBoot', imgSrc: 'assets/img/spring.svg' },
    { nombre: 'MySQL', imgSrc: 'assets/img/mysql.svg' },
    { nombre: 'JavaScript', imgSrc: 'assets/img/javascript.svg' },
    { nombre: 'Typescript', imgSrc: 'assets/img/typescript.svg' },
    { nombre: 'Angular', imgSrc: 'assets/img/angular.svg' },
    { nombre: 'Django', imgSrc: 'assets/img/django.svg' },
    { nombre: 'Github', imgSrc: 'assets/img/github.png'}
  ];
  
  // Obtener el contenedor de tecnologías
  const contenedorTecnologias = document.getElementById('tecnologias-container');
  
  // Recorrer el array de tecnologías y crear elementos para cada una
  tecnologias.forEach(tecnologia => {
    const tecnologiaDiv = document.createElement('div');
    tecnologiaDiv.classList.add('tecnologia');
  
    const h4 = document.createElement('h4');
    h4.textContent = tecnologia.nombre;
  
    const img = document.createElement('img');
    img.src = tecnologia.imgSrc;
    img.alt = tecnologia.nombre;
    img.title = tecnologia.nombre;
  
    tecnologiaDiv.appendChild(h4);
    tecnologiaDiv.appendChild(img);
  
    contenedorTecnologias.appendChild(tecnologiaDiv);
  });