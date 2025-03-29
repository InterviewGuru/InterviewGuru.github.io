import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DOMPurify from "dompurify";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>Upload, store, and stream videos.</li>
        <li>Support different video resolutions (480p, 720p, 1080p, 4K).</li>
        <li>Search and recommendation system.</li>
        <li>User authentication and profiles.</li>
        <li>Live streaming support.</li>
        <li>Subscription and monetization options.</li>
      </ul>
      <h5>Non-Functional Requirements</h5>
      <ul>
        <li>High availability and low latency streaming.</li>
        <li>Scalability to handle millions of videos.</li>
        <li>Content delivery optimization via CDNs.</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Architecture",
    content: `
      <p>The system is designed using microservices:</p>
      <ul>
        <li>Video Upload Service: Handles video ingestion and processing.</li>
        <li>Streaming Service: Manages video playback.</li>
        <li>Recommendation Service: Provides personalized content suggestions.</li>
        <li>Authentication Service: Manages user login and access.</li>
        <li>Billing Service: Handles subscriptions and payments.</li>
      </ul>
    `,
  },
  {
    title: "3. Video Processing Pipeline",
    content: `
      <p>Steps for processing uploaded videos:</p>
      <ul>
        <li>Convert videos into multiple resolutions using FFmpeg.</li>
        <li>Store videos in cloud storage (S3, Google Cloud Storage).</li>
        <li>Generate thumbnails and metadata.</li>
        <li>Use CDNs to cache videos for faster delivery.</li>
      </ul>
    `,
  },
  {
    title: "4. Database Schema",
    content: `
      <p>Key Tables:</p>
      <pre>
        USERS: id | name | email | subscription_status
        VIDEOS: id | user_id | title | resolution | storage_url
        VIEWS: id | video_id | user_id | timestamp
        COMMENTS: id | video_id | user_id | comment | timestamp
      </pre>
    `,
  },
  {
    title: "5. Video Streaming Mechanism",
    content: `
      <p>We use adaptive bitrate streaming (HLS/DASH) to ensure smooth playback:</p>
      <ul>
        <li>Client requests video.</li>
        <li>Server delivers appropriate resolution based on bandwidth.</li>
        <li>CDNs optimize delivery for minimal buffering.</li>
      </ul>
    `,
  },
  {
    title: "6. Scaling Considerations",
    content: `
      <ul>
        <li>Use cloud storage for infinite scalability.</li>
        <li>Deploy multiple streaming servers with load balancing.</li>
        <li>Cache frequently watched videos at edge locations using CDNs.</li>
      </ul>
    `,
  },
  {
    title: "7. Security Measures",
    content: `
      <ul>
        <li>DRM (Digital Rights Management) to prevent piracy.</li>
        <li>Rate limiting to prevent abuse.</li>
        <li>OAuth or JWT for secure authentication.</li>
      </ul>
    `,
  },
  {
    title: "8. Tech Stack",
    content: `
      <pre>
        Frontend: React, Next.js, Bootstrap
        Backend: Node.js (Express/Nest.js), Python (Django/FastAPI)
        Database: PostgreSQL, MongoDB
        Video Processing: FFmpeg, AWS Lambda
        CDN: Cloudflare, Akamai
      </pre>
    `,
  },
  {
    title: "9. API Design",
    content: `
      <h5>Upload Video API</h5>
      <pre>
        POST /upload
        { "user_id": 1, "video_file": "file.mp4" }
      </pre>
      <h5>Stream Video API</h5>
      <pre>
        GET /videos/1/stream
        Response: Video file stream
      </pre>
    `,
  },
];

const VideoStreamingDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Video Streaming Service Design</h2>
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

export default VideoStreamingDesign;
