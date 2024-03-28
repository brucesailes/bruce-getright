import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        <div className="mb-4 lg:mb-0">
          <ul className="flex justify-center lg:justify-start space-x-6">
            <li>
              <a className="hover:scale-110 transition-transform" href="https://www.linkedin.com/in/brucesailes" target="_blank" rel="noopener noreferrer" title="Bruce Sailes on LinkedIn">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
            </li>
            <li>
              <a className="hover:scale-110 transition-transform" href="https://www.youtube.com/@BruceSailes" target="_blank" rel="noopener noreferrer" title="Bruce Sailes on YouTube">
                <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
              </a>
            </li>
            <li>
              <a className="hover:scale-110 transition-transform" href="https://www.instagram.com/thebrucesailes" target="_blank" rel="noopener noreferrer" title="Bruce Sailes on Instagram">
                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
            </li>
            <li>
              <a className="hover:scale-110 transition-transform" href="https://github.com/brucesailes" target="_blank" rel="noopener noreferrer" title="Bruce Sailes on GitHub">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm lg:text-base">
            &copy; All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
