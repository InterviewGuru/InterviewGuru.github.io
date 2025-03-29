import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DOMPurify from "dompurify";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>Generate a short URL for a given long URL.</li>
        <li>Redirect to the original URL when the short URL is accessed.</li>
        <li>Support custom short URLs.</li>
        <li>Track click analytics (optional).</li>
        <li>Expire URLs after a set time (optional).</li>
      </ul>
      <h5>Non-Functional Requirements</h5>
      <ul>
        <li>High availability and low latency.</li>
        <li>Scalability to handle millions of URLs and redirects.</li>
        <li>Security (avoid brute force attacks on short URLs).</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Design",
    content: "<p>The system consists of an API Gateway, URL Shortening Service, Database, Cache (Redis), Analytics Service, and Expiration Service (optional).</p>",
  },
  {
    title: "3. URL Shortening Strategy",
    content: "<p>Using Base62 encoding (0-9, a-z, A-Z) to generate 6-8 character short URLs.</p>",
  },
  {
    title: "4. Database Schema",
    content: `
      <p>Table: URL_MAPPINGS</p>
      <pre>
        ID | Short URL | Long URL | Created At | Expiry
        ------------------------------------------------
        1  | aB3d9F   | https://example.com | 2025-03-29 | NULL
      </pre>
    `,
  },
  {
    title: "5. Caching Strategy",
    content: "<p>Popular URLs are cached in Redis for faster lookups.</p>",
  },
  {
    title: "6. Redirection Mechanism",
    content: "<p>Checks Redis cache first, if miss, fetch from DB and update Redis.</p>",
  },
  {
    title: "7. Scaling Considerations",
    content: "<p>Use sharding and load balancing for handling large requests.</p>",
  },
  {
    title: "8. Security Measures",
    content: "<p>Rate limiting, blacklist URLs, and expiration mechanism.</p>",
  },
  {
    title: "9. Tech Stack",
    content: `
      <pre>
        API: Node.js, FastAPI, Go
        DB: PostgreSQL, DynamoDB
        Cache: Redis
        Load Balancer: Nginx, HAProxy
      </pre>
    `,
  },
  {
    title: "10. API Design",
    content: `
      <h5>Shorten URL API</h5>
      <pre>
        POST /shorten
        { "long_url": "https://example.com" }
      </pre>
      <h5>Redirect API</h5>
      <pre>
        GET /aB3d9F
        Response: 302 Found → Location: https://example.com
      </pre>
    `,
  },
];

const URLShortenerDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">URL Shortener System Design</h2>
      <div>
        {sections.map((section, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-header"><h5>{section.title}</h5></div>
            <div className="card-body" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default URLShortenerDesign;