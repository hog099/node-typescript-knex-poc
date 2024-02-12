import { Router} from 'express';
import UserController from '@infra/http/controllers/user-controller-imp';

export default class RouterFactory {
	private userController: UserController;
	// UserController
	// QuestionController
	// AnswerController

	constructor() {
		this.userController = new UserController();
	}

	register(): Router {
		const router = Router();

		// UserController
		router.get('/user', this.userController.index);
		// router.post('/user', this.userController.create);

		return router;
	}
}
