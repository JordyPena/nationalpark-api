"use strict";

//api key

const apiKey = "MfwQqFxPzYw2yEtJ1DLGoJkJ0HrFXgHFaFuckoqO";
const searchURL = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE";


$(function() { 
    $("#submit").on("click", event => {
        event.preventDefault();
        let userLimit = $("#resultAmounts").val();
        let userInput = $("#userRequest").val();
        console.log(userInput);

        fetch(`https://developer.nps.gov/api/v1/parks?limit=${userLimit}&${userInput}=acad&api_key=MfwQqFxPzYw2yEtJ1DLGoJkJ0HrFXgHFaFuckoqO`)
.then(response => response.json())
.then(responseJson => { 
    for (let i = 0; i < responseJson.data.length; i++) {
        let parkName = responseJson.data[i].name
        let description = responseJson.data[i].description
        let parkUrl = responseJson.data[i].url
        $("#response").append(`
            <p>${parkName}</p>
            <p>${description}</p>
            <p>
                <a href="${parkUrl}">${parkUrl}</a>
            </p>
          
        `)
        
    }
    console.log(responseJson)

      })
    })

})
