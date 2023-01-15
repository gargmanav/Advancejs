const countrieslength = document.getElementById("countrieslen");
countrieslength.innerText = `Currently we have ${countries_data.length} countries`;
const graphtitle = document.getElementById("most");


const countriessortresult = countries_data.sort(function(a,b){
    return b.population - a.population;

})
function allpopulation(){
graphtitle.innerText.t="10 most populated countries in the world"
for(let i = 0;i<10;i++){
    const indiv = document.createElement("div")
    const para = document.createElement("p")
    const tablesall = document.getElementById("tables")
    para.innerText = countries_data[i].name
    indiv.appendChild(para)
    console.log(indiv);
    tablesall.appendChild(indiv)
}

}

function alllanguage(){
    graphtitle.innerText="10 most spoken languages countries in the world"
    }