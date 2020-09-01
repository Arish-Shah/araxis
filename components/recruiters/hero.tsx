import Layout from '../layout';

function Hero() {
  return (
    <Layout child="md:px-32 lg:px-6 flex flex-col lg:flex-row items-center pt-6 mb-2 pb-24">
      <img
        src="/meeting.jpg"
        alt="Meeting"
        draggable={false}
        className="w-full flex-1"
      />
      <div className="pl-0 pt-8 lg:pl-12 lg:pt-0 flex-1">
        <h1 className="uppercase text-blue text-3xl xl:text-4xl font-semibold">
          Staff Solutions
        </h1>
        <p className="text-red text-2xl py-1 italic">
          Success is not a matter of coincidence
        </p>
        <p className="pt-4 lg:pt-6 text-black-light lg:text-lg xl:text-xl leading-10">
          Over the years, we have successfully executed various assignments
          across the globe. We have a team of specialist consultants to service
          the true needs of each of our clients. We believe in maintaining
          long-standing relationships with our clients and candidates, in order
          to provide right talent at the right time.
        </p>
      </div>
    </Layout>
  );
}

export default Hero;
