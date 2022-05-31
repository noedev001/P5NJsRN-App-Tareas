import express from 'express';
import tasksRoutes from './routes/tasks.js';
// paquete de cors para que cualquier baquen se conecte
import cors from 'cors';
// cors
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { options } from './swaggerOptions.js'

const specs = swaggerJSDoc(options);

const app = express();

app.use(cors());



app.use(express.json());
app.use(tasksRoutes);


app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;