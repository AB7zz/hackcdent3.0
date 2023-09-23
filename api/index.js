import express from 'express'
import bodyParser from 'body-parser'
import {ThirdwebSDK} from '@thirdweb-dev/sdk'
import dotenv from 'dotenv'
import ethers from "ethers";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const signer = new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`);

const sdk = ThirdwebSDK.fromPrivateKey(`0x${process.env.PRIVATE_KEY}`, "mumbai", {
    secretKey: process.env.SECRET_KEY
  });

// const sdk = new ThirdwebSDK("mumbai", {
//   secretKey: process.env.SECRET_KEY
// });

app.get('/', async(req, res) => {
    res.send('Hello World')
})

app.post("/addAccident", async (req, res) => {
  try {
    const { _loc, _date, _time, _snapShot, _plate } = req.body;

    // console.log(_loc, _date, _time, _snapShot, _plate)

    const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS);

    const result = await contract.call("addAccident", [_loc, _date, _time, _snapShot, _plate]);

    console.log(result)


    res.json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/getAccidents', async (req, res) => {
    try {
        const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS)
        const result = await contract.call("getAccidents")

        console.log(result)

        res.json({success: true, result})
    } catch (error) {
        console.log(error)
    }
})

app.get('/getAccident/:id', async (req, res) => {
    try {
        const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS)
        const result = await contract.call("getAccident", [req.params.id])

        console.log(result)

        res.json({success: true, result})
    } catch (error) {
        console.log(error)
    }
})

app.get('/getBlockData/:block', async(req, res) => {
    try{
        const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS)

    }catch(error){
        console.log(error)
    }
})

app.listen(port, '172.18.100.166', () => {
    console.log(`Server is running on port http://172.18.100.166:${port}`);
});