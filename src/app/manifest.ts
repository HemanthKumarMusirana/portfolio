import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HemanthKumarMusirana's | Portfolio",
    short_name: 'Hemanth Portfolio',
    description: 'Portfolio of Musirana Hemanth Kumar — Computer Science Student specializing in AI, Backend Development, Cloud Engineering, and DevOps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1e1e',
    theme_color: '#007acc',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
