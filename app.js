const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const verison = "v1"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to Product Variant Management!"});
})


const db = require("./models")
db.sequelize.sync();

/*db.sequelize.sync({force: true}).then( () => {
    console.log("Drop and re-sync DB");
})*/

require('./routes/productVariantRoutes')(app, verison)



const PORT = 9999;
app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log(`http://localhost:${PORT}`);
})