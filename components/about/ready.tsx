import Container from '../container';

function Ready() {
  return (
    <Container child="text-center py-24" animate={true}>
      <p className="text-black-light">
        Give your customer the experience they desire
      </p>
      <h1 className="text-blue text-3xl md:text-4xl xl:text-5xl font-semibold py-6 uppercase">
        Work with us!
      </h1>
      <div className="mt-4 flex lg:block">
        <button
          type="submit"
          className="flex-1 uppercase bg-green font-medium text-xl text-white rounded-none py-4 lg:px-20"
        >
          Get in Touch
        </button>
      </div>
    </Container>
  );
}

export default Ready;
