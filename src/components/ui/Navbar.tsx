import Link from 'next/link';

const routes = [
  {
    href: "/about",
    text: "About"
  },
  {
    href: "/dogs",
    text: "Dogs"
  },
  {
    href: "/auth",
    text: "Auth"
  },
  {
    href: "/protected",
    text: "Protected(server)"
  },
  // {
  //   href: "/blog",
  //   text: "Blog"
  // },
];

export default function NavBar() {
  return (
    <header className='noise-container shadow-lg'>
      <nav aria-label="Primary"
        className="container flex h-20 items-center">
        <Link className='ml-4 italic text-4xl font-normal tracking-tight text-purple-500 dark:text-miami-pink' title='Home' href="/">
          Book of dogs
        </Link>
        <div className='ml-16 hidden shrink flex-row items-center gap-16 font-inter lg:flex'>
          {routes.map(route => (
            <Link className='link text-lg font-medium' key={route.text} href={route.href}>{route.text}</Link>
          ))}
        </div>
        <div className="flex-1"></div>
        <div className="hidden sm:block">
          <div>some social links</div>
        </div>
      </nav>
    </header>
  );
}