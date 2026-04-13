import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Riscos Psicossociais - Fonte D\'Vida',
  description: 'Avaliação anônima de riscos psicossociais no ambiente de trabalho - Fonte D\'Vida',
  keywords: 'riscos psicossociais, saúde ocupacional, Fonte D\'Vida, questionário anônimo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
