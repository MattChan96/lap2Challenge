const { init } = require('../initdb');

class Secret {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudo = data.pseudo;
        this.abstract = data.abstract;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const dbData = await db.collection('secrets').find({}).toArray()
                const secrets = dbData.map(d => new Secret(d))
                if(!secrets.length) {throw new Error('Dunno, no secrets here')}
                resolve(secrets);
            } catch (err) {
                reject(`Error retrieving secrets: ${err.message}`)
            }
        })
    }

    static create(data){
        return new Promise(async (resolve, reject) => {
            const data = new Secret({
                title: req.body.title,
                pseudo: req.body.pseudo,
                abstract: req.body.abstract
            })
            try {
                console.log("Create function - data: ", data)
                const db = await init()
                const dbLength = await db.collection('secrets').find({}).count()
                let secret = await db.collection('secrets').insertOne({...data, id: dbLength + 1})
                resolve(secret)
            } catch (err){
                reject(`Error creating secret: ${err.message}`)
            }
        })
    }

    static findById(identity) {
        return new Promise (async (resolve, reject) => {
            try {
                let db = await init()
                let secret = await db.collection('secrets').find({id : parseInt(identity)}).toArray()
                resolve(secret[0]);
            } catch (err) {
                reject('Secret not found');
            };
        })
    }
}

module.exports = Secret;
