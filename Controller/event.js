//An JSON Array with all evnts.
let events = [
    {
        Title: "disaster",
        Description: "A disaster Occured",
        Type: false,
        Impact: {
            Health: -5,
            Hunger: 5,
            Happiness: -10
        },
        NextEvent: 5
    },
    {
        Title: "plague",
        Description: "Oh no! there was a plague",
        Type: false,
        Impact: {
            Health: -10,
            Hunger: 5,
            Happiness: -3
        },
        NextEvent: 6
    },
    {
        Title: "gift",
        Description: "You got a Gift",
        Type: true,
        Impact: {
            Health: 1,
            Hunger: 0,
            Happiness: 10
        },
        NextEvent: 3
    },
    {
        Title: "surprise",
        Description: "hey there was a surprise at the DOOR",
        Type: true,
        Impact: {
            Health: 5,
            Hunger: 1,
            Happiness: 5
        },
        NextEvent: 8
    },
    {
        Title: "injury",
        Description: "You got injured while playing",
        Type: false,
        Impact: {
            Health: -10,
            Hunger: 5,
            Happiness: -10
        },
        NextEvent: 3
    },
    {
        Title: "fire",
        Description: "there was a fire in the shelter.",
        Type: false,
        Impact: {
            Health: -2,
            Hunger: 0,
            Happiness: -10
        },
        NextEvent: 5
    },
    {
        Title: "flood",
        Description: "Tap was left house got flooded.",
        Type: false,
        Impact: {
            Health: -5,
            Hunger: 10,
            Happiness: -10
        },
        NextEvent: 5
    },
    {
        Title: "visit",
        Description: " Your best friend Came to visit you",
        Type: true,
        Impact: {
            Health: 5,
            Hunger: 0,
            Happiness: 10
        },
        NextEvent: 10
    }
];

export const getRandomEvent = (req, res) => {
    //Gets a random value from events array.
    res.send(events[Math.floor(Math.random() * events.length)]);
}