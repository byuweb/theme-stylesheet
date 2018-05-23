const expandyBits = [
    '.byu-header__user-info',
    '.byu-header__actions',
    '.byu-header__menu',
];

const collapsyBits = [
    '.byu-header__search',
    '.byu-header__search-input',
    '.byu-header__search-button',
];

const header = document.querySelector('.byu-header');
document.querySelector('.byu-header__mobile-menu-button')
    .addEventListener('click', () => {
        const isExpanded = header.classList.contains('byu-header--mobile-expanded');

        console.log('isExpanded', isExpanded);

        const toExpand = isExpanded ? collapsyBits : expandyBits;
        const toCollapse = isExpanded ? expandyBits : collapsyBits;

        // for (const selector of toExpand) {
        //     const el = document.querySelector(selector)
        // }

        toExpand.map(it => document.querySelector(it))
            .filter(it => !!it)
            .forEach(it => {
                console.log('expanding', it, it.scrollHeight);
                it.style.maxHeight = it.scrollHeight + 'px';
                console.log('it.style.maxHeight', it.style.maxHeight);
            });

        toCollapse.map(it => document.querySelector(it))
            .filter(it => !!it)
            .forEach(it => {
                console.log('collapsing', it);
                it.style.maxHeight = null;
                console.log('it.style.maxHeight', it.style.maxHeight);
            });

        header.classList.toggle('byu-header--mobile-expanded')
    });
