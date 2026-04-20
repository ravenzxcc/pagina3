import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Premium Barbershop | Look Sharp. Feel Confident.',
  description: 'High-end barbershop offering premium haircuts, beard trims, and grooming services for the modern man.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-black text-zinc-100 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
