////////////   POST CAMPAIGN EXCEL   ////////////////////////
// TODO: Must export Excel file in Microsoft Windows Formatted Text.


///////Variables (PLEASE EDIT TO YOUR NEEDS) ///////
var txtFile = "double.txt"
var Currency = "USD";
////////////////////////////////////////////////////


var fs = require('fs');
var output = fs.readFileSync(txtFile, "utf8").trim().split('\n').map(function(line){ return line.split('\t')});

output[3][7] = output[3][7].trim();

output.splice(0, 3)

function createJson(input){
    var campaigns = [];
    var jsonObj = {}; //Empty JS object to be converted to JSON.

    var CampaignConversion = {};

    for(var k=1; k<input.length; k++){ //Outer loop that loops through number of campaigns
        for(var j = 9; j < 12; j++){ //Deals with Campaign coversion columns
            CampaignConversion[input[0][j].trim()] = input[k][j].trim();
        }
        for(var i=3; i<input[0].length-3; i++){ //loops through columns and creates a JS object.
            jsonObj[input[0][i].trim()] = input[k][i].trim();
        }
        jsonObj.CampaignConversionReportingColumns =  CampaignConversion;// pushes the campaign conversion obj created above into main js obj
        var budget_amount = jsonObj.Budget; //Temporary budget variable
        jsonObj.Budget = {amount: budget_amount, CurrencyCode: Currency}; //re-adds budget variable value with added currency code
        var jsonObj2 = JSON.stringify(jsonObj); //take a JS object in JSON format and converts to JSON.
        campaigns.push(jsonObj2); //Pushed json objects to an array
    }
    return campaigns; //Returns the array holding all the JSON objects.
}

var array_json = createJson(output); //new Variable holding the resulting array with JSON objects inside.

array_json.forEach(function(value){ //Prints out in console each JSON object.

    console.log(value);
});








