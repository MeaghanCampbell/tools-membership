import "@/styles/globals.css";
import Link from 'next/link'
import Box from '@/components/Box'

export const metadata = {
  title: "Tools Membership",
  description: "fun tools of all kinds",
};

function Nav({items}) {
  return (
      <nav>
          {items.map((item) => (
            <Link href={item.url}>{item.name}</Link>
          ))}
      </nav>
  )
}

const NAVITEMS = [
  {name: 'Dashboard', url: '/'},
  {name: 'Largest Number', url: '/largest-number'}
]

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>

            <Nav items={NAVITEMS} />
            <Box />
            {children}

          </body>
      </html>
    </>
  );
}
