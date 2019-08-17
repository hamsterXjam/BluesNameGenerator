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

var afflictions = [
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
	"Infested",
	"Allergic",
	"Rheumatic",
	"Arthritic",
	"Scabby",
	"Bleeding",
	"Bruised",
	"Comatose",
	"Allergic",
	"Anaemic",
	"Flatulent",
	"Neurotic",
	"Gastroenteritis",
	"Manic",
	"Congested",
	"Ingrown Toenail",
	"Paranoid",
	"Pregnant",
	"High Blood Pressure",
	"Low Blood Sugar",
	"Protein-deficient",
	"Phobic",
	"Narcoleptic",
	"Constipated",
	"Gout-ridden",
	"Sneezing",
	"Bald",
	"Restless Legs",
	"Conjunctivitis",
	"Athlete's Foot",
	"Halitosis",
	"Mad Cow Disease",
	"Chickenpox",
	"Gallstones",
	"Dermatitis",
	"Weeping Sores",
	"Pubic Lice",
	"Diarrhoea",
	"Shingles",
	"Dislocated Shoulder",
	"Warty",
	"Fungal Infection",
	"Bleeding Gums",
	"Varicose Veins",
	"Tonsilitis",
	"Vomiting",
	"Bunions",
	"Hiccuping",
	"Irritable Bowel Syndrome",
	"Impetigo",
	"Tennis Elbow",
	"Jaundice",
	"Scabies"
];

var fruits = [
	"Melon",
	"Orange",
	"Grape",
	"Banana",
	"Strawberry",
	"Raspberry",
	"Blackurrant",
	"Kiwi",
	"Kumquat",
	"Lime",
	"Watermelon",
	"Prune",
	"Blackberry",
	"Cherry",
	"Apple",
	"Coconut",
	"Date",
	"Pear",
	"Tangerine",
	"Papaya",
	"Rhubarb",
	"Plum",
	"Guava",
	"Elderberry",
	"Cranberry",
	"Avocado",
	"Grapefruit",
	"Apricot",
	"Mango",
	"Gooseberry",
	"Mandarin",
	"Nectarine",
	"Peach",
	"Pineapple",
	"Quince",
	"Blueberry",
	"Fig"
];

var veg = [
	"Pea",
	"Broccoli",
	"Brussels Sprout",
	"Cabbage",
	"Cauliflower",
	"Celery",
	"Endive",
	"Bok Choy",
	"Spinach",
	"Basil",
	"Coriander",
	"Oregano",
	"Parsley",
	"Lettuce",
	"Mushroom",
	"Okra",
	"Onion",
	"Garlic",
	"Leek",
	"Shallot",
	"Beetroot",
	"Mangel-wurzel",
	"Carrot",
	"Celeriac",
	"Parsnip",
	"Radish",
	"Potato",
	"Sweet Potato",
	"Yam",
	"Turnip",
	"Butternut Squash",
	"Courgette",
	"Cucumber",
	"Marrow",
	"Tomato",
	"Watercress"
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

function getFruit(rng)
{
	var top = fruits.length;
	var fruityNumber = Math.floor(rng() * top);

}
