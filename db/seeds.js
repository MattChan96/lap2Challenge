db = connect("mongodb://localhost:27017/secrets")

db.secrets.drop()

db.secrets.insertMany([
    { title: "LFG", pseudo: "anom", favouriteSnack: "antimatter", date: "19.09.1996", abstract: "Hello, we are anonymous"},
    { title: "PST", pseudo: "hacker", temperament: "moody", abstract: "I'm the best hacker and will 360 no scope hack u"},
    { title: "PSLUV", pseudo: "sneaker", language: "Frenchie" },
    { title: "CMON", pseudo: "proBaller", size: "big", colour: "red", date: "15.12.1880", abstract: "I got all the p" }
])
