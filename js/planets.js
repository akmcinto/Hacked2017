/**
 * Created by Jill on 2017-01-28.
 */

//not sure where to put this
var sun_information = "<p> <font color='white'>This is the sun information! </p>";
var mercury_information = "<p> <font color='white'>This is mercury information!</p>";
var earth_information = "<p> <font color ='white'>This is earth information!</p>";
var venus_information = "<p> <font color='white'>This is venus!</p>";
var mars_information = "<p><font color='white'>Mars!</p>";
var jupitar_information = "<p><font color='white'>Jupitar!</p>";
var saturn_information = "<p><font color='white'>Saturn!</p>";
var uranus_information = "<p><font color='white'>Uranus!</p>";
var neptune_information = "<p><font color='white'>Neptune!</p>";
var pluto_information = "<p><font color='white'>Pluto!</p>";

$(document).ready(function() {
    $("#sun").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = sun_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#mercury").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = mercury_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#earth").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = earth_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#venus").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = venus_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#mars").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = mars_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#jupitar").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = jupitar_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#saturn").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = saturn_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#uranus").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = uranus_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#neptune").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = neptune_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

    $("#pluto").click(function () {
        var textBox = document.getElementById("textBox");
        textBox.innerHTML = pluto_information;
        $("#textBox").fadeIn("slow", function () {
            // Animation complete
            console.log("Did it!");
        });
    });

});
