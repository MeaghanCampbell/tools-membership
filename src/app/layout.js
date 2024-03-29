import "@/styles/globals.css";
import Nav from '@/components/Nav'


export const metadata = {
  title: "Tools Membership",
  description: "fun tools of all kinds",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="flex">

            <Nav />
            <main className="p-8">
              {children}
            </main>

          </body>
      </html>
    </>
  );
}
