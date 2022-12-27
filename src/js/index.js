document.addEventListener("DOMContentLoaded", function() {

    const searchTrigger = document.getElementById("search-trigger"), 
        search = document.querySelector(".header__menu__search"),
        closeTrigger = document.getElementById("close-trigger");

    function toggle(arr) {
        arr.forEach(item => {
            item.classList.toggle("active");
        });
    }
    if(searchTrigger && search && closeTrigger) {
        searchTrigger.addEventListener("click", () => {
            toggle([searchTrigger, search]);
        });
        closeTrigger.addEventListener("click", () => {
            toggle([searchTrigger, search]);
        });
    }
});