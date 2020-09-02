import Layout from '../layout';
import { useState } from 'react';
import { RedButton } from '../index/hero';

function Form() {
  const [checked, setChecked] = useState(false);

  const inputs: { label: string; id: string; type: string }[] = [
    { label: 'First Name*', id: 'first-name', type: 'text' },
    { label: 'Last Name*', id: 'last-name', type: 'text' },
    { label: 'Email*', id: 'email', type: 'email' },
    { label: 'Phone Number*', id: 'phone-number', type: 'number' },
    { label: 'Company Name*', id: 'company-name', type: 'text' },
    { label: 'Website URL*', id: 'website', type: 'url' },
  ];

  return (
    <Layout child="py-32 md:px-32 lg:px-6 text-center">
      <h1 className="text-blue uppercase font-semibold leading-tight text-5xl">
        Fill out the Form
      </h1>
      <h1 className="text-blue uppercase font-semibold leading-tight text-5xl">
        To get started
      </h1>
      <form>
        <div className="pt-16 grid grid-cols-1 gap-y-5 md:gap-y-6 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2">
          {inputs.map(({ label, id, type }) => (
            <div className="text-left" key={id}>
              <label className="block text-sm text-gray-600" htmlFor={id}>
                {label}
              </label>
              <input
                type={type}
                id={id}
                className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
              />
            </div>
          ))}
        </div>
        <div className="text-left mt-5 md:mt-6">
          <label className="block text-sm text-gray-600" htmlFor="needs">
            Tell Us More About Your Hiring Needs*
          </label>
          <textarea
            id="needs"
            className="w-full h-40 border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
          />
          <p className="text-left text-gray-600 pt-16 leading-loose text-sm lg:text-base">
            From time to time, we would like to contact you about our services
            as well as other content that may be of interest to you. If you
            consent to us contacting you for this purpose, please tick below.
            You may unsubscribe from these communications at any time.
          </p>

          <div
            onClick={() => setChecked(checked => !checked)}
            className="text-left flex items-center gap-4 text-gray-600 pt-5 text-sm lg:text-base"
          >
            {checked ? (
              <img
                src="/form/check-green.svg"
                className="h-5 w-5 select-none"
                draggable={false}
              />
            ) : (
              <div className="border-solid rounded-sm border border-gray-600 h-5 w-5"></div>
            )}
            <p className="cursor-default">
              I agree to receive communications from Araxis Systems.
            </p>
          </div>
          <div className="mt-12 flex lg:block text-center">
            <RedButton text="Click to Submit" />
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Form;
