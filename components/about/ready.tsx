import Layout from '../layout';

function Ready() {
  return (
    <Layout child="text-center py-24">
      <p className="text-black-light">
        Give your customer the experience they desire
      </p>
      <h1 className="text-blue text-3xl md:text-4xl xl:text-5xl font-semibold py-6 uppercase">
        Ready to work with us?
      </h1>
      <div className="mt-4 flex lg:block">
        <button
          type="submit"
          className="flex-1 uppercase bg-green font-medium text-xl text-white rounded-none py-4 lg:px-20"
        >
          Get in Touch
        </button>
      </div>
    </Layout>
  );
}

export default Ready;
