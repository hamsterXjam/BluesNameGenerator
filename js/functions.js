// Helper functions will go here


var testArray = [
    "Sceptic",
    "Unhygienic",
    "Depressive",
    "Blind",
    "Deaf",
    "Lame",
    "Bubonic",
    "Bilious",
    "Coughing",
    "Infected",
    "Infested"
];

function randomiser()
{
    var output = randomiserPlus(6);
    return output + 1;
}

function randomiserPlus(top)
{
    return Math.floor(Math.random() * top);
}