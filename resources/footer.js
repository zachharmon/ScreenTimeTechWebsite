
document.addEventListener("DOMContentLoaded", function() {

    const footerHTML = `
    <p>
        ScreenTime Technologies LLC is a U.S. based company that specializes in the development of software and hardware solutions for the modern world.
        <br>We offer a wide range of services, including web development, mobile application development, and custom software solutions as well as an ever-growing
        catalog of online tools and resources to help you complete your projects.<br>We are a small company with a big heart, and we are dedicated to providing
        the best possible service to our customers. We are always looking for new ways to improve our products and services, so if you have any suggestions
        or feedback, please feel free to contact us.
    </p>

    <div id="footer-quick-links">
        <a href="../Home/">Home</a>
        <a href="../About/">About</a>
        <a href="../Contact/">Contact</a>
        <a href="../Privacy/">Privacy Policy</a>
    </div>

    <p>
        <strong>
            ScreenTime Technologies LLC &copy; ${(new Date()).getFullYear()}</script>
        </strong>
        
    </p>
    `

    const footer = document.querySelector("footer#main-footer");

    footer.innerHTML = footerHTML;

});