import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center py-8 '>
            <div className='my-8'>
                <h1 className='lg:text-5xl md:text-4xl text-xl text-yellow-400'>Some Question and ans.</h1>
            </div>
            <div className='my-4 py-4 bg-zinc-100 rounded-lg font-serif'>
                <h1 className='text-xl my-2 px-8 '>Difference between SQL and NoSQL.</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        </p>
                        <p className='text-xl'>Main Difference</p>
                        <li>Type –</li>
                        <li>Language –</li>
                        <li>Scalability –</li>
                        <li>Structure –</li>
                        <p>
                            Sql:-
                        </p>
                        <p>
                            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            NoSQL:-
                        </p>
                        <p>
                            Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance).Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-zinc-100 rounded-lg font-serif'>
                <h1 className='text-xl my-2 px-8 '>What is JWT, and how does it work?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        </p>
                        <p>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                        <p>
                            workin process:- Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                        </p>
                        <ul>
                            <li>User sign-in using username and password or google/facebook.</li>
                            <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                            <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                            <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-zinc-100 rounded-lg font-serif'>
                <h1 className='text-xl my-2 px-8 '>What is the difference between javascript and NodeJS?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                        <p className='text-xl py-2'>Main Difference:-</p>
                        <ul>
                            <li>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                                <br />
                                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                            </li>
                            <li>Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</li>
                            <li> A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                                <br />
                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                            </li>
                            <li> The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                                <br />
                                Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-zinc-100 rounded-lg font-serif'>
                <h1 className='text-xl my-2 px-8 '>How does Node.Js handle multiple requests at the same time?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p className='py-2'>
                            Node.Js receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>

                        <ul>
                            <li>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            </li>
                            <li>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                            </li>
                            <li> A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;