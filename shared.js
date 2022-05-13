const {MongoClient}=require('mongodb');
const mongoose=require('mongoose'); 

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            const client=await MongoClient.connect(process.env.MONGO_DB_DRIVER);
            this.selectedDb=client.db('vbrs');
            console.log(this.selectedDb)
        }
        catch(error){console.log(error)}
    },
    async connectMongoose(){
        try{
            mongoose.connect(process.env.MONGOOSE_CONNECTION_URL);
            console.log('connection success');
        }
        catch(e){
            console.log(e)
        }
    }
}



