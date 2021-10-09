
const template = require("../templates/UsersCard.handlebars");

const fetchData = async() => {
    const usersList = 'https://615485ee2473940017efaed3.mockapi.io/assessment';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try{
        const response = await fetch(usersList, headers);
        let data = await response.json();

        return data;
    }catch(error){
        console.log(error)
    }
}

const renderUsers = async() => {
    const data = await fetchData()

    const usersWithFormattedDate = data.map( user => {
        user.createdAt = user.createdAt.substring(0, 10);
        return user;
    });

    //let template = HandlebarsPlugin.compile(UsersCard);
    let result = template(usersWithFormattedDate)
    
    return result;
}

export { renderUsers, fetchData }