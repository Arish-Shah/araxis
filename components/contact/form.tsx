import Layout from '../layout';

function Form() {
  return (
    <Layout child="pt-12 pb-20 md:px-32 lg:px-6 text-center lg:pt-20 lg:pb-32">
      {Hero}
      <div className="pt-16 grid grid-cols-1 gap-y-10 lg:gap-8 lg:grid-cols-8">
        <div className="col-span-5">
          <ContactUsForm />
        </div>
        <div className="relative text-left bg-gradient-to-b from-blue to-blue-light text-white py-20 px-16 w-full col-span-3">
          {Card}
        </div>
      </div>
    </Layout>
  );
}

const Hero = (
  <div>
    <h1 className="uppercase text-3xl md:text-4xl lg:text-inter font-semibold text-blue">
      Contact Us
    </h1>
    <div className="text-black-light md:text-lg mt-6 md:w-10/12 mx-auto">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="mt-2">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </p>
    </div>
  </div>
);

const ContactUsForm = () => {
  const inputs: { label: string; id: string; type: string }[] = [
    { label: 'Name*', id: 'name', type: 'text' },
    { label: 'Email Address*', id: 'email', type: 'email' },
    { label: 'Phone Number*', id: 'phone-number', type: 'number' },
  ];

  return (
    <form>
      <div className="grid grid-cols-1 gap-y-5 md:gap-y-8 gap-x-4 lg:gap-x-6 xl:gap-x-8 md:grid-cols-2">
        <div className="text-left">
          <label htmlFor="select" className="block text-sm text-gray-600">
            Select
          </label>
          <select
            id="select"
            className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
          >
            <option value="Foo">Foo</option>
          </select>
        </div>
        {inputs.map(({ label, id, type }) => (
          <div className="text-left" key={id}>
            <label htmlFor={id} className="block text-sm text-gray-600">
              {label}
            </label>
            <input
              id={id}
              type={type}
              className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 mb-6 text-left">
        <h3 className="text-blue text-xl">
          Send message in the following topic
        </h3>
        <div className="flex gap-8 mt-5 text-black-light">
          <label htmlFor="recruiting">
            <input type="radio" name="topic" id="recruiting" />
            <span className="pl-2">Recruiting</span>
          </label>
          <label htmlFor="job-seeking">
            <input type="radio" name="topic" id="job-seeking" />
            <span className="pl-2">Job Seeking</span>
          </label>
          <label htmlFor="it-solutions">
            <input type="radio" name="topic" id="it-solutions" />
            <span className="pl-2">IT Solutions</span>
          </label>
        </div>
      </div>
      <div>
        <textarea
          placeholder="Message"
          className="w-full h-40 placeholder-blue border-solid border-2 border-gray-300 rounded-md p-2 focus:border-green"
        />
      </div>
      <div className="mt-6 flex text-left lg:block">
        <button
          type="submit"
          className="flex-1 uppercase bg-green font-medium text-xl text-white rounded-none py-4 lg:px-16"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Card = (
  <>
    <h3 className="uppercase font-semibold text-2xl">Reach To Us</h3>
    <p className="mt-2 text-black-lighter text-sm leading-relaxed">
      With the right team in place, you can expect great work and even greater
      results.
    </p>
    <div className="flex items-start gap-3 mt-10">
      <img src="/contact/mail.svg" alt="Mail" className="mt-1" />
      <div>
        <p className="text-green text-sm">Mail us at:</p>
        <p className="text-sm">info@araxis.com</p>
      </div>
    </div>
    <div className="flex items-start gap-3 mt-8">
      <img src="/contact/headset.svg" alt="Headset" className="mt-1" />
      <div>
        <p className="text-green text-sm">Customer Care</p>
        <p className="text-sm">040 1234567890</p>
      </div>
    </div>
    <div className="relative z-10 flex items-start gap-3 mt-10">
      <img src="/contact/location.svg" alt="Location" />
      <div>
        <p className="text-green text-sm">Our Locations:</p>
        <p className="text-xs text-black-lighter">Postal Address</p>
        <p className="text-sm">8 Smoky Hollow Street</p>
        <p className="text-sm">Clayton, NC 27520</p>
        <p className="text-xs text-black-lighter mt-4">Corporate Address</p>
        <p className="text-sm">380 Old Hilltop Rd.</p>
        <p className="text-sm">Gibsonia, PA 15044</p>
      </div>
    </div>
    <img
      src="/brand.png"
      alt="Brand"
      className="absolute bottom-0 right-0 opacity-25 w-4/6"
      style={{ zIndex: 1 }}
    />
  </>
);

export default Form;
