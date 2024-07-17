window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10)
        top.classList.add("top-active");
    else top.classList.remove("top-active");
});
