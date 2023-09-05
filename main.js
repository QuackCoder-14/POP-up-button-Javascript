

document.querySelector('.open').onclick = () => {
    document.querySelector('.container').classList.add('active');
}
document.querySelector('.close').onclick = () => {
    document.querySelector('.container').classList.remove('active');
}