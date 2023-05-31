import { Repository, RepositoryFromGithub } from '@/lib/models/Repository';

import { UserFromGithub, UserInformation } from '@/lib/models/User';

export function MapUserFromGithub(
	userFromGithub: UserFromGithub
): UserInformation {
	const userMapped: UserInformation = {
		login: userFromGithub.login,
		name: userFromGithub.name,
		bio: userFromGithub.bio,
		company: userFromGithub.company,
		location: userFromGithub.location,
		avatarUrl: userFromGithub.avatar_url,
		blog: userFromGithub.blog,
		twitterUsername: userFromGithub.twitter_username,
		followers: userFromGithub.followers,
		following: userFromGithub.following,
	};

	return userMapped;
}

export function MapRepositoryFromGithub(
	repositoryFromGithub: RepositoryFromGithub
): Repository {
	const repositoryMapped: Repository = {
		id: repositoryFromGithub.id,
		description: repositoryFromGithub.description || '',
		name: repositoryFromGithub.name,
		url: repositoryFromGithub.html_url,
		isTemplate: repositoryFromGithub.is_template,
		language: repositoryFromGithub.language || '',
		visibility: repositoryFromGithub.visibility,
		stargazersUrl: repositoryFromGithub.stargazers_url,
		stargazersCount: repositoryFromGithub.stargazers_count,
	};

	return repositoryMapped;
}
