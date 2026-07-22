function min(a,b)
{
    console.log("Minimum number is:" + " " + (a<b? a:b));
}

function processUser(callback)
{
    callback(12,28);
}

processUser(min);
