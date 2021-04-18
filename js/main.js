(() => {
    const dropDown = document.querySelector('.drop-down');
    dropDown.addEventListener('click', () => {
        console.log("gd");
        const dropList = document.querySelector('.drop-down .header-nav');
        dropList.classList.toggle('hide');
    });
})();