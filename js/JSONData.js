var fs = require('fs');

function JSONData(obj) {
    if (obj) {
        this.data = obj;
    } else {
        this.data = {};
    }
}

JSONData.prototype.setDataFromJSONString = function(JSONString) {
    this.data = JSON.parse(JSONString);
    return this;
};

JSONData.prototype.setDataFromJSONFile = function(JSONFilePath) {
    this.data = JSON.parse(fs.readFileSync(JSONFilePath));
    return this;
};

JSONData.prototype.getData = function() {
    return this.data;
};

JSONData.prototype.convertArraysToObjects = function() {

};

JSONData.prototype.toString = function() {
    return JSON.stringify(this.data);
};

JSONData.prototype.getMoonData = function() {
    // Link to data: http://api.usno.navy.mil/moon/phase?date=today&nump=4
    return this.data["phasedata"];
};

JSONData.prototype.getSolarEclipseData = function() {
    // Link to data: http://api.usno.navy.mil/eclipses/solar?year=YEAR
    var eclipseData = "";
    this.data["eclipses_in_year"].forEach(function(eclipseDataObj) {
        eclipseData += eclipseDataObj["event"] + '\n';
    });
    return eclipseData;
};

var data = new JSONData().setDataFromJSONFile("../data/plasma-5-minute.json");
console.log(data.getMoonData());

module.export = JSONData;

// http://api.usno.navy.mil/moon/phase?date=today&nump=4