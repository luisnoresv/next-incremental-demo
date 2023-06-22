export const metadata = {
  title: 'About the author',
  description: 'Author information from Github',
  keywords: 'github, api, information, author'
};

export default function AboutLayout({ children }: { children: React.ReactNode; }) {
  return <div className='w-full h-full'>
    {children}
  </div>;

}