import { Request, Response } from 'express';
import employees from '../data/employees.json'
import { delay } from '../utils/delay';

export async function getEmployees(req: Request, res: Response){
    // await delay(5)
    res.status(200).send(employees)
}