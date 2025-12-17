

function getTab(el) {
    const active = document.querySelector(".tabs .active");
    const visible = document.querySelector(".wrapper_tab-content .content-visible");

    const tabContent = document.getElementById(
        el.getAttribute("href").replace("#", "")
    );

    // Köhnə aktiv class-ları sil
    if (active) active.classList.remove("active");
    if (visible) visible.classList.remove("content-visible");

    // Yeni aktiv class-ları əlavə et
    el.classList.add("active");
    tabContent.classList.add("content-visible");
}

document.addEventListener("click", function (e) {
    if (e.target.matches(".tab-item a")) {
        e.preventDefault();
        getTab(e.target);
    }
});
