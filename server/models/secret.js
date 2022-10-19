const { init } = require('../initdb');

class Secret {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudo = data.pseudo;
        this.date = data.date;
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
}

module.exports = Secret;
