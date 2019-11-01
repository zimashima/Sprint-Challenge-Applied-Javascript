// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response =>{
        Object.values(response.data)[0].forEach(topic=>{
            document.querySelector('.topics').appendChild(NewTab(topic))
    })
})

function NewTab(topic){

    const aTab = document.createElement('div')
    aTab.textContent = topic
    aTab.classList.add('tab')

    return aTab
}



