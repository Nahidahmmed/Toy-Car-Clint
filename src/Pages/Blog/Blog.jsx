

const Blog = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Answers and Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Answers and Questions are below.
                    </p>
                </div>
                <h1 className='font-semibold'>* What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span className='font-bold'>Ans:</span> Access tokens and refresh tokens are fundamental components of authentication in client-server applications. An access token is a short-lived credential that authorizes a client to access specific resources on behalf of a user. It is issued upon successful authentication and included with each request to verify authorization. Stored securely on the client-side, access tokens are typically held in memory or local storage. On the other hand, a refresh token is a long-lived credential used to obtain a new access token when the current one expires. It allows the client to request a fresh access token without user re-authentication. Refresh tokens have a longer lifespan and should be securely stored, preferably in an HTTP-only cookie or a secure storage mechanism. Following best practices ensures the protection of these tokens against security vulnerabilities.</p> <br />

                <h1 className='font-semibold'>* Compare SQL and NoSQL databases?</h1>
                <p><span className='font-bold'>Ans:
                    </span>SQL and NoSQL databases differ in their structure, query language, schema, scalability, and ACID compliance. SQL databases follow a relational model with structured tables, enforcing data consistency and predefined relationships using SQL for querying. They have rigid schemas and are vertically scalable. SQL databases provide ACID properties and are suitable for applications requiring strict data integrity. Examples include MySQL and PostgreSQL. On the other hand, NoSQL databases offer flexible schemas, allowing for unstructured or semi-structured data. They use various query languages and support horizontal scalability by adding more machines. NoSQL databases prioritize scalability over strict ACID compliance and are commonly used in big data or real-time applications. Examples include MongoDB and Cassandra. Choosing between SQL and NoSQL depends on specific use case requirements and trade-offs regarding data consistency, flexibility, and scalability.</p> <br />
                <h1 className='font-semibold'>* What is express js? What is Nest JS ?</h1>
                <p><span className='font-bold'>Ans:</span>Express.js is a lightweight and flexible web framework for Node.js. It provides a minimalistic approach to building web applications and APIs. With its modular design, Express.js allows developers to select and integrate middleware and libraries based on their specific needs. It offers a routing system, middleware functions for request handling, and utilities for managing cookies, sessions, and authentication. Known for its simplicity and vast community support, Express.js is widely used for developing server-side applications in JavaScript.</p> <br />
                <h1 className='font-semibold'>*
                    What is MongoDB aggregate and how does it work?</h1>
                <p><span className='font-bold'>Ans:
                   </span>mongo db aggregate is a flexible and powerful feature that enables advanced data processing and aggregation on collections. It operates using a pipeline model, where data flows through a series of stages, each performing a specific operation. The pipeline stages can include filtering, grouping, sorting, projecting, and performing calculations on the data. Each stage takes input from the previous stage and produces output for the next, allowing for complex and customized data transformations. The aggregate framework in MongoDB provides a versatile and efficient way to analyze and aggregate data based on specific criteria, making it a valuable tool for data-driven applications.</p>

            </div>
        </section>
    );
};

export default Blog;