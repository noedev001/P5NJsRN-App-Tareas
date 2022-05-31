"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * /tasks:
 * get:
 * sumary: esto obtiene toda las tareas
 * 
 */

router.get('/tasks', _tasks.getTasks);
/**
 * @swagger
 * /tasks/count:
 * get:
 *  sumary: get total taks sumary
 *  
 */

router.get('/tasks/count', _tasks.getTasksCount);
/**
 * @swagger
 * /tasks:
 * get:
 * suamry: esto obtiene toda las tareas
 */

router.get('/tasks/:id', _tasks.getTask);
/**
 * @swagger
 * /tasks:
 * post:
 * suamry: esto obtiene toda las tareas
 */

router.post('/tasks', _tasks.createTask);
/**
 * @swagger
 * /tasks:
 * delete:
 * suamry: esto obtiene toda las tareas
 */

router["delete"]('/tasks/:id', _tasks.deleteTask);
/**
 * @swagger
 * /tasks:
 * put:
 * suamry: update a tasks by id
 */

router.put('/tasks/:id', _tasks.updateTask);
var _default = router;
exports["default"] = _default;