
document.addEventListener("DOMContentLoaded", function() {

    const routes = [
        { path: "../Home/", name: "Home" },
        { path: "../Products/", name: "Products" },
        { path: "../Tools/", name: "Tools" },
        { path: "../About/", name: "About" },
        { path: "../Account/", name: "Account" },
    ]

    const headerNavLarge = document.querySelector("header#main-header nav#header-nav-large");
    const headerNavSmall = document.querySelector("header#main-header nav#header-nav-dropdown #header-nav-dropdown-area");

    var headerNavContent = ""

    routes.forEach(route => {
        headerNavContent += `<a href="${route.path}">${route.name}</a>`
    });

    headerNavLarge.innerHTML = headerNavContent;
    headerNavSmall.innerHTML = headerNavContent;
});