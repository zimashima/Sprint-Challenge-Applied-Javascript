// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response => {
        cardCreator(response.data)
    })

function cardCreator(apiData){
    
    //definition and content


    const objects = Object.values(apiData)[0]
    const newsEntries = Object.entries(objects)

    for (const entry of newsEntries){
        const newsEntry = Object.values(entry)[1]
        for (const news of newsEntry){

            const aCard = document.createElement('div')
            aCard.classList.add('card')

            const theHeadline = document.createElement('div')
            theHeadline.classList.add('headline')
            const theAuthor = document.createElement('div')
            theAuthor.classList.add('author')
            const theImgBox = document.createElement('div')
            theImgBox.classList.add('img-container')
            const theImg = document.createElement('img')
            const authorsName = document.createElement('span')

            theHeadline.textContent = news.headline
            theImg.src = news.authorPhoto
            authorsName.textContent = news.authorName

            aCard.appendChild(theHeadline)
            aCard.appendChild(theAuthor)
            theAuthor.appendChild(theImgBox)
            theImgBox.appendChild(theImg)
            theAuthor.appendChild(authorsName)

            document.querySelector('.cards-container').appendChild(aCard)
        }
    }
    
}


// const objects = Object.values(dummyData)[0]
// const entries = Object.entries(objects)

// for (const entry of entries){
//     const newsEntry = Object.values(entry)
//     console.log(newsEntry[0])
//     console.log(newsEntry[1])
//     for (const news of newsEntry[1]){
//         console.log(Object.keys(news)[0])
//         console.log(Object.values(news)[0])
//         console.log(Object.keys(news)[1])
//         console.log(Object.values(news)[1])
//         console.log(Object.keys(news)[2])
//         console.log(Object.values(news)[2])
//         }
// }
