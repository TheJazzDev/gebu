import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins-sans',
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gebu Superstore',
  description: 'One Stop shoping...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
