import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-poppins',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://lending2-xi.vercel.app'),
    title: {
        default: "Cornerstone Renovation LLC - Quality Home Renovation Services",
        template: "%s | Cornerstone Renovation LLC"
    },
    description: "Professional home renovation and remodeling services in Apple Valley, MN. Kitchen remodeling, bathroom renovation, painting, siding, and handyman services. Renovation you can trust.",
    keywords: ["home renovation", "remodeling", "kitchen remodel", "bathroom renovation", "painting", "siding", "Apple Valley MN", "Lakeville", "Burnsville", "home improvement", "contractor", "renovation services"],
    authors: [{ name: "Cornerstone Renovation LLC" }],
    creator: "Cornerstone Renovation LLC",
    publisher: "Cornerstone Renovation LLC",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://lending2-xi.vercel.app",
        siteName: "Cornerstone Renovation LLC",
        title: "Cornerstone Renovation LLC - Quality Home Renovation Services",
        description: "Professional home renovation and remodeling services in Apple Valley, MN. Kitchen remodeling, bathroom renovation, painting, siding, and handyman services.",
        images: [
            {
                url: "/bg-image.jpeg",
                width: 1200,
                height: 630,
                alt: "Cornerstone Renovation LLC - Home Renovation Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cornerstone Renovation LLC - Quality Home Renovation Services",
        description: "Professional home renovation and remodeling services in Apple Valley, MN.",
        images: ["/bg-image.jpeg"],
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
    verification: {
        // Add your verification codes here when available
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
    alternates: {
        canonical: "https://lending2-xi.vercel.app",
    },
    category: "Home Renovation Services",
    icons: {
        icon: [
            { url: '/logo.svg', type: 'image/svg+xml' },
            { url: '/logo2.svg.png', type: 'image/png' },
        ],
        apple: [
            { url: '/logo2.svg.png', type: 'image/png' },
        ],
        shortcut: '/logo.svg',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Cornerstone Renovation LLC",
        "description": "Professional home renovation and remodeling services in Apple Valley, MN. Kitchen remodeling, bathroom renovation, painting, siding, and handyman services.",
        "url": "https://lending2-xi.vercel.app",
        "logo": "https://lending2-xi.vercel.app/logo.svg",
        "image": "https://lending2-xi.vercel.app/bg-image.jpeg",
        "telephone": "(952) 465-8195",
        "email": "cornerstone_renovation@outlook.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Apple Valley",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.746995",
            "longitude": "-93.216944"
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "44.746995",
                "longitude": "-93.216944"
            },
            "geoRadius": {
                "@type": "Distance",
                "value": "50",
                "unitCode": "km"
            }
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Apple Valley",
                "containedIn": {
                    "@type": "State",
                    "name": "Minnesota"
                }
            },
            {
                "@type": "City",
                "name": "Lakeville",
                "containedIn": {
                    "@type": "State",
                    "name": "Minnesota"
                }
            },
            {
                "@type": "City",
                "name": "Burnsville",
                "containedIn": {
                    "@type": "State",
                    "name": "Minnesota"
                }
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Renovation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Kitchen Remodeling",
                        "description": "Complete kitchen renovation and remodeling services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bathroom Renovation",
                        "description": "Professional bathroom renovation and remodeling"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Interior Painting",
                        "description": "High-quality interior painting services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Exterior Painting",
                        "description": "Professional exterior painting and staining"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Siding Installation",
                        "description": "Siding installation and replacement services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deck Installation",
                        "description": "Custom deck design and installation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Handyman Services",
                        "description": "General handyman and repair services"
                    }
                }
            ]
        },
        "sameAs": [
            // Add social media links when available
        ]
    };

    return (
        <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
