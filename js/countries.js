const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountires(data))
}
loadCountries()
const displayCountires = (countires) => {
    const countriesContainer = document.getElementById('countries-container');
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'none'
    countires.forEach((countire) => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="m-1 p-5 bg-info text-center rounded" style="height: 450px;">
                <h3>Name: ${countire.name}</h3>
                <h3>Capital: ${countire.capital}</h3>
                <img class="img-fluid rounded mt-4" src="${countire.flag}" />
                <button onclick="loadCountireDitels('${countire.name}')" class="btn btn-success mt-2 p-2">See Details</button
            </div>
        `
        countriesContainer.appendChild(div)
    })
}

const loadCountireDitels = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => dispalyCountrieDetails(data[0]))
}

const dispalyCountrieDetails = countire => {
    console.log(countire)
    const countriDitels = document.getElementById('countrie-ditels')
    countriDitels.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <h2>Countrie Diteils</h2>
        <h3>Name: ${countire.name}</h3> 
        <h4>Region: ${countire.region}</h4> 
        <img class="img-fluid rounded mt-4" src="${countire.flag}"/>
    `
    countriDitels.appendChild(div)
}