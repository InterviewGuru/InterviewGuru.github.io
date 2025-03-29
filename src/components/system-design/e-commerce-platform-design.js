import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DOMPurify from "dompurify";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>User authentication and account management.</li>
        <li>Product catalog with search and filter options.</li>
        <li>Shopping cart and checkout process.</li>
        <li>Order management and tracking.</li>
        <li>Payment gateway integration.</li>
        <li>Reviews and ratings for products.</li>
      </ul>
      <h5>Non-Functional Requirements</h5>
      <ul>
        <li>High availability and scalability.</li>
        <li>Secure transactions and data protection.</li>
        <li>Fast response times for browsing and checkout.</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Architecture",
    content: `
      <p>The platform consists of several microservices:</p>
      <ul>
        <li>User Service: Handles authentication and profile management.</li>
        <li>Product Service: Manages the product catalog.</li>
        <li>Order Service: Processes orders and transactions.</li>
        <li>Payment Service: Integrates with third-party payment gateways.</li>
        <li>Review Service: Stores and manages user reviews.</li>
      </ul>
    `,
  },
  {
    title: "3. Database Schema",
    content: `
      <p>Key Tables:</p>
      <pre>
        USERS: id | name | email | password_hash
        PRODUCTS: id | name | description | price | stock
        ORDERS: id | user_id | total_amount | status
        ORDER_ITEMS: id | order_id | product_id | quantity
        PAYMENTS: id | order_id | payment_status | transaction_id
      </pre>
    `,
  },
  {
    title: "4. Caching and Performance Optimization",
    content: `
      <p>Techniques for performance improvement:</p>
      <ul>
        <li>Use Redis for caching product details.</li>
        <li>CDN for static assets like images and scripts.</li>
        <li>Database indexing for faster queries.</li>
      </ul>
    `,
  },
  {
    title: "5. Security Considerations",
    content: `
      <ul>
        <li>Encrypt sensitive user data.</li>
        <li>Use OAuth or JWT for secure authentication.</li>
        <li>Prevent SQL injection and XSS attacks.</li>
        <li>Implement rate limiting to prevent abuse.</li>
      </ul>
    `,
  },
  {
    title: "6. Tech Stack",
    content: `
      <pre>
        Frontend: React, Next.js, Bootstrap
        Backend: Node.js (Express/Nest.js), Python (Django/FastAPI)
        Database: PostgreSQL, MongoDB
        Caching: Redis
        Message Queue: Kafka, RabbitMQ
      </pre>
    `,
  },
  {
    title: "7. API Design",
    content: `
      <h5>Product API</h5>
      <pre>
        GET /products
        Response: [{ "id": 1, "name": "Laptop", "price": 50000 }]
      </pre>
      <h5>Order API</h5>
      <pre>
        POST /orders
        { "user_id": 1, "items": [{ "product_id": 1, "quantity": 2 }] }
      </pre>
    `,
  },
];

const ECommercePlatformDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">E-Commerce Platform Design</h2>
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

export default ECommercePlatformDesign;
