var plasmaurl = 'http://services.swpc.noaa.gov/products/solar-wind/plasma-5-minute.json';
var alertsurl = 'http://services.swpc.noaa.gov/products/alerts.json';

$.getJSON(alertsurl, function(data) {
    $.each(data, function(index, element) {

        var datas = JSON.parse(JSON.stringify(element))["message"].split('\n\r');
        var idname = "alerts" + index;
        // http://stackoverflow.com/questions/11905276/using-variables-in-place-of-id-names-in-jquery
        $('#alerts-content').append("<div id='"+idname+"' class='content'></div>");
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
            var datas = element.toString().split(',');
            $('#solarWindInfo1').html($('<p>', {
                    text: "Density: " + datas[1]
                }
            )).append($('<p>', {
                    text: "Speed: " + datas[2]
                }
            )).append($('<p>', {
                    text: "Temperature: " + datas[3]
                }
            ))
        };
    });

    $(".loader").hide();
    $('#solarWindInfo1').show();

});



$('#solarWindInfo2').html("asdsaddsadsad");
