const loadRandomUsers = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => dispalyUsres(data.results))
}


const dispalyUsres = (users) => {
    const randomFriends = document.getElementById('random-container');
    users.map(user => {
        const div = document.createElement('div')
        randomFriends.textContent = ''
        div.innerHTML = `
        <h3>Email: ${user.email}</h3>
        <h4>Gender: ${user.gender}</h4>
        <p>Phone: ${user.phone}</p>
        <img src="${user.picture.large}" />
        `
        randomFriends.appendChild(div);
    })
}