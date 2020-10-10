import Link from 'next/link';
import Layout from '../layout';

function Hero() {
  return (
    <Layout child="py-10 pt-32 my-4 flex flex-col md:px-32 lg:px-6 lg:flex-row lg:items-center lg:py-12 lg:pt-32">
      <div className="lg:w-7/12 xl:w-5/12 lg:mr-5">
        <h1 className="text-blue font-semibold text-3xl md:text-4xl leading-snug">
          Connecting the right developers with great companies: That’s Araxis in
          a nutshell.
        </h1>
        <p className="text-black-light text-sm py-6 pb-8 lg:pb-6">
          Looking to hire IT professionals, tie-up with experienced IT
          outsourcing partners, or propel a career in IT: Araxis delivers on all
          verticals.
        </p>
        <div className="flex lg:mt-4 flex-col md:flex-row">
          <RedButton text="Find Work" href="/for-seekers" />
          <BlueButton text="Hire Talent" href="/for-recruiters" />
        </div>
      </div>
      <div className="mt-12 xl:mt-0 xl:w-7/12 lg:ml-5">
        <img
          src="/home-banner-illustration.svg"
          alt="People"
          draggable={false}
        />
      </div>
    </Layout>
  );
}

const buttonStyles =
  'bg-gradient-to-r uppercase font-medium text-xl text-white rounded-none py-4 flex-auto lg:flex-none lg:px-12';

export const RedButton = ({ text, href }: { text: string; href?: string }) =>
  href ? (
    <Link href={href}>
      <button className={`${buttonStyles} from-red to-red-dark md:mr-4`}>
        {text}
      </button>
    </Link>
  ) : (
    <button className={`${buttonStyles} from-red to-red-dark md:mr-4`}>
      {text}
    </button>
  );

export const BlueButton = ({ text, href }: { text: string; href?: string }) =>
  href ? (
    <Link href={href}>
      <button
        className={`${buttonStyles} from-blue-light to-blue mt-3 md:mt-0`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button className={`${buttonStyles} from-blue-light to-blue mt-3 md:mt-0`}>
      {text}
    </button>
  );

export default Hero;
