// Смена языка
let body = document.querySelector('body')
let lang = document.querySelector('.lang');
let langCurrent = document.querySelector('.lang__current');
let langItem = document.querySelectorAll('.lang__item');

lang.addEventListener('click', () => {
	lang.classList.toggle('open')
})

langItem.forEach(item => {
	item.addEventListener('click', (e) => {
		e.stopPropagation()
		langCurrent.innerHTML = e.target.innerText
		lang.classList.remove('open')
	})
})

// Поиск

let iconSearch = document.querySelector('[data-icon-search]')
let formSearch = document.querySelector('[data-form-search]')
let inputSearch = document.querySelector('[data-form-search] input')


iconSearch.addEventListener('click', () => {
	menuItems.forEach(el => el.classList.remove('show'))
	formSearch.classList.toggle('show')
	inputSearch.focus()

})

// Меню 

let menuItems = document.querySelectorAll('.header__tab-link')

menuItems.forEach(item => {
	item.addEventListener('click', (e) => {
		if (e.target.tagName === 'SPAN') showListLinks(e.currentTarget)
		formSearch.classList.remove('show')
	})
})

function showListLinks(elem) {
	if (elem.classList.contains('show')) elem.classList.remove('show')
	else {
		menuItems.forEach(el => el.classList.remove('show'))
		elem.classList.add('show')
	}
}

// Mobile menu

let menuIconOpen = document.querySelector('.menu__icon')
let menuIconClose = document.querySelector('.menu__icon-close')
let MobileMenu = document.querySelector('.mobile-menu')
let bodyMobileMenu = document.querySelector('.mobile-menu__body-paste')
let navMobileMenu = document.querySelector('.mobile-menu__nav')
let mainMenu = document.querySelector('.header__menu-2')
let header2 = document.querySelector('.header-2')
let menu1 = document.querySelector('.header__menu-1')
let menu1_left = document.querySelector('.header__left')
let menu1_right = document.querySelector('.header__right')
let menu1link = document.querySelector('.header__menu-1-link')
let menu1_icons = document.querySelector('.header__icons')
let iconAccount = document.querySelector('.icon-account')
let iconCart = document.querySelector('.icon-cart')
let iconLiked = document.querySelector('.icon-liked')
let headerSearch = document.querySelector('.header__search')

menuIconOpen.addEventListener('click', () => {
	MobileMenu.classList.add('open')
	body.classList.add('lock')
})
menuIconClose.addEventListener('click', () => {
	MobileMenu.classList.remove('open')
	body.classList.remove('lock')
})

function rebuildHeader() {

	let widthWindow = document.body.clientWidth;



	if (widthWindow < 700) {
		navMobileMenu.prepend(lang)
		navMobileMenu.prepend(iconLiked)
		navMobileMenu.prepend(iconAccount)

		menu1_right.append(iconSearch)

		bodyMobileMenu.append(mainMenu)
		bodyMobileMenu.append(menu1)
		bodyMobileMenu.append(menu1link)
	}

	else if (widthWindow >= 700 && widthWindow <= 992) {

		menu1_icons.append(iconLiked)
		menu1_icons.prepend(iconAccount)
		menu1_right.append(lang)

		headerSearch.prepend(iconSearch)

		bodyMobileMenu.append(mainMenu)
		bodyMobileMenu.append(menu1)
		bodyMobileMenu.append(menu1link)

	}

	else if (widthWindow > 992) {
		menu1_right.prepend(lang)
		menu1_right.prepend(menu1_icons)

		headerSearch.prepend(iconSearch)

		header2.prepend(mainMenu)
		menu1_left.prepend(menu1)
		menu1_right.prepend(menu1link)

		MobileMenu.classList.remove('open')
		body.classList.remove('lock')
	}
}

rebuildHeader()
window.addEventListener('resize', rebuildHeader)
