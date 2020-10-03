import Layout from './layout';
import Link from 'next/link';

function Footer() {
  const links: { href: string; text: string }[] = [
    { text: 'Home', href: '/' },
    { text: 'For Seekers', href: '/for-seekers' },
    { text: 'For Recruiters', href: '/for-recruiters' },
    { text: 'IT Solutions', href: '/it-solutions' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <Layout
      parent="bg-footer-image-dark bg-cover brightness-50"
      child="py-12 text-white md:px-32 lg:px-6"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 py-8 border-solid border-b border-white lg:border-b-0 lg:border-r">
          <h3 className="text-lg font-medium">Who We are?</h3>
          <div className="text-black-lighter text-sm leading-loose pt-5 lg:pr-24">
            With a decade of experience in the IT Consulting services industry,
            we at Araxis are mavericks at matching technical professionals who
            help you connect and match with talent, partners and companies.
          </div>
        </div>
        <div className="lg:w-3/12 py-8 border-solid border-b border-white lg:pl-12 lg:pr-32 lg:border-b-0 lg:border-r">
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
            <Link href="/">
              <a target="_blank">{facebook}</a>
            </Link>
            <Link href="/">
              <a target="_blank">{twitter}</a>
            </Link>
            <Link href="facebook">
              <a target="_blank">{instagram}</a>
            </Link>
            <Link href="facebook">
              <a target="_blank">{linkedin}</a>
            </Link>
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

const facebook = (
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-4">
    <path d="M14.199 15.958l.788-5.134h-4.926V7.492a2.567 2.567 0 012.895-2.774h2.235V.347A27.313 27.313 0 0011.219 0C7.162 0 4.51 2.459 4.51 6.911v3.913H0v5.134h4.51V28.37h5.55V15.958z" />
  </svg>
);

const facebookColor = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.195 28.37">
    <path
      d="M15.808,15.958l.788-5.134H11.67V7.492a2.567,2.567,0,0,1,2.895-2.774H16.8V.347A27.312,27.312,0,0,0,12.828,0C8.771,0,6.119,2.459,6.119,6.911v3.913H1.609v5.134h4.51V28.37h5.55V15.958Z"
      transform="translate(-1.609)"
      fill="#3b5998"
    />
  </svg>
);

const twitter = (
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8">
    <path d="M29.56 6.668c.021.293.021.585.021.878 0 8.926-6.794 19.211-19.212 19.211A19.081 19.081 0 010 23.727a13.969 13.969 0 001.631.084 13.523 13.523 0 008.383-2.885A6.764 6.764 0 013.7 16.243a8.515 8.515 0 001.275.1 7.142 7.142 0 001.777-.23 6.753 6.753 0 01-5.414-6.627v-.084a6.8 6.8 0 003.052.857A6.762 6.762 0 012.3 1.233a19.193 19.193 0 0013.922 7.066 7.622 7.622 0 01-.167-1.547 6.759 6.759 0 0111.686-4.62A13.294 13.294 0 0032.027.501a6.734 6.734 0 01-2.969 3.718 13.536 13.536 0 003.888-1.045 14.515 14.515 0 01-3.387 3.491z" />
  </svg>
);

const twitterColor = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.946 26.758">
    <path
      d="M29.56,10.049c.021.293.021.585.021.878,0,8.926-6.794,19.211-19.212,19.211A19.081,19.081,0,0,1,0,27.108a13.969,13.969,0,0,0,1.631.084,13.523,13.523,0,0,0,8.383-2.885A6.764,6.764,0,0,1,3.7,19.624a8.515,8.515,0,0,0,1.275.1,7.142,7.142,0,0,0,1.777-.23,6.753,6.753,0,0,1-5.414-6.627v-.084a6.8,6.8,0,0,0,3.052.857A6.762,6.762,0,0,1,2.3,4.614,19.193,19.193,0,0,0,16.222,11.68a7.622,7.622,0,0,1-.167-1.547,6.759,6.759,0,0,1,11.686-4.62,13.294,13.294,0,0,0,4.286-1.631A6.734,6.734,0,0,1,29.058,7.6a13.536,13.536,0,0,0,3.888-1.045,14.515,14.515,0,0,1-3.387,3.491Z"
      transform="translate(0 -3.381)"
      fill="#55acee"
    />
  </svg>
);

const instagram = (
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8">
    <path d="M14.425 7.025a7.394 7.394 0 107.394 7.394 7.382 7.382 0 00-7.394-7.394zm0 12.2a4.807 4.807 0 114.807-4.807 4.816 4.816 0 01-4.807 4.807zm9.42-12.503a1.725 1.725 0 11-1.725-1.725 1.721 1.721 0 011.725 1.725zm4.9 1.75a8.534 8.534 0 00-2.329-6.042A8.59 8.59 0 0020.374.101c-2.381-.135-9.517-.135-11.9 0A8.578 8.578 0 002.43 2.424 8.562 8.562 0 00.105 8.462c-.135 2.381-.135 9.517 0 11.9a8.534 8.534 0 002.329 6.042 8.6 8.6 0 006.042 2.329c2.381.135 9.517.135 11.9 0a8.534 8.534 0 006.042-2.329 8.59 8.59 0 002.324-6.042c.135-2.381.135-9.511 0-11.891zm-3.078 14.447a4.866 4.866 0 01-2.742 2.743c-1.9.753-6.4.579-8.5.579s-6.609.167-8.5-.579a4.866 4.866 0 01-2.741-2.741c-.753-1.9-.579-6.4-.579-8.5s-.167-6.608.579-8.5a4.866 4.866 0 012.741-2.744c1.9-.753 6.4-.579 8.5-.579s6.609-.167 8.5.579a4.866 4.866 0 012.741 2.741c.753 1.9.579 6.4.579 8.5s.174 6.609-.578 8.501z" />
  </svg>
);

const linkedin = (
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8">
    <path d="M26.371 0H2.022A2.037 2.037 0 000 2.05v24.3a2.037 2.037 0 002.022 2.05h24.349a2.043 2.043 0 002.029-2.05V2.05A2.043 2.043 0 0026.371 0zM8.583 24.343H4.374V10.789H8.59v13.554zm-2.1-15.4a2.441 2.441 0 112.436-2.445 2.442 2.442 0 01-2.441 2.441zm17.883 15.4h-4.213V17.75c0-1.572-.032-3.594-2.187-3.594-2.193 0-2.529 1.712-2.529 3.48v6.707h-4.21V10.789h4.038v1.851h.057a4.434 4.434 0 013.987-2.19c4.26 0 5.052 2.808 5.052 6.46z" />
  </svg>
);

const linkedinColor = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.4 28.4">
    <path
      d="M26.371,2.25H2.022A2.037,2.037,0,0,0,0,4.3V28.6A2.037,2.037,0,0,0,2.022,30.65H26.371A2.043,2.043,0,0,0,28.4,28.6V4.3A2.043,2.043,0,0,0,26.371,2.25ZM8.583,26.593H4.374V13.039H8.59V26.593Zm-2.1-15.4A2.441,2.441,0,1,1,8.919,8.748a2.442,2.442,0,0,1-2.441,2.441Zm17.883,15.4H20.153V20c0-1.572-.032-3.594-2.187-3.594-2.193,0-2.529,1.712-2.529,3.48v6.707H11.227V13.039h4.038v1.851h.057A4.434,4.434,0,0,1,19.309,12.7c4.26,0,5.052,2.808,5.052,6.46Z"
      transform="translate(0 -2.25)"
      fill="#007ab9"
    />
  </svg>
);

export default Footer;
