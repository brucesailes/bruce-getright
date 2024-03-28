import React from 'react';
import Link from 'next/link';

export default function Community() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to the Community</h1>
            <p className="text-lg text-gray-600 mb-4">
                Our community is at the heart of Get Right. It&apos;s where like-minded individuals come together to share experiences, support each other, and grow together towards achieving personal health and wellness goals.
            </p>
            <p className="text-lg text-gray-600 mb-4">
                Whether you&apos;re looking for advice, motivation, or just a place to share your journey, you&apos;ve found the right spot. Dive into discussions, join our events, and make meaningful connections that help propel you and others towards a healthier life.
            </p>
            <p className="text-lg text-gray-600">
                Ready to be a part of something bigger? Join our community today and start engaging with peers who are just as passionate about health and wellness as you are.
            </p>
            <div className="text-center">
                <Link href="/Join" legacyBehavior>
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded transition duration-300 ease-in-out">
                        Join Now
                    </a>
                </Link>
            </div>
        </div>
    );
}
