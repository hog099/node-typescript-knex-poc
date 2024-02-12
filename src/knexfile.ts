import LoadEnv from './infra/helpers/load-env';
import type { Knex } from 'knex';

LoadEnv.load();

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'mysql2',
		connection: {
			host: `${process.env.DB_HOSTNAME}`,
			database: `${process.env.DB_NAME}`,
			user: `${process.env.DB_USERNAME}`,
			password: `${process.env.DB_PASSWORD}`,
			port: Number(process.env.DB_PORT),
		},
		migrations: {
			directory: '../migrations',
		},
	},
	production: {
		client: 'mysql2',
		connection: {
			host: `${process.env.DB_HOSTNAME}`,
			database: `${process.env.DB_NAME}`,
			user: `${process.env.DB_USERNAME}`,
			password: `${process.env.DB_PASSWORD}`,
			port: Number(process.env.DB_PORT),
		},
		migrations: {
			directory: '../migrations',
		},
	},
};

export default config;
