function age(a)
{
    console.log("Age is:" + " " + a);
}

function processUser(callback)
{
    callback(17);
}

processUser(age);
