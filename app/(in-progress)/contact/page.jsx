import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Biruk Lemma is a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.',
};

export default function Contact() {
  return (
    <Transition>
      <InProgress>Contact Page</InProgress>
    </Transition>
  );
}
