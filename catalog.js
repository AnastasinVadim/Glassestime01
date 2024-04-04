var catalogButton = document.querySelector('.catalog-button');
var catalogMenu = document.querySelector('.catalog-menu');
var isMenuOpen = false;

catalogButton.addEventListener('click', function() {
    if (!isMenuOpen) {
        catalogMenu.style.display = 'block';
        isMenuOpen = true;
    } else {
        catalogMenu.style.display = 'none';
        isMenuOpen = false;
    }
});

// Добавьте следующий код, чтобы меню закрывалось при клике вне меню
document.addEventListener('click', function(event) {
    if (!catalogButton.contains(event.target) && !catalogMenu.contains(event.target)) {
        catalogMenu.style.display = 'none';
        isMenuOpen = false;
    }
});
