$(document).ready(function () {
    $("nav ul li a").on("click", function () {
        alert("You clicked a link to " + $(this).text() + "!");
    });
});
