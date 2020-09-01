import Layout from '../layout';

function Text() {
  return (
    <Layout
      parent="bg-pink"
      child="md:px-32 lg:px-6 py-24 flex flex-col lg:flex-row lg:items-center"
    >
      <h1 className="text-red uppercase text-5xl pb-6 font-bold leading-none md:text-6xl lg:text-7xl xl:text-8xl lg:w-5/12">
        Lorem Ipsum is Simply
      </h1>
      <div className=" lg:w-7/12 leading-loose flex flex-col justify-between text-lg lg:text-xl">
        <p className="text-black-light font-medium pt-6 lg:pt-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="text-black-light font-medium pt-6 xl:pt-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
    </Layout>
  );
}

export default Text;
