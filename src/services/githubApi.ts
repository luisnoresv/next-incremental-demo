import 'server-only';

import {
	MapRepositoryFromGithub,
	MapUserFromGithub,
} from '@/lib/customMappers/mappers';
import { Repository, RepositoryFromGithub } from '@/lib/models/Repository';
import { UserFromGithub, UserInformation } from '@/lib/models/User';

const GH_BASE_URL = 'https://api.github.com';

export async function getUserInformatioFromGithub(
	username: string
): Promise<UserInformation> {
	try {
		const response = await fetch(`${GH_BASE_URL}/users/${username}`);

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

export async function getRepositoriesFromGithubByUsername(
	username: string
): Promise<Repository[]> {
	try {
		const response = await fetch(`${GH_BASE_URL}/users/${username}/repos`);

		if (!response.ok) {
			throw new Error(
				`Failed to fecth the repositories from GH to the user ${username}`
			);
		}

		const repositoriesFromGH: RepositoryFromGithub[] = await response.json();
		const mappedRepository = repositoriesFromGH.map((repo) =>
			MapRepositoryFromGithub(repo)
		);
		return mappedRepository;
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
