import type { Metadata, Viewport } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hemanthkumarmusirana.me'),
  title: "HemanthKumarMusirana's | Portfolio",
  description: 'Portfolio of Musirana Hemanth Kumar — Computer Science Student specializing in AI, Backend Development, Cloud Engineering, and DevOps.',
  keywords: [
    'Musirana Hemanth Kumar',
    'Hemanth Kumar Musirana',
    'Backend Developer',
    'Cloud Engineer',
    'AI Specialist',
    'Machine Learning',
    'DevOps',
    'Portfolio',
    'VS Code Portfolio'
  ],
  authors: [{ name: 'Musirana Hemanth Kumar', url: 'https://hemanthkumarmusirana.me' }],
  creator: 'Musirana Hemanth Kumar',
  publisher: 'Musirana Hemanth Kumar',
  alternates: {
    canonical: 'https://hemanthkumarmusirana.me',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hemanthkumarmusirana.me',
    title: "HemanthKumarMusirana's | Portfolio",
    description: 'Portfolio of Musirana Hemanth Kumar — Computer Science Student specializing in AI, Backend Development, Cloud Engineering, and DevOps.',
    siteName: "HemanthKumarMusirana's | Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "HemanthKumarMusirana's | Portfolio",
    description: 'Portfolio of Musirana Hemanth Kumar — Computer Science Student specializing in AI, Backend Development, Cloud Engineering, and DevOps.',
    creator: '@Hemanth_753',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1e1e1e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://hemanthkumarmusirana.me/#person',
      name: 'Musirana Hemanth Kumar',
      url: 'https://hemanthkumarmusirana.me',
      jobTitle: 'Backend Developer & Cloud Engineer',
      almaMater: 'Siddartha Institute Of Science And Technology',
      sameAs: [
        'https://github.com/HemanthKumarMusirana',
        'https://www.linkedin.com/in/hemanth-kumar-musirana-918857226/',
        'https://leetcode.com/u/Hemanth_753/',
        'https://www.instagram.com/hemanth_k_musirana/'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://hemanthkumarmusirana.me/#website',
      url: 'https://hemanthkumarmusirana.me',
      name: "HemanthKumarMusirana's | Portfolio",
      publisher: {
        '@id': 'https://hemanthkumarmusirana.me/#person'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${firaCode.variable} ${jetBrainsMono.variable} antialiased font-mono overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
