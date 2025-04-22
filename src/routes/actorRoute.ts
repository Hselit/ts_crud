import {Router} from 'express';
import {getActors} from '../controllers/actorController'

const router = Router();

router.get('/', getActors);

export default router;