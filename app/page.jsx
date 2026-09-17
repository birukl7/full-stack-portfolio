import { Contact, Experience, Header, Navbar, Thumbnail } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Biruk Lemma',
  description:
    'Biruk Lemma is a Full Stack Software Engineer passionate about crafting high-performance, aesthetically stunning web and mobile applications.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Thumbnail />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
