const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
}

const closeAllDropdowns = () => {
    document.querySelectorAll('.dropdown-container.open').forEach(openDropdown => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
}

document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', e => {
        e.preventDefault();
        const dropdown = e.target.closest('.dropdown-container');
        const menu = dropdown.querySelector('.dropdown-menu');
        const isOpen = dropdown.classList.contains("open");
        closeAllDropdowns();
        toggleDropdown(dropdown, menu, !isOpen);
    });
});

let originalNavbarWidth = null;

document.querySelectorAll('.sidebar-toggle, .sidebar-menu-button').forEach(button => {
    button.addEventListener('click', () => {
        const navbar = document.querySelector('.user-logo');
        const sidebar = document.querySelector('.sidebar');
        
        if (originalNavbarWidth === null) {
            originalNavbarWidth = navbar.style.width || getComputedStyle(navbar).width;
        }
        
        sidebar.classList.toggle("collapsed");
        
        if (sidebar.classList.contains("collapsed")) {
            navbar.style.width = '91%';
        } else {
            navbar.style.width = originalNavbarWidth;
        }
        
        closeAllDropdowns();
    });
});

if (window.innerWidth <= 1020) {
    document.querySelector('.sidebar').classList.add("collapsed");
}