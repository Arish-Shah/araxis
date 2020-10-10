import Container from '../container';

function Hero() {
  return (
    <Container
      child="pt-40 md:px-32 lg:px-6 lg:pt-40 text-center"
      animate={true}
    >
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
    </Container>
  );
}

const Leading = (
  <div className="text-left flex flex-col lg:flex-row lg:items-center pt-16 md:pt-20 lg:pt-24 pb-20">
    <div className="flex-1">
      <h1 className="text-blue text-3xl md:text-4xl lg:text-inter font-semibold">
        Our Mission
      </h1>
      <p className="mt-4 text-black-light leading-7 lg:pr-16">
        From initial contact to follow-up support, our aim is to provide our
        clients and partners the complete IT Solution. With our unparalleled
        experience and a decade long expertise, what we provide to companies, no
        one can.
      </p>
    </div>
    <div className="flex-1">
      <h1 className="text-blue text-3xl md:text-4xl xl:text-inter font-semibold italic mt-10 lg:mt-0 lg:pl-12 xl:pl-20">
        "Accelerate Innovation. Accelerate Growth"
      </h1>
    </div>
  </div>
);

export default Hero;
