import NavBar from '@/components/Navbar';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
});

export const metadata = {
  title: 'Book of Dogs',
  description: 'Web application design to get the most reliable information about dogs',
  keywords: 'web development, web design, typescript, react, node, html, css, npm, nextjs, tailwindCss, supabase, next auth'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${inter.variable} overflow-x-hidden break-words`}>
      <body className={'font-opensans text-slate-800 selection:bg-purple-400 selection:text-black'}>
        <div className="isolate flex min-h-screen flex-col overflow-x-hidden">
          <div
            id="nav"
            className="sticky top-0 z-20 max-h-screen"
          >
            <NavBar />
            <hr className="border-gray-300 dark:border-gray-700" />
          </div>

          <main
            id="main"
            className="noise-container z-10 flex flex-1 flex-col"
          >
            {children}
          </main>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className='noise-container'>
            <footer>This would be the footer</footer>
          </div>
        </div>
      </body>
    </html>
  );
}
