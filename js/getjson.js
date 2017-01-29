var plasmaurl = 'http://services.swpc.noaa.gov/products/solar-wind/plasma-5-minute.json';
var alertsurl = 'http://services.swpc.noaa.gov/products/alerts.json';
var auroraanimationurl_north = 'http://services.swpc.noaa.gov/experimental/products/animations/auroral-forecast-north.json';
var solarforecasturl = 'http://services.swpc.noaa.gov/text/3-day-forecast.txt';

$.getJSON(alertsurl, function(data) {
    $.each(data, function(index, element) {

        var datas = JSON.parse(JSON.stringify(element))["message"].split('\n\r');
        var idname = "alert" + index;
        // http://stackoverflow.com/questions/11905276/using-variables-in-place-of-id-names-in-jquery
        $('#alerts').append("<div id='"+idname+"' class='content'></div>");
        for (var d in datas)
        {
            if (d == 0) {
                $('#' + idname).append($('<p>', {
                        text: datas[d]
                    }
                ))
            } else if (d == 1) {
                $('#' + idname).append($('<div class="title">', {
                        text: datas[d]
                    }
                ))
            } else {
                $('#' + idname).append($('<p>', {
                        text: datas[d]
                    }
                ))
            }
        }
        if (index == 2) {
            return false;
        }
    });
});

// http://stackoverflow.com/questions/8951810/how-to-parse-json-data-with-jquery-javascript
$.getJSON(plasmaurl, function(data) {
    $.each(data, function(index, element) {
        if (index == 2) {
            var datas = element.toString().split('');
            $('#solarWindInfo1').html($('<p>', {
                    text: "Density: " + datas[1] + " /cm^3"
                }
            )).append($('<p>', {
                    text: "Speed: " + datas[2] + " km/s"
                }
            )).append($('<p>', {
                    text: "Temperature: " + datas[3] + " K"
                }
            ))
        };
    });
});

// http://stackoverflow.com/questions/10112509/reading-a-text-file-with-jquery
$.get(solarforecasturl, function(data) {
    var startB = data.search('B. NOAA Solar Radiation Activity Observation and Forecast')
    var startC = data.search('C. NOAA Radio Blackout Activity and Forecast');

    var dataB = data.substr(startB + 3, startC - startB);
    var datasB = dataB.split('\n\n');

    $('#solarForecastTitle1').text(datasB[0]);

    $('#solarWindInfo2').append($('<p>', {
            text: datasB[1]
        }
    ));
    $('#solarWindInfo2').append($('<p>', {
            text: datasB[2]
        }
    ));

    var sOut = '<table style="padding:10px; width:90%">';
    sOut += '<thead><tr><td> </td><td>' + datasB[3].substr(14, 6) + '</td><td>' + datasB[3].substr(22, 6) + '</td><td>' + datasB[3].substr(30, 6) + '</td></tr></thead>';
    sOut += '<tbody><tr><td>' + datasB[3].substr(37, 13) + '</td><td>' + datasB[3].substr(52, 6) + '</td><td>' + datasB[3].substr(60, 6) + '</td><td>' + datasB[3].substr(68, 6) + '</td></tr></tbody></table>';
    $('#solarWindInfo2').append(sOut);

    // for (d in datasB) {
    //     $('#solarWindInfo2').append($('<p>', {
    //             text: datasB[d]
    //         }
    //     ));
    // }
}, 'text');

// // http://stackoverflow.com/questions/9669805/how-do-i-animate-though-a-png-sequence-using-jquery-either-by-scrolling-or-trig
// $.getJSON(auroraanimationurl_north, function(data) {
//     $.each(data, function(index, element) {
//         var datas = JSON.parse(JSON.stringify(element))["url"];
//         setInterval(function () {
//             $('#aurora-animation').attr('src', 'http://services.swpc.noaa.gov/experimental' + datas);
//         }, 10);
//     });
// });

$('#solarWindInfo2').html("asdsaddsadsad");
