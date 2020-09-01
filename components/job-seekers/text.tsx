import Layout from '../layout';

function Text() {
  return (
    <Layout parent="bg-pink" child="py-24 flex flex-col lg:flex-row">
      <h1 className="text-red uppercase text-8xl font-bold leading-none">
        Lorem Ipsum is Simply
      </h1>
      <div>
        <p className="text-black-light font-medium text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="text-black-light font-medium text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
    </Layout>
  );
}

export default Text;
