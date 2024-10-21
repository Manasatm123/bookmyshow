import { Router } from "express";

import * as rh from './requesthandler.js'

const router=Router();

router.route('/add').post(rh.addmovies)
router.route('/getmovies').get(rh.getmovies)
router.route('/getmovie/:id').get(rh.getmovie)
router.route('/details/:id').get(rh.details)


export default router;