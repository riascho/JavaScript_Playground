

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');
    header.classList.toggle('sticky',window.scrollY > 0);
    logo.classList.toggle('shift',window.scrollY > 0);
});
