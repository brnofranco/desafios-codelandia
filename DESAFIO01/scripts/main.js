const changeLikeHeart = (id) => {
    const heart = document.querySelectorAll('.fa-heart')[id];
    if (heart.classList.contains('far')) {
        change = heart.classList.remove('far');
        change = heart.classList.add('fas');
    } else if (heart.classList.contains('fas')) {
        change = heart.classList.remove('fas');
        change = heart.classList.add('far');
    }
    return change;
}