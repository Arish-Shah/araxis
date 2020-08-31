import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from './layout';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'initial';
    }
  }, [isOpen]);

  const icon = isOpen ? Cross : Hamburger;
  const pathname = useRouter().pathname;

  const links: { href: string; text: string }[] = [
    { text: 'Home', href: '/' },
    { text: 'Job Seekers', href: '/job-seekers' },
    { text: 'Recruiters', href: '/recruiters' },
    { text: 'IT Solutions', href: '/it-solutions' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: '+1-703-763-5282', href: 'tel:+17037635282' },
  ];

  return (
    <>
      <Head>
        <title>Araxis</title>
      </Head>
      <Layout
        parent="border-solid border-b-2 border-gray-200"
        child="py-6 flex justify-between items-center lg:py-4"
      >
        <div>
          <Link href="/">
            <a>
              <img
                src="/logo.svg"
                alt="Araxis"
                className="h-12"
                draggable={false}
              />
            </a>
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(open => !open)}
            className={`${isOpen ? 'text-red' : 'text-blue'} z-20 relative`}
          >
            {icon}
          </button>
        </div>
        <div className="hidden lg:flex flex-row">
          {links.map(({ href, text }) => {
            const classes =
              pathname === href
                ? 'border-red text-red'
                : 'text-blue border-transparent';
            return (
              <Link href={href} key={href}>
                <a
                  className={`${classes} text-sm font-medium border-solid border-b-2 py-1 ml-6 hover:text-red transition-colors duration-200 ease-ino-out`}
                >
                  {text}
                </a>
              </Link>
            );
          })}
        </div>
      </Layout>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden fixed top-0 left-0 right-0 bg-white z-10 p-8 pt-12 m-4 border-solid border rounded border-gray-300 flex flex-col items-center`}
      >
        {links.map(({ href, text }) => {
          const classes =
            pathname === href
              ? 'border-red text-red'
              : 'text-blue border-transparent';
          return (
            <Link href={href} key={href}>
              <a
                className={`${classes} font-medium text-lg border-solid border-b-2 py-1 my-1 hover:text-red transition-colors duration-200 ease-ino-out`}
              >
                {text}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

const Cross = (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
    />
  </svg>
);

const Hamburger = (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    />
  </svg>
);

export default Navbar;
