import { MapUserFromGithub } from '@/lib/customMappers/mappers';
import { UserFromGithub, UserInformation } from '@/lib/models/User';

export async function getUserInformatioFromGithub(
	username: string
): Promise<UserInformation> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);

		if (!response.ok) {
			throw new Error('Failed to fetch the user information from Github');
		}

		const userFromGH: UserFromGithub = await response.json();
		const userInformation = MapUserFromGithub(userFromGH);

		return userInformation;
	} catch (error: any) {
		throw new Error(error.message);
	}
}
