var itemOver = document.querySelectorAll(".item");

itemOver.forEach(
    (i) => {
        i.addEventListener('mouseover', function(){
            i.classList.add("active")
        })
        i.addEventListener('mouseleave', function(){
            i.classList.remove("active")
        })
    }
);