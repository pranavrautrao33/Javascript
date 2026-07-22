function max(a,b)
{
     console.log("This is maximum No:" + " " + (a>b ? a:b) );
}

function processUser(callback)
{
    callback(12,3);
}

processUser(max);