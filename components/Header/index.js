// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
    //define and added text
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    const spanDate = document.createElement('span')
    spanDate.textContent = "MARCH 28, 2019"
    spanDate.classList.add('date')

    const headerLambdaTimes = document.createElement('h1')
    headerLambdaTimes.textContent = "Lambda Times"

    const spanTemp = document.createElement('span')
    spanTemp.textContent = "98"
    spanTemp.classList.add('temp')

    //structure
    headerDiv.appendChild(spanDate)
    headerDiv.appendChild(headerLambdaTimes)
    headerDiv.appendChild(spanTemp)

    return headerDiv
    
}

//added to header-container class
document.querySelector('.header-container').appendChild(Header())