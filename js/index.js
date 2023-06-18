let monsterArray = []
const monsterContainer = document.getElementById('monster-container')
const form = document.getElementById('form')
fetch('http://localhost:3000/monsters')
.then((res) => res.json())
.then((res) => {
    monsterArray = data.slice(0,50).map((info) => {
        let monsterObject = {
            Name: info.name,
            Age: info.age,
            Description: info.description
        }
        return monsterObject
    })
    appendData(monsterArray)
}
//load first 50 monsters to page on load
     //create globally scoped array
     //GET fetch data and parse to json
     //add first 50 to array
     //append array to the container
//create a form with fields and submit
     //write HTML
      //form, label, text, submit
      //give ids
     //confirm defer
     //
//add an event listener to the submit to
//add the submitted details to the end of
//the list on load
     //create function
     //add event listener to submit
     //append the new submit to container
     //POST the data to the api
