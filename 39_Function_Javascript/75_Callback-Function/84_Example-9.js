function city(a)
{
    console.log("City Name is:" + " " + a);
}

function processUser(callback)
{
    callback("Pune");
}

processUser(city);