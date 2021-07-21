import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="min-w-full h-12  flex items-center justify-between px-5 bg-transparent">
      <Link href="/">
        <a className="text-lg font-bold	tracking-wider cursor-pointer hover:scale-110 transition-all">Next Movies</a>
      </Link>
      <div className="flex items-center justify-between w-64">
        <Link href="/titles">
          <a className="cursor-pointer hover:underline" style={{ textDecorationColor: '#10B981' }}>
            Search by Title
          </a>
        </Link>
        <Link href="/genres">
          <a className="cursor-pointer hover:underline" style={{ textDecorationColor: '#10B981' }}>
            Search by Genre
          </a>
        </Link>
      </div>
    </nav>
  );
}
