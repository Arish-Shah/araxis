import Layout from '../layout';

function Form() {
  const inputs: { label: string; id: string; type: string }[] = [
    { label: 'Name*', id: 'name', type: 'text' },
    { label: 'Email Address*', id: 'email', type: 'email' },
    { label: 'Phone Number*', id: 'phone-number', type: 'number' },
  ];

  return (
    <Layout child="md:px-32 lg:px-6 border-solid border-t-2 border-gray-300 text-center py-16">
      <div className="lg:w-9/12 xl:w-8/12 mx-auto">
        <h1 className="uppercase text-blue font-semibold text-4xl leading-tight lg:text-inter xl:text-5xl">
          Tell us <br /> about your Project
        </h1>
        <form>
          <div className="pt-16 grid grid-cols-1 gap-y-5 md:gap-y-8 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2">
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
            <div className="text-left">
              <label htmlFor="service" className="block text-sm text-gray-600">
                Select Service
              </label>
              <select
                id="service"
                placeholder="Select"
                className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
              >
                <option value="Foo">Foo</option>
              </select>
            </div>
          </div>
          <div className="text-left mt-6 lg:mt-8">
            <label htmlFor="message" className="block text-sm text-gray-600">
              Describe your Project
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full text-sm h-40 border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
            />
          </div>
          <div className="mt-6 flex lg:block">
            <button type="submit" className="flex-1 uppercase bg-green font-medium text-xl text-white rounded-none py-4 lg:px-20">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Form;
