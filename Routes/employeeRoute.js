const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControllers')


router.get('/employees',employeeController.getAllEmployees);
router.post('/employees',employeeController.createEmployee);
router.put('/employees/:id',employeeController.updateEmployee);
router.delete('/employees/:id',employeeController.deleteEmployee);

module.exports = router;