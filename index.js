const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = 5000;


//middleware
app.use(cors());
app.use(express.json());







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ro517.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






async function run() {


    //.................................................................... 

    //.................................................................... 

    try {
        await client.connect();
        const newCollection = client.db('database').collection('store');


        //Documentation flow
        // const cursor = collection.find({});
        // const allValues = await cursor.toArray()
        app.get('/getall', async (req, res) => {
            const query = {}
            const cursor = newCollection.find(query)
            const services = await cursor.toArray()
            res.send(services)

        })




        app.get('/getall/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const services = await newCollection.findOne(query)
            res.send(services)
        })

        app.post('/getall',async (req,res)=>{
  
            const newProduct=req.body;
            const service =await serviceCollection.insertOne(newProduct)
            res.send(service)
            })

            
        





    }

    finally {
    }
} run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('running server ')
});

app.listen(port, () => {

    console.log("I AM FIRST OPERATION MOZAHID", port)

})