import Layout from '../layout';

function Text() {
  return (
    <Layout
      parent="bg-pink"
      child="md:px-32 lg:px-6 py-24 flex flex-col lg:flex-row lg:items-center"
    >
      <h1 className="text-red uppercase text-4xl lg:text-5xl pb-6 font-bold leading-snug lg:w-5/12">
        Your Dream Job Is Our Reality
      </h1>
      <div className=" lg:w-7/12 leading-loose flex flex-col justify-between text-lg lg:text-xl lg:pl-20">
        <p className="text-black-light font-medium pt-6 lg:pt-0">
          What sets us apart in the market is our ability to deep-dive into what
          you want from your job. We’ve tied up with the most professional
          partners and top recruiters to connect you to a firm where your hard
          work won’t go unnoticed.
        </p>
        {/* <p className="text-black-light font-medium pt-6 xl:pt-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p> */}
      </div>
    </Layout>
  );
}

export default Text;
