var invocation = new XMLHttpRequest();
var url = 'http://services.swpc.noaa.gov/products/solar-wind/plasma-5-minute.json';

// $('#index').on('pageShow', function(e) {
//     if(invocation) {
//         invocation.open('GET', url, true);
//         invocation.onreadystatechange = handler;
//         invocation.send();
//     }
// }

// http://stackoverflow.com/questions/8951810/how-to-parse-json-data-with-jquery-javascript
$.getJSON(url, function(data) {
    $.each(data, function(index, element) {
        if (index == 2) {
            var datas = element.toString().split(',');
            $('#dumpjson').append($('<p>', {
                    text: datas[1]
                }
            ))
        };
    });
});