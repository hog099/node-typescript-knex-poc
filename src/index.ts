import LoadEnv from '@infra/helpers/load-env';

import ExpressAdapter from '@infra/http/express-adapter';
import KnexAdapter from '@infra/database/knex-adapter';
import UserDAO from '@infra/database/dao/user-dao';

import Registry from '@infra/di/registry';
import UserRepositoryImpl from '@infra/database/repositories/user-repository-impl';

import dotenv from 'dotenv';
dotenv.config()

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryImpl(userDAO);


const registry = Registry.getInstance();
registry.register('UserRepository', userRepository);

const PORT = Number(process.env.PORT || 2424);
const expressAdapter = new ExpressAdapter();
expressAdapter.listen(PORT);