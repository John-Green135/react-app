

    export const createTransition = (opacity, element, fromTop = 100)=>{
        if(fromTop){
            window.scrollTo({
                top: fromTop,
                left: 0,
                behavior: 'smooth'
              })
        }

        let div = document.querySelector(`.${element}`)
        div.style.transition = "500ms"
        div.style.opacity = opacity
    }