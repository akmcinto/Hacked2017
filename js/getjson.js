var plasmaurl = 'http://services.swpc.noaa.gov/products/solar-wind/plasma-5-minute.json';
var alertsurl = 'http://services.swpc.noaa.gov/products/alerts.json';

$.getJSON(alertsurl, function(data) {
    $.each(data, function(index, element) {
        var datas = JSON.parse(JSON.stringify(element))["message"].split('\n\r');
        for (var d in datas) {
            if (d == 1) {
                $('#alerts').append($('<h2>', {
                        text: datas[d]
                    }
                ))
            } else if (d == 2) {
                $('#alerts').append($('<h1>', {
                        text: datas[d]
                    }
                ))
            } else {
                $('#alerts').append($('<p>', {
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
            var datas = element.toString().split(',');
            $('#plasmaDensity').append($('<p>', {
                    text: "Density: " + datas[1]
                }
            ))
            $('#plasmaSpeed').append($('<p>', {
                    text: "Speed: " + datas[2]
                }
            ))
            $('#plasmaTemperature').append($('<p>', {
                    text: "Temperature: " + datas[3]
                }
            ))
        };
    });
});