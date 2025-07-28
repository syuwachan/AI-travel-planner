
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      What destination matches your personality?
    </h2>
    <p className="text-lg text-gray-600 mb-8 text-center">
      Take our quiz and find out!
    </p>
    <Link href="/question">
  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition cursor-pointer">
    Start!
  </button>
</Link>
  </div>
  );
}
