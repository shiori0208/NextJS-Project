import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gradient-to-tr from-sky-100 via-indigo-100 to-indigo-200 min-h-screen flex items-center justify-center">
        <main className="bg-white shadow-xl rounded-3xl px-8 py-12 text-center max-w-md w-full">
          <div className="text-5xl font-extrabold text-indigo-600 mb-2 tracking-wide">404</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
          <p className="text-base text-slate-600 mb-8">
            Sorry, the page you are looking for doesn’t exist.<br />
            Please check the URL or click below to go home.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 hover:from-indigo-600 hover:to-sky-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
          >
            Go Home
          </a>
        </main>
      </body>
    </html>
  )
}
