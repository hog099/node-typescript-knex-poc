import UserRepository from '@application/repositories/user-repository';
import UserEntity from '@domain/entities/user-entity';
import Registry from '@infra/di/registry';

export default class CreateUser {
	private readonly userRepository: UserRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.userRepository = registry.resolve<UserRepository>('UserRepository');
	}

	async execute(userData: InputCreateUser): Promise<OutputCreateUser> {
		const userExist = await this.userRepository.findByEmail(userData.email);
		if (userExist) throw new Error('User already exists');
		const user = UserEntity.create(userData.email, userData.password);
		await this.userRepository.create(user);

		return {
			userId: user.userId,
			email: user.email,
			createdAt: user.createdAt,
		};
	}
}

type InputCreateUser = {
	email: string;
	password: string;
};

type OutputCreateUser = {
	userId: string;
	email: string;
	createdAt: Date;
};
