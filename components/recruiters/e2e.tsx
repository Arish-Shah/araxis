import Layout from '../layout';

function End2End() {
  return (
    <Layout
      parent="bg-footer-image bg-cover"
      child="text-center py-24 md:px-32 lg:px-6 text-white"
      animate={true}
    >
      <h1 className="uppercase font-semibold text-3xl md:text-4xl lg:text-inter">
        How We Hire
      </h1>
      {/* <h1 className="uppercase font-semibold text-3xl md:text-4xl lg:text-inter">
        For Organizations
      </h1> */}
      <div className="text-black-lighter text-sm mt-8 leading-loose lg:text-base">
        <p className="lg:w-7/12 mx-auto">
          How we hire the best recruit for your company is no rocket science. We
          analyse your requirement, shortlist the best candidates and follow a
          streamlined process to guarantee the best solution.
        </p>
        <div className="pt-12">
          <img
            src="/chart.png"
            alt="Chart"
            className="mx-auto"
            draggable={false}
          />
        </div>
      </div>
    </Layout>
  );
}

export default End2End;
