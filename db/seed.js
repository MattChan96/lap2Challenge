db = connect("mongodb://localhost:27017/lap2db")

db.secrets.drop()

db.secrets.insertMany([
    { id: 1, title: "LFG", pseudo: "anom", favouriteSnack: "antimatter", date: "19.09.1996", abstract: "Hello, we are anonymous"},
    { id: 2, title: "PST", pseudo: "hacker", temperament: "moody", abstract: "I'm the best hacker and will 360 no scope hack u"},
    { id: 3, title: "PSLUV", pseudo: "sneaker", language: "Frenchie" },
    { id: 4, title: "CMON", pseudo: "proBaller", size: "big", colour: "red", date: "15.12.1880", abstract: "I got all the p" }
])
