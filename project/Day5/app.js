var btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener( 'click', function(){
    this.parentElement.classList.toggle('open')  
    console.log(this.previousElementSibling.focus());
    this.previousElementSibling.focus();
})