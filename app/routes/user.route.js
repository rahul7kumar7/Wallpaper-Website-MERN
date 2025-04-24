import express from 'express'
import {getUserSubmit} from '../controllers/user.controller.js'
import {verifyUser} from "../utils/verifyUser.js";

const router = express.Router();

router.get('/get', verifyUser, getUserSubmit());