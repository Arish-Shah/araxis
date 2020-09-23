import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Layout from './layout';

interface NavItem {
  text: string;
  href: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parentRef = useRef();
  const navbarContainerRef = useRef();

  const handleScroll = () => {
    const navbarClassList = (navbarContainerRef.current as HTMLInputElement)
      .classList;
    const parentClassList = (parentRef.current as HTMLDivElement).classList;
    const add = (classNames, classList) =>
      classNames.split(' ').map(className => classList.add(className));
    const remove = (classNames, classList) =>
      classNames.split(' ').map(className => classList.remove(className));

    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      add('py-4', navbarClassList);
      remove('py-8 lg:py-6', navbarClassList);
      add('shadow', parentClassList);
    } else {
      remove('py-4', navbarClassList);
      add('py-8 lg:py-6', navbarClassList);
      remove('shadow', parentClassList);
    }
  };

  const icon = isOpen ? Cross : Hamburger;
  const pathname = useRouter().pathname;

  const links: NavItem[] = [
    { text: 'Home', href: '/' },
    { text: 'Job Seekers', href: '/job-seekers' },
    { text: 'Recruiters', href: '/recruiters' },
    { text: 'IT Solutions', href: '/it-solutions' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  const phoneLink: NavItem = {
    text: '+1-703-763-5282',
    href: 'tel:+17037635282',
  };

  const smClasses =
    'font-semibold text-lg border-solid border-b-2 py-1 my-1 hover:text-red transition-colors duration-200 ease-in-out';

  const lgClasses =
    'text-sm font-semibold border-solid border-b-2 py-1 mr-8 hover:text-red transition-colors duration-200 ease-in-out';

  return (
    <>
      <Head>
        <title>Araxis</title>
      </Head>
      <Layout
        parent="z-20 fixed top-0 left-0 right-0 bg-white"
        child="z-20 flex justify-between items-center"
        parentRef={parentRef}
      >
        <div
          className="transition-all duration-300 py-8 lg:py-6"
          ref={navbarContainerRef}
        >
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
        {/* The Hamburger/Cross icon */}
        <div className="lg:hidden relative z-40">
          <button
            onClick={() => setIsOpen(open => !open)}
            className={`${isOpen ? 'text-red' : 'text-blue'}`}
          >
            {icon}
          </button>
        </div>
        {/* Big screen navigation */}
        <div className="hidden lg:flex flex-row">
          {links.map(({ href, text }) => {
            const classes =
              pathname === href
                ? 'border-red text-red'
                : 'text-blue border-transparent';
            return (
              <Link href={href} key={href}>
                <a className={`${classes} ${lgClasses}`}>{text}</a>
              </Link>
            );
          })}
          <div className="hidden lg:block">
            <Link href={phoneLink.href}>
              <a
                className={`text-blue border-transparent flex gap-2 ${lgClasses}`}
              >
                {call} {phoneLink.text}
              </a>
            </Link>
          </div>
        </div>
        {/* Small screen navigation */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:hidden z-30 fixed top-0 left-0 right-0 bg-white p-8 pt-12 m-4 border-solid shadow-lg rounded flex flex-col items-center`}
        >
          {links.map(({ href, text }) => {
            const classes =
              pathname === href
                ? 'border-red text-red'
                : 'text-blue border-transparent';
            return (
              <Link href={href} key={href}>
                <a className={`${classes} ${smClasses}`}>{text}</a>
              </Link>
            );
          })}
          <Link href={phoneLink.href}>
            <a
              className={`text-blue border-transparent flex gap-2 ${smClasses}`}
            >
              {call} {phoneLink.text}
            </a>
          </Link>
        </div>
      </Layout>
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

const call = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.272"
    height="19.305"
    viewBox="0 0 19.272 19.305"
  >
    <path
      id="call"
      d="M13.8,4.787a4.109,4.109,0,0,1,3.246,3.246M13.8,1.5a7.4,7.4,0,0,1,6.533,6.525m-.822,6.558v2.465a1.644,1.644,0,0,1-1.792,1.644,16.264,16.264,0,0,1-7.092-2.523A16.025,16.025,0,0,1,5.7,11.238,16.263,16.263,0,0,1,3.174,4.113,1.644,1.644,0,0,1,4.81,2.322H7.275A1.644,1.644,0,0,1,8.919,3.735a10.552,10.552,0,0,0,.575,2.309,1.644,1.644,0,0,1-.37,1.734L8.081,8.822a13.149,13.149,0,0,0,4.931,4.931l1.044-1.044a1.644,1.644,0,0,1,1.734-.37,10.552,10.552,0,0,0,2.309.575A1.644,1.644,0,0,1,19.512,14.583Z"
      transform="translate(-2.167 -0.396)"
      fill="none"
      stroke="#eb4a54"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default Navbar;
