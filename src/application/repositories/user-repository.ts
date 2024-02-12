import UserEntity from '@domain/entities/user-entity';

export default interface UserRepository {
	create(user: UserEntity): Promise<UserEntity>;
	update(user: UserEntity): Promise<UserEntity>;
	findByEmail(email: string): Promise<UserEntity | null>;
}
