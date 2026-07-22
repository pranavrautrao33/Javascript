function cube(p)
{
    console.log("cube is:" + " " + p*p*p);
}

function processUser(callback)
{
    callback(12);
}

processUser(cube);