import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DOMPurify from "dompurify";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>Real-time messaging between users.</li>
        <li>Group chats and direct messages.</li>
        <li>Read receipts and typing indicators.</li>
        <li>Message history and search functionality.</li>
        <li>File and media sharing.</li>
        <li>Push notifications for new messages.</li>
      </ul>
      <h5>Non-Functional Requirements</h5>
      <ul>
        <li>Low latency and high availability.</li>
        <li>End-to-end encryption for security.</li>
        <li>Scalability to support millions of users.</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Architecture",
    content: `
      <p>The system is built using a microservices architecture:</p>
      <ul>
        <li>Authentication Service: Handles user login and registration.</li>
        <li>Messaging Service: Manages real-time chat functionality.</li>
        <li>Media Service: Stores and delivers media files.</li>
        <li>Notification Service: Sends push notifications.</li>
      </ul>
    `,
  },
  {
    title: "3. Database Schema",
    content: `
      <p>Key Tables:</p>
      <pre>
        USERS: id | name | email | password_hash
        CHATS: id | type (group/private) | created_at
        MESSAGES: id | chat_id | sender_id | content | timestamp
        PARTICIPANTS: id | chat_id | user_id
      </pre>
    `,
  },
  {
    title: "4. Real-Time Messaging",
    content: `
      <p>We use WebSockets for real-time communication. When a message is sent:</p>
      <ul>
        <li>The client sends the message over a WebSocket connection.</li>
        <li>The server processes and stores the message in the database.</li>
        <li>The server broadcasts the message to all connected participants.</li>
      </ul>
    `,
  },
  {
    title: "5. Scaling Considerations",
    content: `
      <ul>
        <li>Use message queues (Kafka, RabbitMQ) to handle high traffic.</li>
        <li>Shard the database to distribute load.</li>
        <li>Use load balancers to manage WebSocket connections.</li>
      </ul>
    `,
  },
  {
    title: "6. Security Measures",
    content: `
      <ul>
        <li>End-to-end encryption for private conversations.</li>
        <li>Rate limiting to prevent spamming.</li>
        <li>OAuth or JWT for authentication.</li>
      </ul>
    `,
  },
  {
    title: "7. Tech Stack",
    content: `
      <pre>
        Frontend: React, Next.js, Bootstrap
        Backend: Node.js (Express/Nest.js), Python (Django/FastAPI)
        Database: PostgreSQL, MongoDB
        Real-Time Communication: WebSockets, Socket.IO
        Message Queue: Kafka, RabbitMQ
      </pre>
    `,
  },
  {
    title: "8. API Design",
    content: `
      <h5>Send Message API</h5>
      <pre>
        POST /messages
        { "chat_id": 1, "sender_id": 2, "content": "Hello!" }
      </pre>
      <h5>Fetch Messages API</h5>
      <pre>
        GET /chats/1/messages
        Response: [{ "id": 1, "sender_id": 2, "content": "Hello!" }]
      </pre>
    `,
  },
];

const RealTimeChatDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Real-Time Chat Application Design</h2>
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

export default RealTimeChatDesign;
