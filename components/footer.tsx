import Layout from './layout';
import Link from 'next/link';

function Footer() {
  const links: { href: string; text: string }[] = [
    { href: '/about', text: 'About Us' },
    { href: '/', text: 'Blog' },
    { href: '/', text: 'Resources' },
    { href: '/', text: 'Careers' },
    { href: '/', text: 'Press' },
  ];

  const socials: { name: string; url: string }[] = [
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'twitter', url: 'https://twitter.com' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
  ];

  return (
    <Layout
      parent="bg-footer-image bg-cover"
      child="py-12 text-white md:px-32 lg:px-6"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 py-8 border-solid border-b-2 border-gray-700 lg:border-b-0 lg:border-r-2">
          <h3 className="text-lg font-medium">Who We are?</h3>
          <div className="text-black-lighter text-sm leading-loose pt-5 lg:pr-24">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="lg:w-3/12 py-8 border-solid border-b-2 border-gray-700 lg:pl-12 lg:pr-32 lg:border-b-0 lg:border-r-2">
          <h3 className="text-lg font-medium">Know Us</h3>
          <div className="pt-5 leading-loose flex flex-col items-start">
            {links.map(({ href, text }) => (
              <Link href={href} key={text}>
                <a className="text-sm text-black-lighter hover:text-white transition-colors duration-100">
                  {text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-3/12 py-8 lg:pl-12">
          <h3 className="text-lg font-medium">Connect</h3>
          <div className="flex gap-5 py-6">
            {socials.map(({ name, url }) => (
              <Link href={url} key={name}>
                <a target="_blank">
                  <img
                    src={`social/${name}.svg`}
                    alt={name}
                    className="h-6 md:h-auto"
                    draggable={false}
                  />
                </a>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-medium">Give us a call</h3>
          <p className="text-sm text-black-lighter py-2">+91 9123456789</p>
        </div>
      </div>
      <p className="text-xs lg:text-center text-black-lighter md:text-sm md:pt-10">
        &copy; 2020 Araxis Systems Inc., All rights reserved
      </p>
    </Layout>
  );
}

export default Footer;
