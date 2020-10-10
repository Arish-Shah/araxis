import Layout from '../layout';

const First = (
  <Layout
    animate={true}
    child="pt-40 pb-24 text-center md:px-32 lg:px-6 lg:pt-40"
  >
    <h1 className="uppercase text-blue text-2xl md:text-4xl xl:text-inter font-semibold">
      Tailormade & End-To-End. Scalable & Successful.
    </h1>
    <h1 className="uppercase text-blue mt-2 text-2xl md:text-4xl xl:text-inter font-semibold">
      That’s our USP in four words!
    </h1>
    <div className="text-black-light md:text-lg leading-relaxed font-medium">
      <p className="mt-6">
        At Araxis, we specialize in delivering innovative IT Solutions for all
        e‑commerce and e‑business needs.
      </p>
      {/* <p className="text-black-light md:text-lg leading-relaxed">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </p> */}
    </div>
  </Layout>
);

const Second = (
  <Layout
    animate={true}
    parent="bg-pink"
    child="py-20 md:px-32 lg:px-6 flex flex-col lg:flex-row"
  >
    <div className="flex-1 lg:mr-5">
      <h3 className="uppercase text-red font-semibold text-lg">What we do</h3>
      <h1 className="pt-4 uppercase text-blue font-semibold text-3xl xl:text-inter">
        Efficiency, guaranteed. Always.
      </h1>
    </div>
    <div className="lg:ml-5 mt-10 lg:mt-0 lg:pt-0 text-black-light text-base md:text-lg lg:text-lg leading-loose lg:leading-10 font-medium flex-1">
      <p>
        Through our solutions, we help our partners realize the value of their
        content in driving higher worker productivity and improved operational
        efficiency. We help clients solve complex information management issues,
        as our solutions combine best-of-breed technology.
      </p>
      {/* <p className="pt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p> */}
    </div>
  </Layout>
);

const Third = (
  <Layout
    // animate={true}
    parent="bg-lavendar"
    child="py-20 md:px-32 lg:px-6 flex flex-col lg:flex-row-reverse"
  >
    <div className="flex-1 lg:ml-10">
      <h3 className="uppercase text-red font-semibold text-lg">Our Approach</h3>
      <h1 className="pt-4 uppercase text-blue font-semibold text-3xl xl:text-inter">
        Hands-on approach. Hands-on solution
      </h1>
    </div>
    <div className="text-black-light text-base md:text-lg lg:text-lg leading-loose lg:leading-10 font-medium flex-1 lg:mr-10 mt-10 lg:mt-0">
      <p>
        For organizations that rely on timely insights, we transform information
        available into actionable knowledge using powerful tools. Our experience
        gives us the ability to help your organization challenge the status quo,
        change it and pioneer the industry.
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
