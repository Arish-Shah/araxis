import Layout from './layout';

interface Props {
  firstLine: string;
  secondLine: string;
  intro: string;
  type?: 'seekers' | 'recruiters';
}

function Hero({ firstLine, secondLine, intro, type }: Props) {
  return (
    <Layout
      child="pt-40 pb-24 text-center md:px-32 lg:px-40 lg:pt-40"
      animate={true}
    >
      <h1 className="uppercase text-blue text-3xl font-semibold md:text-4xl lg:text-inter">
        {firstLine}
      </h1>
      <h1 className="uppercase text-blue text-3xl font-semibold md:text-4xl lg:text-inter">
        {secondLine}
      </h1>
      <p className="text-black-light mt-6 lg:text-lg">{intro}</p>
      {/* <p className="text-black-light mt-2 lg:text-lg">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 text-white gap-8">
        <div className="text-left px-6 bg-gradient-to-r from-green to-green pt-6 pb-12">
          <span>
            <img src="/icons/like.svg" alt="Like" />
          </span>
          <span className="text-xl font-light inline-block pt-3 xl:text-2xl">
            {type === 'seekers'
              ? 'Hands-on Assistance'
              : type === 'recruiters'
              ? 'Connecting The Right Talent'
              : ''}
          </span>
        </div>
        <div className="text-left px-6 bg-gradient-to-r from-red-dark to-red pt-6 pb-12">
          <span>
            <img src="/icons/trust.svg" alt="Like" />
          </span>
          <span className="text-xl font-light inline-block pt-3 xl:text-2xl">
            {type === 'seekers'
              ? 'Trusted Process'
              : type === 'recruiters'
              ? 'Streamlined Assessment'
              : ''}
          </span>
        </div>
        <div className="text-left px-6 bg-gradient-to-r from-blue-light to-blue pt-6 pb-12">
          <span>
            <img src="/icons/advanced-skill.svg" alt="Like" />
          </span>
          <span className="text-xl font-light inline-block pt-3 xl:text-2xl">
            {type === 'seekers'
              ? 'Credible Partnerships'
              : type === 'recruiters'
              ? 'Complete Quality Check'
              : ''}
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Hero;
