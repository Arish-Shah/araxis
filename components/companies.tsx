import Layout from './layout';

function Companies() {
  return (
    <Layout
      parent="bg-gray-100 mt-2"
      child="py-10 overflow-x-hidden grid grid-cols-3 gap-10 items-center text-center lg:px-6 md:px-32 md:grid-cols-5"
    >
      <img
        src="/companies/capgemini.svg"
        alt="Capgemini"
        className="h-8"
        draggable={false}
      />
      <img
        src="/companies/oracle.svg"
        alt="Oracle"
        className="h-5"
        draggable={false}
      />
      <img
        src="/companies/dell.svg"
        alt="DELL"
        className="h-6 md:h-8"
        draggable={false}
      />
      <img
        src="/companies/deloitte.svg"
        alt="Deloitte"
        className="h-8"
        draggable={false}
      />
      <img
        src="/companies/nokia.svg"
        alt="Nokia"
        className="h-6"
        draggable={false}
      />
    </Layout>
  );
}

export default Companies;
