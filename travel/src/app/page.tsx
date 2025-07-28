
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-white px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4 text-center">
      What destination matches your personality?
    </h2>
    <p className="text-base sm:text-lg text-green-700 mb-8 text-center max-w-md">
      Take our quiz and find out!
    </p>
    <Link href="/question">
  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition cursor-pointer text-sm sm:text-base">
    Start!
  </button>
</Link>
  </div>
  );
}
