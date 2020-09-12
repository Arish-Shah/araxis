import Layout from '../layout';

function End2End() {
  return (
    <Layout
      parent="bg-footer-image bg-cover"
      child="text-center py-24 md:px-32 lg:px-6 text-white"
    >
      <h1 className="uppercase font-semibold text-3xl md:text-4xl lg:text-inter">
        Our End to End Hiring Process
      </h1>
      <h1 className="uppercase font-semibold text-3xl md:text-4xl lg:text-inter">
        For Organizations
      </h1>
      <div className="text-black-lighter text-sm mt-8 leading-loose lg:text-base">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>
        <p>
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <div className="pt-12">
          <img src="/chart.png" alt="Chart" className="mx-auto" />
        </div>
      </div>
    </Layout>
  );
}

const arrow = (
  <span className="text-red">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 296.75 296.75"
      className="fill-current w-10 opacity-50"
    >
      <path d="M296.75 149.188L215 98.875v33.5H0v33h215v32.5z" />
    </svg>
  </span>
);

export default End2End;
