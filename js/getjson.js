var plasmaurl = 'http://services.swpc.noaa.gov/products/solar-wind/plasma-5-minute.json';
var alertsurl = 'http://services.swpc.noaa.gov/products/alerts.json';

$.getJSON(alertsurl, function(data) {
    $.each(data, function(index, element) {
        // var datas = element.toString().split(',');
        $('#alerts').append($('<p>', {
                text: JSON.stringify(element)
            }
        ))
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