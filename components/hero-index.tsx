import Layout from './layout';

function HeroIndex() {
  return (
    <Layout child="py-10 my-4 flex flex-col md:px-32 lg:gap-10 lg:px-6 lg:flex-row lg:items-center lg:py-12">
      <div className="xl:w-5/12">
        <h1 className="text-blue font-semibold text-3xl xl:text-4xl leading-snug">
          Matching developers with great companies.
        </h1>
        <p className="text-black-light text-sm py-6 lg:py-8">
          Whether you are looking for the best IT talent, an experienced IT
          outsourcing partner, or a career in the IT, Araxis delivers.
        </p>
        <div className="flex lg:mt-4 gap-3 md:gap-4 flex-col md:flex-row">
          {RedButton}
          {BlueButton}
        </div>
      </div>
      <div className="mt-12 xl:mt-0 xl:w-7/12">
        <img
          src="/assets/home-banner-illustration.svg"
          alt="People"
          draggable={false}
        />
      </div>
    </Layout>
  );
}

const buttonStyles =
  'bg-gradient-to-r uppercase font-medium text-xl text-white rounded-none py-4 flex-auto lg:flex-none lg:px-12 transition-colors duration-200';

export const RedButton = (
  <button className={`${buttonStyles} from-red to-red-dark hover:to-red`}>
    Find Work
  </button>
);

export const BlueButton = (
  <button
    className={`${buttonStyles} from-blue-light to-blue hover:to-blue-light`}
  >
    Find Talent
  </button>
);

export default HeroIndex;
