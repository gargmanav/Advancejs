const countrieslength = document.getElementById("countrieslen");
countrieslength.innerText = `Currently we have ${countries_data.length} countries`;
const graphtitle = document.getElementById("most");


const countriessortresult = countries_data.sort(function(a,b){
    return b.population - a.population;

})

let totalPopulation = 0
for(let i=0; i<countries_data.length; i++){
    totalPopulation += countries_data[i].population
}
console.log(totalPopulation);

const boxy = document.getElementById("tables")
function allpopulation(){
    boxy.innerHTML = ""
graphtitle.innerText="10 most populated countries in the world"
for(let i = 0;i<10;i++){
    const inDiv = document.createElement("div")
    inDiv.style.display = "flex"
        inDiv.style.height = "fit-content"
        inDiv.style.alignItems = "center"
        inDiv.style.justifyContent = "center"

    const para = document.createElement("p")
    para.style.width = "20%"
    const tablesall = document.getElementById("tables")
    para.innerText = countries_data[i].name
    inDiv.appendChild(para)
    tablesall.appendChild(inDiv)
    const percentDiv = document.createElement("div")
        const percentageDiv = document.createElement("div")
        const percentage = (countriessortresult[i].population/totalPopulation)*100
        percentageDiv.style.width = `${percentage}%`
        percentageDiv.style.backgroundColor = "orange"
        percentageDiv.style.height = "fit-content"
        
        percentageDiv.innerText = `${percentage.toFixed(2)}%`

        percentDiv.appendChild(percentageDiv)
        percentDiv.style.width = "30%"
        inDiv.appendChild(percentDiv)
        
        const populationDiv = document.createElement("div")
        populationDiv.innerText = countriessortresult[i].population
        inDiv.appendChild(populationDiv)
        
        const graphDiv = document.getElementById("graph")
        boxy.appendChild(inDiv)
}

}

function alllanguage(){
    boxy.innerHTML = ""
    graphtitle.innerText="10 most spoken languages countries in the world"
    const languagesArray = []

    for(let i=0; i<countries_data.length; i++){
        languagesArray.push(countries_data[i].languages)
    }

    const flattedLanguagesArray = languagesArray.flat()

    const languageCount = {}

    flattedLanguagesArray.map((ele)=>{
        languageCount[ele] = (languageCount[ele] || 0) + 1
    })

    const objArr = Object.entries(languageCount)
    console.log(objArr);
    const sortedArray = objArr.sort((a,b)=>{
        return b[1] - a[1] 
    })


    for(let i=0; i<10; i++){

        const topTenValuesFronSortedArray = sortedArray[i]
        
        const inDiv = document.createElement("div")
        inDiv.style.display = "flex"
        inDiv.style.height = "fit-content"
        inDiv.style.alignItems = "center"
        inDiv.style.justifyContent = "center"

        const countryName = document.createElement("p")
        countryName.innerText = topTenValuesFronSortedArray[0]
        countryName.style.width = "20%"
        inDiv.appendChild(countryName)

        const percentDiv = document.createElement("div")
        const percentageDiv = document.createElement("div")
        const percentage = (topTenValuesFronSortedArray[1]/sortedArray.length)*100
        percentageDiv.style.width = `${percentage}%`
        percentageDiv.style.backgroundColor = "orange"
        percentageDiv.style.height = "fit-content"
        
        percentageDiv.innerText = `${percentage.toFixed(2)}%`

        percentDiv.appendChild(percentageDiv)
        percentDiv.style.width = "30%"
        inDiv.appendChild(percentDiv)
        
        const populationDiv = document.createElement("div")
        populationDiv.innerText = topTenValuesFronSortedArray[1]
        inDiv.appendChild(populationDiv)
        
        const graphDiv = document.getElementById("graph")
        boxy.appendChild(inDiv)

    
    }
    }