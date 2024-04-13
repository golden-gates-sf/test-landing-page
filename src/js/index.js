import Glide from '@glidejs/glide'

const accordionClickItems = document.querySelectorAll(".goal-item__title");
const accordionItems = document.querySelectorAll(".goal-item");

accordionClickItems.forEach((item, ind) =>
  item.addEventListener("click", () => {
    accordionItems[ind].classList.toggle("active")
    accordionItems.forEach((item, i) => {
        if (i != ind) {
            item.classList.remove("active")
        }
    });
  })
);

let glide = null

const toggleGlide = (width) => {
    if (width <= 1250 && glide == null) {
        glide = new Glide('.glide', {
            type: 'carousel',
            focusAt: 'center',
            startAt: 0,
            perView: 1
        })
        glide.mount()
        console.log('mounted')

        return
    }
    
    if (width > 1250 && glide != null) {
        console.log('glide destroyed')
        glide.destroy()
        glide = null
    }
}

toggleGlide(window.innerWidth)

window.onresize = () => {
    toggleGlide(window.innerWidth)
}

new ResizeObserver(() => {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }).observe(document.documentElement);