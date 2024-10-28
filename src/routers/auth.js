// src/routers/auth.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { registerUserSchema } from '../validation/auth.js';
// import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

import {
  registerUserController,
  loginUserController,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

export default authRouter;

// const authRoutes = express.Router();
// const jsonParser = express.json();

// authRoutes.post(
//   '/register',
//   jsonParser,
//   validateBody(registerSchema),
//   ctrlWrapper(registerController),
// );

// authRoutes.post(
//   '/login',
//   jsonParser,
//   validateBody(loginSchema),
//   ctrlWrapper(loginController),
// );

// export default authRoutes;
