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
        {Chart}
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

const boxClassName =
  'leading-snug border-solid border-2 border-gray-800 bg-blue-lighter w-40 text-white text-lg text-left px-5 flex items-center';
const largeBoxClassName = boxClassName + ' h-64';
const smallBoxClassName = boxClassName + ' h-40';

const Chart = (
  <div className="overflow-x-scroll justify-center flex items-center mt-10 gap-2 scale-50 lg:overflow-x-hidden">
    <div className={largeBoxClassName}>Application</div>
    {arrow}
    <div className={largeBoxClassName}>Recruiter Call</div>
    <div className="flex flex-col justify-between h-48">
      {arrow}
      {arrow}
    </div>
    <div className="flex flex-col justify-between h-64 gap-10">
      <div className={smallBoxClassName}>Team Interview</div>
      <div className={smallBoxClassName}>Technical Assessment</div>
    </div>
    <div className="flex flex-col justify-between h-48">
      {arrow}
      {arrow}
    </div>
    <div className={largeBoxClassName}>Hiring Manager Call</div>
    {arrow}
    <div className={largeBoxClassName}>Offer</div>
  </div>
);

export default End2End;
