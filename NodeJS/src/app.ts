import express, { Application, Request, Response } from 'express';
import { SERVER_PORT } from './config/envconfig';
import router from './routes';


const app: Application = express();
var cors = require('cors')

app.use(cors())
app.use('/', router)

app.get('/',(req:Request, res:Response)=>{
	res.status(200).send(Date.now().toString())
})

let bodyParser = require('body-parser');

app.use(express.json({ limit: '70mb' }));
app.use(express.urlencoded({ limit: '70mb', extended: true }));
app.use(bodyParser.json());

try {
	app.listen(SERVER_PORT, () => {
		console.log('Server is running at http://localhost:3000/');
	})
} catch (err) {
	console.log(err);
}