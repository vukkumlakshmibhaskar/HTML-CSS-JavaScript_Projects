function changeImage(element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = element.src;
    mainImage.alt = element.alt;
}
