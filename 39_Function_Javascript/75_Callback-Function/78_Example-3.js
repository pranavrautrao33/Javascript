function square(p)
{
    console.log("Square is:" + " " + p*p);
}

function processUser(callback)
{
    callback(12);
}

processUser(square);