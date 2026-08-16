const pfp = document.querySelector('.pfp')

let iscooldown = false;

pfp.addEventListener('mouseenter', () => {
    if (iscooldown) return;

    pfp.classList.add('animate');
});

pfp.addEventListener('animationend', () => {
    pfp.classList.remove('animate');

    iscooldown = true;

    setTimeout(() => {
        iscooldown = false;
    }, 500);
});