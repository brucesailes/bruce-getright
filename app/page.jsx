// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Hero section */}
      <section className="text-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Get Right</h1>
        <p className="text-xl text-gray-600 mb-4">Your journey to a healthier life begins here. Join our community to unlock your full potential.</p>
        <Link href="/Join" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join the Community
          </a>
        </Link>
      </section>
      
      {/* Featured Image */}
      {/* <div className="relative w-full h-64 mt-8">
        <Image
          src="/hero-image.jpg" // Replace with your desired image path
          alt="A healthier life"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
    </div>
  );
}
