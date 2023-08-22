import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Events</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                {/* <a className="hover:text-gray-300">Home</a> */}
                <h2>This</h2>
              </Link>
            </li>
            <li>
              <Link href="/events">
                {/* <a className="hover:text-gray-300">Events</a> */}
                <h2>This</h2>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
