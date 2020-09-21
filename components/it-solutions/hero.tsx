import Layout from '../layout';

const First = (
  <Layout child="pt-40 pb-24 text-center md:px-32 lg:px-6 lg:pt-40">
    <h1 className="uppercase text-blue text-3xl md:text-inter font-semibold">
      Tailored End to End IT Solutions
    </h1>
    <h1 className="uppercase text-blue text-3xl md:text-inter font-semibold">
      For Your IT Needs
    </h1>
    <div className="text-black-light md:text-lg leading-relaxed font-medium">
      <p className="mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="text-black-light md:text-lg leading-relaxed">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </p>
    </div>
  </Layout>
);

const Second = (
  <Layout
    parent="bg-pink"
    child="py-20 md:px-32 lg:px-6 flex flex-col lg:flex-row gap-10"
  >
    <div className="flex-1">
      <h3 className="uppercase text-red font-semibold text-lg">What we do</h3>
      <h1 className="pt-4 uppercase text-blue font-semibold text-3xl xl:text-inter">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
    </div>
    <div className="lg:pt-0 text-black-light text-base md:text-lg lg:text-lg leading-loose lg:leading-10 font-medium flex-1">
      <p className="">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="pt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </Layout>
);

const Third = (
  <Layout
    parent="bg-lavendar"
    child="py-20 md:px-32 lg:px-6 flex flex-col lg:flex-row-reverse gap-10"
  >
    <div className="flex-1">
      <h3 className="uppercase text-red font-semibold text-lg">Our Approach</h3>
      <h1 className="pt-4 uppercase text-blue font-semibold text-3xl xl:text-inter">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
    </div>
    <div className="text-black-light text-base md:text-lg lg:text-lg leading-loose lg:leading-10 font-medium flex-1">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="pt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </Layout>
);

function Hero() {
  return (
    <>
      {First}
      {Second}
      {Third}
    </>
  );
}

export default Hero;
