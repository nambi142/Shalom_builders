import { Helmet } from 'react-helmet-async';

const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Markodraft Builders & Constructions",
    "description": "Specializes in Builders and Construction services",
    "url": "https://markodraft.com", 
    "telephone": ["+918190859587", "+919345732237"],
    "founder": {
      "@type": "Person",
      "name": "Mr. Micaiah S",
      "jobTitle": "Proprietor"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://jsdl.in/DT-56I9OV6GC1F"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOSchema;