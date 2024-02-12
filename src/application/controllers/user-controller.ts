export default interface UserController {
	index: (request: any, response: any) => Promise<void>;
	create: (request: any, response: any) => Promise<void>;
	updateProfile: (request: any, response: any) => Promise<void>;
	findById: (request: any, response: any) => Promise<void>;
	authenticate: (request: any, response: any) => Promise<void>;
}
