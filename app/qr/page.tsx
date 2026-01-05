import { redirect } from 'next/navigation';
import { Metadata } from 'next';

// Hide from Google
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function QRRedirect() {
  redirect('/');
}

