function greet(name)
{
    console.log("Hello" + " " +  name);
}
function processUser(callback)
{
    callback("Pranav");
}
processUser(greet);