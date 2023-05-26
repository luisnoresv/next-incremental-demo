import { UserFromGithub, UserInformation } from '../models/User';

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
