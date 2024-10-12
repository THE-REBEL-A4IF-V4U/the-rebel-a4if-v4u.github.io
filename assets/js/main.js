/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });
        target.classList.add('filters__active');

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active');
        });
        tab.classList.add('filter-tab-active');
    });
});
/*===============  search ===============*/




/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId);

   toggle.addEventListener('click', () => {
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu');
       // Add show-icon to show and hide menu icon
       toggle.classList.toggle('show-icon');
   });
}

showMenu('nav-toggle', 'nav-menu');

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item');

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button');

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown');
        
        // 5. Call the toggleItem function
        toggleItem(item);

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
        }
    });
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container');

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style');
        });

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown');
        });
    }
}

addEventListener('resize', removeStyle);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, {delay: 500});
sr.reveal(`.profile__profession`, {delay: 600});
sr.reveal(`.profile__social`, {delay: 700});
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700});
sr.reveal(`.profile__buttons`, {delay: 800});
sr.reveal(`.filters__content`, {delay: 900});
sr.reveal(`.filters`, {delay: 1000});
