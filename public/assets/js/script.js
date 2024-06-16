const openSearchbar = document.querySelector('#openSearchbar')
const modalOpen =  document.querySelector('#modalOpen')

openSearchbar.addEventListener('click', () => {
    modalOpen.classList.toggle('hide')
})

document.addEventListener('click', e => {
    if(!openSearchbar.contains(e.target) && e.target !== openSearchbar){
        modalOpen.classList.add('hide')
    }
})

const openPopUpAddFavorite = document.querySelectorAll('#btnAddFav')
const modalAddFavorite = document.querySelector('#modalAddFavorite')

openPopUpAddFavorite.forEach(openPopUpAddFavorite => {
    openPopUpAddFavorite.addEventListener('click', () => {
        modalAddFavorite.classList.toggle('hide')
    })
})

document.addEventListener('click', e => {
    if (!modalAddFavorite.contains(e.target) && !Array.from(openPopUpAddFavorite).some(btn => btn.contains(e.target))) {
        modalAddFavorite.classList.add('hide');
        modalAddFavorite.classList.add('active')
    }
})

function showModal() {
    
    const modalLoginFailed = document.querySelector('#loginFailedModal');
    modalLoginFailed.classList.remove('hide');

    document.addEventListener('click', e => {
        if(!modalLoginFailed.contains(e.target) ){
            modalLoginFailed.classList.add('hide')
        }
    })
}