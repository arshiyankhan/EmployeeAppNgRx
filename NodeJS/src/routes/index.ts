import express, { Router } from 'express';
import { authenticateToken } from '../interceptors/token';
import { getEmployees } from './employees';
import { loginRoute } from './login';

const router: Router = express.Router();

// login
router.post('/login', loginRoute)

// employee
router.get('/employees', authenticateToken, getEmployees)

export default router;