import React from 'react';
import Link from 'next/link';

export default function Navigations() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex space-x-4 justify-center py-4">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="hover:text-blue-400 transition-colors duration-200">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About" legacyBehavior>
                            <a className="hover:text-blue-400 transition-colors duration-200">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Community" legacyBehavior>
                            <a className="hover:text-blue-400 transition-colors duration-200">Community</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" legacyBehavior>
                            <a className="hover:text-blue-400 transition-colors duration-200">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
