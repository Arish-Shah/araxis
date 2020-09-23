import Layout from '../layout';

function Hero() {
  return (
    <Layout child="pt-40 md:px-32 lg:px-6 lg:pt-40 text-center">
      <div>
        <h1 className="uppercase text-3xl md:text-4xl lg:text-inter font-semibold text-blue">
          About Us
        </h1>
        <div className="text-black-light md:text-lg mt-6 lg:w-8/12 mx-auto">
          <p>
            With a decade of experience in the IT Consulting services industry,
            we at Araxis are mavericks at matching technical professionals who
            help you connect and match with talent, partners and companies.
          </p>
          {/* <p className="mt-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p> */}
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
        From initial contact to follow-up support, our aim is to provide our
        clients and partners the complete IT Solution. With our unparalleled
        experience and a decade long expertise, what we provide to companies, no
        one can.
      </p>
    </div>
    <div className="flex-1">
      <h1 className="text-blue text-4xl lg:text-inter font-semibold italic">
        "Accelerate Innovation. Accelerate Growth"
      </h1>
    </div>
  </div>
);

export default Hero;
