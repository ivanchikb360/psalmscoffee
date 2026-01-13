import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://psalmscoffee.com",
    name: "Psalms Coffee",
    description:
      "Premium mobile specialty coffee cart service for weddings, corporate events, and celebrations in the Salem Metro Area.",
    url: "https://psalmscoffee.com", // Update with your actual domain
    logo: "https://psalmscoffee.com/images/logo cut.jpg", // Update with your actual domain
    image: "https://psalmscoffee.com/images/coffee cart placeholder.jpg", // Update with your actual domain
    telephone: "+15551234567", // Update with actual phone number
    email: "ivanchikb360@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salem",
      addressRegion: "OR",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Salem Metro Area",
    },
    serviceType: "Mobile Coffee Cart Service",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
    sameAs: [
      // Add your social media URLs here when available
      // "https://www.facebook.com/psalmscoffee",
      // "https://www.instagram.com/psalmscoffee",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Location />
        <Footer />
      </div>
    </>
  );
}
