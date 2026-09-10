import {
  Contact,
  Experience,
  Header,
  Navbar,
  Posts,
  Thumbnail,
} from '@/layout';

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
        <Experience />
        <Thumbnail />
        <Posts />
      </main>
      <Contact />
    </>
  );
}
