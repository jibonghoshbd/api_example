const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountires(data))
}
loadCountries()
const displayCountires = (countires) => {
    // console.log(countires)
    const countriesContainer = document.getElementById('countries-container');
    // console.log(countriesContainer)
    countires.forEach((countire) => {
        console.log(countire)
        const div = document.createElement('div')
        // console.log(div)
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="m-1 p-5 bg-info text-center rounded" style="height: 400px;">
                <h3>Name: ${countire.name}</h3>
                <h3>Name: ${countire.capital}</h3>
                <img class="img-fluid rounded mt-4" src="${countire.flag}" />

            </div>
        `
        countriesContainer.appendChild(div)
    })
}