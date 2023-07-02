import NavBar from './navbar';

export default function Header() {
  return (
    <div
      id="nav"
      className="sticky top-0 z-20 max-h-screen"
    >
      <NavBar />
      <hr className="border-gray-300 dark:border-gray-700" />
    </div>
  );
}