let cardIconSelect = document.querySelectorAll('.card__select')


cardIconSelect.forEach(elem => {
	elem.addEventListener('click', (e) => {
		e.stopPropagation()
		elem.classList.toggle('selected')
	})

})