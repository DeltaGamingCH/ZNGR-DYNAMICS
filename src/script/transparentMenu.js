document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.nav-header-button');
    
    menuButton.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
            nav.classList.toggle('expanded');
    })

    const mouseMove = e => {
        const { currentTarget: target } = e;
        
        const rect = target.getBoundingClientRect(), 
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

    target.style.setProperty("--mouseX", `${x}px`);
    target.style.setProperty("--mouseY", `${y}px`);
    }

    for(const navContainerItem of document.querySelectorAll('.nav-container-item')) {
        navContainerItem.onmousemove = e => mouseMove(e);
    }
});