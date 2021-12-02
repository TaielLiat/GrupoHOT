/*===== Gallery =====*/
const galleryCategory = document.querySelectorAll('.gallery__category');
console.log(galleryCategory);

galleryCategory.forEach(category => category.addEventListener('click', linkActive));

function linkActive() {
    galleryCategory.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

/*===== Mixitup =====*/
var mixer = mixitup('.gallery__products');