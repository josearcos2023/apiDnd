const racesData = [
    {
        name: 'Human',
        life_expectancy: 80,
        size: 'Medium',
        starter_proficiencies: true,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Humans are the most adaptable and ambitious people among the common races. They are known for their innovation and versatility.'

    },
    {
        name: 'Elf',
        life_expectancy: 750,
        size: 'Medium',
        starter_proficiencies: false,
        image: "https://www.dndbeyond.com/avatars/thumbnails/7/639/420/618/636287075350739045.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Elves are known for their grace and mastery of magic and weapons such as the bow and sword. They are typically long-lived and hold nature in high regard.'

    },
    {
        name: 'Dwarf',
        life_expectancy: 350,
        size: 'Medium',
        starter_proficiencies: true,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Dwarves are known for their skill in warfare, their ability to withstand physical and magical punishment, and their deep loyalty to their clans.'

    },
    {
        name: 'Halfling',
        life_expectancy: 150,
        size: 'Small',
        starter_proficiencies: false,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Halflings are known for their resourcefulness, quickness, and stealth. They are cheerful, hospitable, and enjoy a simple, pastoral life.'

    },
    {
        name: 'Dragonborn',
        life_expectancy: 80,
        size: 'Medium',
        starter_proficiencies: true,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
        date_introduction: new Date('1974-05-12'),
        speed: 30,
        description: 'Dragonborn are proud, honorable warriors who resemble humanoid dragons. They strive to be worthy of the blood of dragons that flows through their veins.'

    },
    {
        name: 'Gnome',
        life_expectancy: 500,
        size: 'Small',
        starter_proficiencies: false,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/334/420/618/636272671553055253.png",
        date_introduction: new Date('1974-02-12'),
        speed: 25,
        description: 'Gnomes are known for their wits, cunning, and joy of life. They are skilled engineers, alchemists, tinkers, and inventors, always seeking to create something new.'

    },
    {
        name: 'Half-Elf',
        life_expectancy: 180,
        size: 'Medium',
        starter_proficiencies: true,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/481/420/618/636274618102950794.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Half-Elves combine the best qualities of their elf and human parents. They are known for their versatility, adaptability, and charismatic presence.'

    },
    {
        name: 'Half-Orc',
        life_expectancy: 75,
        size: 'Medium',
        starter_proficiencies: false,
        image: "https://www.dndbeyond.com/avatars/thumbnails/6/466/420/618/636274570630462055.png",
        date_introduction: new Date('1974-02-12'),
        speed: 30,
        description: 'Half-Orcs are known for their strength, courage, and combat prowess. They are often seen as fierce warriors and are valued for their ferocity and endurance.'

    },
    {
        name: 'Tiefling',
        life_expectancy: 100,
        size: 'Medium',
        starter_proficiencies: true,
        image: "https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png",
        date_introduction: new Date('1986-04-01'),
        speed: 30,
        description: 'Tieflings are known for their infernal heritage and often face prejudice because of their appearance. They are cunning, resourceful, and possess a dark allure.'

    }
];

module.exports = racesData;
