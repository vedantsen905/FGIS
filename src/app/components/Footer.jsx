'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© Copyright FGIS {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacypolicy" 
            className="text-sm hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <span className="w-px h-4 bg-gray-600"></span>
          <Link
            href="/terms" 
            className="text-sm hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            TERMS AND CONDITIONS
          </Link>
        </div>
      </div>
    </footer>
  );
}