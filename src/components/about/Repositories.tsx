interface Props {
  username?: string;
}

export default function Repositories({ username }: Props) {
  return <p>This would be the list of repositories from the user {username}</p>;
}