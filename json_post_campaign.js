////////////   POST CAMPAIGN EXCEL   ////////////////////////
// TODO: Must export Excel file in Microsoft Windows Formatted Text.


///////Variables (PLEASE EDIT TO YOUR NEEDS) ///////
var txtFile = "windows_formatted.txt"
var Currency = "USD";
////////////////////////////////////////////////////


var fs = require('fs');
var output = fs.readFileSync(txtFile, "utf8").trim().split('\n').map(function(line){ return line.split('\t')})

output[3][7] = output[3][7].trim();

output.splice(0, 3)

function createJson(input){
    var jsonObj = {}; //Empty JS object.

    var CampaignConversion = {};

    for(var j = 9; j < 12; j++){
        CampaignConversion[input[0][j]] = input[1][j];
    }

    //loop to fill js object with keys and values in JSON format.
    for(var i=3; i<input[0].length-3; i++){
        jsonObj[input[0][i]] = input[1][i];
    }
    jsonObj.CampaignConversionReportingColumns =  CampaignConversion;
    var budget_amount = jsonObj.Budget; //Temporary budget variable
    jsonObj.Budget = {amount: budget_amount, CurrencyCode: Currency}; //re-adds budget variable value with added currency code

    var jsonObj2 = JSON.stringify(jsonObj); //take a JS object in JSON format and converts to JSON.
    return jsonObj2; //Prints out in Terminal/Windows Command Prompt, the JSON result.
}


var HARRO = createJson(output);

console.log(HARRO)








