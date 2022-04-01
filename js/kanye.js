const loadKanyeData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}
loadKanyeData()
const displayData = (quote) => {
    const kanyeContainer = document.getElementById('kanye-container');
    const div = document.createElement('div')
    div.classList.add('kanye')
    div.innerHTML = `Kanye dialogue: ${quote.quote}`
    kanyeContainer.appendChild(div);
}