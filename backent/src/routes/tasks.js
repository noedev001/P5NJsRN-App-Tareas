import { Router } from 'express';
import { getTasksCount, getTasks, getTask, createTask, deleteTask, updateTask, } from '../controllers/tasks.js'

const router = Router()




/**
 * @swagger
 * /tasks:
 * get:
 * sumary: esto obtiene toda las tareas
 * 
 */
router.get('/tasks', getTasks)
/**
 * @swagger
 * /tasks/count:
 * get:
 *  sumary: get total taks sumary
 *  
 */
router.get('/tasks/count', getTasksCount)
/**
 * @swagger
 * /tasks:
 * get:
 * suamry: esto obtiene toda las tareas
 */
router.get('/tasks/:id', getTask)
/**
 * @swagger
 * /tasks:
 * post:
 * suamry: esto obtiene toda las tareas
 */
router.post('/tasks', createTask)
/**
 * @swagger
 * /tasks:
 * delete:
 * suamry: esto obtiene toda las tareas
 */
router.delete('/tasks/:id', deleteTask)
/**
 * @swagger
 * /tasks:
 * put:
 * suamry: update a tasks by id
 */
router.put('/tasks/:id', updateTask)


export default router;

