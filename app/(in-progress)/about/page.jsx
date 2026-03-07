import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Biruk Lemma is a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}
