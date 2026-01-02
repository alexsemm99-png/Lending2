import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Cornerstone Renovation LLC. Learn how we collect, use, and protect your personal information.",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Privacy Policy | Cornerstone Renovation LLC",
        description: "Privacy Policy for Cornerstone Renovation LLC. Learn how we collect, use, and protect your personal information.",
        url: "https://lending2-xi.vercel.app/privacy-policy",
        type: "website",
    },
    alternates: {
        canonical: "https://lending2-xi.vercel.app/privacy-policy",
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

