import Layout from '../layout';

export const ButtonWithArrow = ({ text }: { text: string }) => (
  <button className="flex items-center text-red uppercase text-xl font-medium">
    {text}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-3 fill-current ml-1"
    >
      <path d="M79 0L49 30l98 98-98 98 30 30 128-128z" />
    </svg>
  </button>
);

function Vision() {
  return (
    <Layout
      parent="bg-pink"
      child="py-0 md:px-32 lg:px-6 pt-20 flex flex-col md:flex-row"
    >
      <div className="md:pb-12 flex-1 lg:pr-16">
        <h1 className="text-blue uppercase text-5xl font-bold leading-tight py-2 xl:text-6xl">
          10+ years <br />
          one vision
        </h1>
        <div className="text-black-light text-sm my-6 font-medium leading-loose lg:leading-10 lg:text-base">
          With more than 10 years of experience in the IT Consulting services
          industry, we are experts at connecting technical professionals. We
          make it our business to understand every employer's individual need
          and closely match it with our profile of candidate.
        </div>
        <ButtonWithArrow text="Our Story" />
      </div>
      <div className="flex-1 self-end -mt-8 w-7/12 lg:pt-12 md:w-full md:mt-0">
        <img src="/brand.png" alt="Logo" draggable={false} />
      </div>
    </Layout>
  );
}

export default Vision;
