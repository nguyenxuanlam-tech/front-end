//truy vấn class
var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__footer button')
var iconClose = document.querySelector('.modal__header i')

//function sự kiện
function toggleModal(e){
    console.log(e.target);
    modal.classList.toggle('hide')
}

//add sự kiện
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})