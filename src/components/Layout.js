import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Anime Watch List</h1>
          <nav className="space-x-4">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:underline">Home</a>
            </Link>
            <Link href="/management" legacyBehavior>
              <a className="text-white hover:underline">Management</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="text-white hover:underline">Login</a>
            </Link>
            <Link href="/register" legacyBehavior>
              <a className="text-white hover:underline">Register</a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

