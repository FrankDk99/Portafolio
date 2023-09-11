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
