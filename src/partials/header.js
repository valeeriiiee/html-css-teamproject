var isNavExpanded = false;

function toggleMenu() {
    isNavExpanded = !isNavExpanded;

    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var closeIcon = document.querySelector('.close-icon');
    var smallScreenNavListWrapper = document.querySelector('.small-screen-nav-list-wrapper');

    if (isNavExpanded) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        smallScreenNavListWrapper.style.display = 'block';
        smallScreenNavListWrapper.classList.add('slide-from-right');
        smallScreenNavListWrapper.classList.remove('slide-from-left');
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        smallScreenNavListWrapper.classList.remove('slide-from-right');
        smallScreenNavListWrapper.classList.add('slide-from-left');
    }
};