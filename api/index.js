import express from 'express'
import bodyParser from 'body-parser'
import {ThirdwebSDK} from '@thirdweb-dev/sdk'
import dotenv from 'dotenv'
import ethers from "ethers";
// import { configuration, OpenAIApi } from 'openai'
import { Configuration, OpenAIApi } from "openai";
// const { Configuration, OpenAIApi } = require("openai");
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())

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


app.post("/userAddsAccident", async (req, res) => {
  try {
    const { _loc, _date, _time, _snapShot, _plate, _user } = req.body;

    // console.log(_loc, _date, _time, _snapShot, _plate, _user)

    const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS);

    const result = await contract.call("userAddsAccident", [_loc, _date, _time, _snapShot, _plate]);

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

app.post('/reqInsurance', async(req, res) => {
  try{
    const {_name, _phone, _block, _user} = req.body
    const contract = await sdk.getContract(process.env.CONTRACT_ADDRESS)
    const result = await contract.call("reqInsurance", [_name, _phone, _block])


        console.log(result)
  }catch(error){
    console.log(error)
  }
})

//--------- ----Dheeraj
app.post('/bot', async (req, res) => {
    try {
      const userMessage = req.body.message;
        console.log("userMessage",userMessage)
      const configuration = new Configuration({
        apiKey: "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",
      });
  
      const openai = new OpenAIApi(configuration);
      const prompt =`"Hello, I need legal assistance related to the Indian Penal Code (IPC) and other Indian laws. My problem is ${userMessage}. Can you provide me with guidance or information on how to approach this situation within the boundaries of Indian law?"`
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userMessage, 
        temperature: 0,
        max_tokens: 2048,
      });
      const output = completion.data.choices[0].text.trim()
      console.log(output);
      
      // Send
      res.json({ output }); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' }); 
    }
  });

app.listen(port, '172.18.100.166', () => {
    console.log(`Server is running on port http://172.18.100.166:${port}`);
});