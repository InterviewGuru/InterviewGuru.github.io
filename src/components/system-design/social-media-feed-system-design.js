import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DOMPurify from "dompurify";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>Users can post tweets with text, images, or videos.</li>
        <li>Users can like, comment, and retweet posts.</li>
        <li>Real-time updates for new tweets and interactions.</li>
        <li>Follow/unfollow users and see their feed.</li>
        <li>Trending topics and personalized recommendations.</li>
      </ul>
      <h5>Non-Functional Requirements</h5>
      <ul>
        <li>High availability and low latency.</li>
        <li>Scalable architecture to support millions of users.</li>
        <li>Efficient storage and retrieval of posts.</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Architecture",
    content: `
      <p>The system is designed using microservices:</p>
      <ul>
        <li>Post Service: Handles tweet creation and storage.</li>
        <li>Feed Service: Aggregates posts from followed users.</li>
        <li>Notification Service: Sends real-time alerts.</li>
        <li>Search Service: Enables searching tweets and users.</li>
        <li>Recommendation Service: Suggests tweets and trends.</li>
      </ul>
    `,
  },
  {
    title: "3. Feed Generation Strategies",
    content: `
      <p>There are two primary approaches to generating user feeds:</p>
      <ul>
        <li><b>Pull-based:</b> When a user requests their feed, it is generated on the fly.</li>
        <li><b>Push-based:</b> Precompute and store personalized feeds in advance.</li>
        <li><b>Hybrid:</b> Use a mix of pull and push strategies for scalability.</li>
      </ul>
    `,
  },
  {
    title: "4. Database Schema",
    content: `
      <p>Key Tables:</p>
      <pre>
        USERS: id | name | email | created_at
        POSTS: id | user_id | content | media_url | timestamp
        LIKES: id | post_id | user_id | timestamp
        FOLLOWERS: id | follower_id | following_id
      </pre>
    `,
  },
  {
    title: "5. Caching and Optimization",
    content: `
      <ul>
        <li>Use Redis or Memcached to store frequently accessed posts.</li>
        <li>Precompute user timelines and store them in distributed caches.</li>
        <li>Use pagination and lazy loading for infinite scrolling.</li>
      </ul>
    `,
  },
  {
    title: "6. Scaling Considerations",
    content: `
      <ul>
        <li>Use database sharding to distribute tweets across multiple servers.</li>
        <li>Partition user timelines to optimize retrieval times.</li>
        <li>Use Kafka for real-time event streaming of new posts.</li>
      </ul>
    `,
  },
  {
    title: "7. Security Measures",
    content: `
      <ul>
        <li>Rate limiting to prevent spam and abuse.</li>
        <li>Content moderation to remove harmful posts.</li>
        <li>OAuth or JWT authentication for secure access.</li>
      </ul>
    `,
  },
  {
    title: "8. Tech Stack",
    content: `
      <pre>
        Frontend: React, Next.js, Bootstrap
        Backend: Node.js (Express/Nest.js), Python (Django/FastAPI)
        Database: PostgreSQL, MongoDB, Cassandra
        Cache: Redis, Memcached
        Queue: Kafka, RabbitMQ
      </pre>
    `,
  },
  {
    title: "9. API Design",
    content: `
      <h5>Create Tweet API</h5>
      <pre>
        POST /tweet
        { "user_id": 1, "content": "Hello World!" }
      </pre>
      <h5>Get User Feed API</h5>
      <pre>
        GET /feed?user_id=1
        Response: List of tweets from followed users
      </pre>
    `,
  },
];

const SocialMediaFeedDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Scaling a Social Media Feed</h2>
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

export default SocialMediaFeedDesign;
