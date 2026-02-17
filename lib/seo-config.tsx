import type { Metadata } from 'next';

// Base SEO configuration
export const siteConfig = {
  name: 'Pouch Factory Inc.',
  description: 'FDA-graded, GMP-compliant pouch manufacturing facility specializing in nicotine, hemp, and functional pouches. Born in Sweden. Made in America.',
  url: 'https://pouchfactory.us',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/pouchfactory',
    linkedin: 'https://linkedin.com/company/pouch-factory',
  },
  keywords: [
    'pouch manufacturing',
    'nicotine pouch manufacturer',
    'hemp pouch production',
    'FDA compliant pouch factory',
    'GMP certified pouch manufacturer',
    'custom pouch production',
    'white label pouch manufacturing',
    'private label pouch',
    'co-packaging pouches',
    'contract pouch manufacturer',
    'Tennessee pouch manufacturing',
    'USA pouch production',
    'functional pouch manufacturing',
  ],
  contact: {
    email: 'sebastian@pouchfactory.us',
    phone: '+1 (555) 000-0000',
    address: {
      street: '',
      city: 'Tennessee',
      state: 'TN',
      country: 'USA',
      postalCode: '',
    },
  },
};

// Generate metadata for pages
export function generateSiteMetadata({
  title,
  description,
  image,
  keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaKeywords = keywords || siteConfig.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@pouchfactory',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

// Schema.org structured data
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: siteConfig.contact.email,
  foundingDate: '2023',
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
  ],
  knowsAbout: [
    'Nicotine Pouch Manufacturing',
    'White Label Production',
    'FDA Compliance',
    'GMP Standards',
    'Hemp Pouches',
    'Functional Pouches',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'USA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.contact.email,
    contactType: 'Sales',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  // Helps AI understand the core business function
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Custom Pouch Manufacturing',
      description: 'End-to-end white label manufacturing for nicotine and functional pouches.',
    },
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    addressCountry: siteConfig.contact.address.country,
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

// Helper to inject JSON-LD
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
