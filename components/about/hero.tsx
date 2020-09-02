import Layout from '../layout';

function Hero() {
  return (
    <Layout child="pt-20 md:px-32 lg:px-6 text-center">
      <div>
        <h1 className="uppercase text-3xl md:text-4xl lg:text-inter font-semibold text-blue">
          About Us
        </h1>
        <div className="text-black-light md:text-lg mt-6 md:w-10/12 mx-auto">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="mt-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
        </div>
      </div>
      {Leading}
    </Layout>
  );
}

const Leading = (
  <div className="text-left flex flex-col lg:flex-row lg:items-center pt-16 md:pt-20 lg:pt-24 pb-20 gap-10 lg:gap-32 xl:gap-40">
    <div className="flex-1">
      <h1 className="text-blue text-3xl md:text-4xl lg:text-inter font-semibold">
        Our Mission
      </h1>
      <p className="mt-4 text-black-light leading-7">
        We aim at providing highest quality of service in every phase of Client
        Relationship, from initial contact to follow up support. Our technical
        expertise and experience are unparalleled in the industry. Our services,
        whether before or after sale, are the most promising you can find.
      </p>
    </div>
    <div className="flex-1">
      <h1 className="text-blue text-4xl lg:text-inter font-semibold italic">
        "Accelerate the world's Innovation"
      </h1>
    </div>
  </div>
);

export default Hero;
