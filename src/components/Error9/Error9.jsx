// Error9.jsx
import React from 'react';

const Error9 = () => {
    return (
        <section className="py-10 bg-white font-serif">
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col">
                    <div className="text-center">
                        <div
                            className="bg-center bg-no-repeat h-96 w-full"
                            style={{
                                backgroundImage:
                                    "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                            }}
                        >
                            <h1 className="text-8xl pb-20">404</h1>
                        </div>
                        <div className="mt-[33px]">
                            <h3 className="text-4xl">Look like you're lost</h3>
                            <p className="mt-4">The page you are looking for is not available!</p>
                            <a
                                href="/"
                                className="inline-block mt-5 px-5 py-2 bg-green-600 text-white rounded"
                            >
                                Go to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error9;
