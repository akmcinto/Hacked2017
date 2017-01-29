/**
 * Created by Jill on 2017-01-28.
 */



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


//not sure where to put this
var sun_information = "<p> <font color='white'>The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma," +
    " with internal convective motion that generates a magnetic field via a dynamo process." +
    " It is by far the most important source of energy for life on Earth. Its diameter is about 109 times that of Earth, " +
    "and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System." +
    " About three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), " +
    "with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron." +
    "The Sun is a G-type main-sequence star (G2V) based on its spectral class, and is informally referred to as a yellow dwarf. " +
    "It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. " +
    "Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. " +
    "The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. " +
    "It is thought that almost all stars form by this process.</p> <p>More information can be found " +
    "<a href='https://en.wikipedia.org/wiki/Sun'>here.</a></p>";

var mercury_information = "<p> <font color='white'>Mercury is the smallest and innermost planet in the Solar System. " +
    "Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. " +
    "It is named after the Roman deity Mercury, the messenger to the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, " +
    "so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. " +
    "Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth. " +
    "Seen from Earth, this cycle of phases reoccurs approximately every 116 days, the so-called synodic period. " +
    "Although Mercury can appear as a bright star-like object when viewed from Earth, its proximity to the Sun often makes it more difficult to see than Venus. " +
    "Mercury is tidally or gravitationally locked with the Sun in a 3:2 resonance," +
    " and rotates in a way that is unique in the Solar System. As seen relative to the fixed stars, " +
    "it rotates on its axis exactly three times for every two revolutions it makes around the Sun. As seen from the Sun, " +
    "in a frame of reference that rotates with the orbital motion, it appears to rotate only once every two Mercurian years. " +
    "An observer on Mercury would therefore see only one day every two years.</p><p>More information can be found <a href='https://en.wikipedia.org/wiki/Mercury_(planet)'>" +
    "here.</a></p>";

var earth_information = "<p> <font color ='white'>Earth, otherwise known as the world, is the third planet from the Sun and " +
    "the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets. " +
    "According to radiometric dating and other sources of evidence, Earth formed about 4.54 billion years ago." +
    " Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. " +
    "During one orbit around the Sun, Earth rotates about its axis over 365 times, thus an Earth year is about 365.26 days long." +
    " Earth's axis of rotation is tilted, producing seasonal variations on the planet's surface." +
    " The gravitational interaction between the Earth and Moon causes ocean tides, stabilizes the Earth's orientation on its axis," +
    " and gradually slows its rotation. Earth's lithosphere is divided into several rigid tectonic plates that migrate across the" +
    " surface over periods of many millions of years. About 71% of Earth's surface is covered with water, mostly by its oceans." +
    " The remaining 29% is land consisting of continents and islands that together have many lakes," +
    " rivers and other sources of water that contribute to the hydrosphere. The majority of Earth's polar regions are covered in ice," +
    " including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth's interior remains active with a solid iron inner core," +
    " a liquid outer core that generates the Earth's magnetic field, and a convecting mantle that drives plate tectonics.</p>" +
    "More information can be found <a href='https://en.wikipedia.org/wiki/Earth'>here.</a></p>";

var venus_information = "<p> <font color='white'>Venus is the second planet from the Sun, orbiting it every 224.7 Earth days." +
    " It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. " +
    "It has no natural satellite. It is named after the Roman goddess of love and beauty. " +
    "It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6, bright enough to cast shadows." +
    " Because Venus orbits within Earth's orbit it is an inferior planet and never appears to venture far from the Sun;" +
    " its maximum angular distance from the Sun (elongation) is 47.8°. Venus is a terrestrial planet and is sometimes called " +
    "Earth's \"sister planet\" because of their similar size, mass, proximity to the Sun, and bulk composition. " +
    "It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, " +
    "consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth, " +
    "or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far the hottest planet in the Solar System, " +
    "with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. " +
    "Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. " +
    "It may have had water oceans in the past, but these would have vaporized as the temperature rose due to a runaway greenhouse effect.</p>" +
    "<p>More information can be found <a href='https://en.wikipedia.org/wiki/Venus'>here.</a></p></p>";

var mars_information = "<p><font color='white'>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, " +
    "after Mercury. Named after the Roman god of war, it is often referred to as the \"Red Planet\"" +
    " because the iron oxide prevalent on its surface gives it a reddish appearance." +
    " Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys," +
    " deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, " +
    "as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System," +
    " and of Valles Marineris, one of the largest canyons in the Solar System. " +
    "The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. " +
    "Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids," +
    " similar to 5261 Eureka, a Mars trojan.</p> <p>More information can be found <a href='https://en.wikipedia.org/wiki/Mars'>here.</a></p>";

var jupitar_information = "<p><font color='white'>Jupiter is the fifth planet from the Sun and the largest in the Solar System. " +
    "It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. " +
    "Jupiter is a gas giant, along with Saturn, with the other two giant planets, Uranus and Neptune, being ice giants. " +
    "Jupiter was known to astronomers of ancient times. The Romans named it after their god Jupiter." +
    " When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows," +
    " and making it on average the third-brightest object in the night sky after the Moon and Venus. " +
    "Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a" +
    " tenth of the number of molecules. It may also have a rocky core of heavier elements," +
    " but like the other giant planets, Jupiter lacks a well-defined solid surface. " +
    "Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator)." +
    " The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and" +
    " storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to " +
    "have existed since at least the 17th century when it was first seen by telescope. " +
    "Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere.</p>" +
    "<p>More information can be found <a href='https://en.wikipedia.org/wiki/Jupiter'>here.</a></p>";

var saturn_information = "<p><font color='white'>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. " +
    "It is a gas giant with an average radius about nine times that of Earth." +
    " Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive." +
    " Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle. " +
    "Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). " +
    "This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, " +
    "and finally outside the Frenkel line a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere." +
    " Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's," +
    " but has a magnetic moment 580 times that of Earth due to Saturn's larger size.</p> <p>More information can be found " +
    "<a href='https://en.wikipedia.org/wiki/Saturn'>here.</a></p>";

var uranus_information = "<p><font color='white'>Uranus is the seventh planet from the Sun. " +
    "It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. " +
    "Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the " +
    "larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as \"ice giants\" to" +
    " distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of " +
    "hydrogen and helium, but it contains more \"ices\" such as water, ammonia, and methane, along with traces of other hydrocarbons." +
    " It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, " +
    "layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds." +
    " The interior of Uranus is mainly composed of ices and rock.</p><p>More information can be found " +
    "<a href='https://en.wikipedia.org/wiki/Uranus'>here.</a></p>";

var neptune_information = "<p><font color='white'>Neptune is the eighth and farthest known planet from the Sun in the Solar System. " +
    "In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. " +
    "Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and " +
    "slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km)." +
    " It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident. " +
    "Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. " +
    "Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by " +
    "an unknown planet. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the" +
    " position predicted by Urbain Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the" +
    " planet's remaining known 14 moons were located telescopically until the 20th century. The planet's distance from Earth gives it a " +
    "very small apparent size, making it challenging to study with Earth-based telescopes.</p>" +
    "<p>More information can be found <a href='https://en.wikipedia.org/wiki/Neptune'>here.</a></p>";

var pluto_information = "<p><font color='white'>Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, " +
    "a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered. " +
    "Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun. " +
    "After 1992, its planethood was questioned following the discovery of several objects of similar size in the Kuiper belt. " +
    "In 2005, Eris, which is 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to" +
    " define the term \"planet\" formally. <b>That definition excluded Pluto and reclassified it as a dwarf planet.</b> " +
    "Pluto is the largest and second-most-massive known dwarf planet in the Solar System and the ninth-largest and " +
    "tenth-most-massive known object directly orbiting the Sun. It is the largest known trans-Neptunian object by volume but " +
    "is less massive than Eris, a dwarf planet in the scattered disc. Like other Kuiper belt objects, Pluto is primarily made of ice and rock" +
    " and is relatively small—about one-sixth the mass of the Moon and one-third its volume. " +
    "It has a moderately eccentric and inclined orbit during which it ranges from 30 to 49 astronomical units or AU " +
    "(4.4–7.4 billion km) from the Sun. This means that Pluto periodically comes closer to the Sun than Neptune, but a " +
    "stable orbital resonance with Neptune prevents them from colliding. Light from the Sun takes about 5.5 hours to reach Pluto at its average distance" +
    " (39.5 AU).</p> <p>More information can be found <a href='https://en.wikipedia.org/wiki/Pluto'>here.</a></p>";