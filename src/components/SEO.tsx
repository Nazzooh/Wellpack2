import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title = "Wellpack | Premium Industrial Packaging Solutions",
    description = "Wellpack provides high-quality industrial packaging solutions including corrugated boxes, protective packaging, and custom shipping supplies.",
    keywords = "Wellpack, industrial packaging, corrugated boxes, shipping supplies, protective packaging, logistics",
    image = "/og-image.jpg",
    url = "https://wellpack.example.com/",
    type = "website",
}: SEOProps) {
    const siteTitle = title.includes("Wellpack") ? title : `${title} | Wellpack`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
