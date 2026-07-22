function even(a)
{
    console.log(a%2===0);
}

function processUser(callback)
{
    callback(12);
}

processUser(even);