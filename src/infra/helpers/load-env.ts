import path from 'path';
import * as dotenv from 'dotenv';

export default class LoadEnv {
	static load(): void {
		// if (!process.env.NODE_ENV) throw new Error('NODE_ENV is not defined');
		const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
		

		try {
			const fileName = isDev ? 'env' : 'env.production';

			dotenv.config({
				path: path.resolve(__dirname, `./../../../.${fileName}`),
			});
		} catch (error) {
			throw new Error('Error loading .env file');
		}
	}
}
