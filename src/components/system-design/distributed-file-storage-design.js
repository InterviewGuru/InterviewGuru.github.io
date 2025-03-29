import React from "react";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const sections = [
  {
    title: "1. Requirements",
    content: `
      <h5>Functional Requirements</h5>
      <ul>
        <li>Store and retrieve files efficiently.</li>
        <li>Support multiple file types and large file sizes.</li>
        <li>Enable file sharing with permissions.</li>
        <li>Version control and file synchronization.</li>
        <li>Search and metadata management.</li>
        <li>Provide access across multiple devices and platforms.</li>
        <li>Offer collaboration features like real-time editing and commenting.</li>
      </ul>
    `,
  },
  {
    title: "2. High-Level Architecture",
    content: `
      <p>The system follows a distributed model with the following components:</p>
      <ul>
        <li><strong>Client:</strong> Web and mobile apps to upload, download, and manage files.</li>
        <li><strong>API Gateway:</strong> Routes requests and ensures authentication and load balancing.</li>
        <li><strong>Metadata Service:</strong> Manages file metadata, indexing, and user permissions.</li>
        <li><strong>Storage Nodes:</strong> Distributed storage handling file chunks.</li>
        <li><strong>Replication & Backup:</strong> Ensures high availability and disaster recovery.</li>
      </ul>
    `,
  },
  {
    title: "3. Data Flow",
    content: `
      <ol>
        <li>User uploads a file via the client application.</li>
        <li>The API Gateway forwards the request to the Storage Service.</li>
        <li>The file is chunked and stored across multiple Storage Nodes.</li>
        <li>Metadata is saved in the Metadata Database.</li>
        <li>On retrieval, chunks are reassembled and sent to the user.</li>
      </ol>
    `,
  },
  {
    title: "4. Database Schema",
    content: `
      <p>Table: FILE_METADATA</p>
      <pre>
        ID | File Name | Owner | Storage Location | Version | Permissions | Last Accessed
        --------------------------------------------------------------------------------
        1  | doc.pdf  | user1 | node123         | v1      | private      | 2025-03-29
      </pre>
      <p>Table: CHUNK_METADATA</p>
      <pre>
        Chunk ID | File ID | Storage Node | Checksum | Replication Count
        ---------------------------------------------------------------
        C1      | 1       | nodeA        | abc123   | 3
      </pre>
    `,
  },
  {
    title: "5. Storage Strategy",
    content: `
      <ul>
        <li>Files are chunked into smaller parts before storage.</li>
        <li>Each chunk is stored redundantly across multiple nodes.</li>
        <li>Erasure coding is used to optimize storage efficiency.</li>
      </ul>
    `,
  },
  {
    title: "6. Security Measures",
    content: `
      <ul>
        <li>Encryption: Files are encrypted at rest and in transit.</li>
        <li>Authentication: OAuth2 and JWT tokens for access control.</li>
        <li>Role-based permissions for sharing and editing.</li>
      </ul>
    `,
  },
  {
    title: "7. Scalability and Performance",
    content: `
      <ul>
        <li>Horizontal scaling: More storage nodes can be added dynamically.</li>
        <li>Caching with Redis for frequent file metadata requests.</li>
        <li>CDN integration for faster global file delivery.</li>
      </ul>
    `,
  },
  {
    title: "8. Failure Handling & Recovery",
    content: `
      <ul>
        <li>Replication ensures multiple copies of a file exist.</li>
        <li>Automated backups for disaster recovery.</li>
        <li>Self-healing mechanisms detect and replace corrupted chunks.</li>
      </ul>
    `,
  },
  {
    title: "9. Tech Stack",
    content: `
      <pre>
        API: Node.js, FastAPI, Go
        Storage: AWS S3, Google Cloud Storage, HDFS
        Database: PostgreSQL, DynamoDB, Cassandra
        Load Balancer: Nginx, HAProxy
        Caching: Redis, CDN (Cloudflare, Akamai)
      </pre>
    `,
  },
  {
    title: "10. API Design",
    content: `
      <h5>Upload File API</h5>
      <pre>
        POST /upload
        { "file": "binary_data", "metadata": { "owner": "user1" } }
      </pre>
      <h5>Download File API</h5>
      <pre>
        GET /file/{file_id}
        Response: Binary File Data
      </pre>
      <h5>File Sharing API</h5>
      <pre>
        POST /share
        { "file_id": "123", "shared_with": "user2", "permissions": "read" }
      </pre>
    `,
  },
];

const DistributedFileStorageDesign = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Distributed File Storage System Design</h2>
      <div>
        {sections.map((section, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-header"><h5>{section.title}</h5></div>
            <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributedFileStorageDesign;
