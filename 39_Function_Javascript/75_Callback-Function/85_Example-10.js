function country(a)
{
    console.log("Country Name is:" + " " +a);
}

function processUser(callback)
{
    callback("India");
}

processUser(country);
