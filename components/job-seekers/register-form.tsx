import Layout from '../layout';
import { useState } from 'react';
import { RedButton } from '../index/hero';

function RegisterForm() {
  const [checked, setChecked] = useState(false);

  const inputs: { label: string; id: string; type: string }[] = [
    { label: 'First Name*', id: 'first-name', type: 'text' },
    { label: 'Last Name*', id: 'last-name', type: 'text' },
    { label: 'Phone Number', id: 'phone-number', type: 'number' },
    { label: 'Email', id: 'email', type: 'email' },
    { label: 'Linkedin URL', id: 'linkedin', type: 'url' },
  ];

  return (
    <Layout child="py-28 text-center md:px-32 lg:px-6">
      <h1 className="font-semibold uppercase text-3xl md:text-4xl lg:text-5xl text-blue">
        Register Form
      </h1>
      <p className="text-black-light py-4 md:text-lg lg:text-xl">
        We want to get know you better
      </p>
      <form className="mt-6">
        <div className="grid grid-cols-1 gap-y-5 md:gap-y-6 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="text-left">
            <label className="block text-sm text-gray-600" htmlFor="resume">
              Please Attach your Resume*
            </label>
            <input
              type="file"
              id="resume"
              className="text-sm w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
            />
          </div>
        </div>

        <p className="text-left text-gray-600 pt-16 leading-loose">
          From time to time, we would like to contact you about our services as
          well as other content that may be of interest to you. If you consent
          to us contacting you for this purpose, please tick below. You may
          unsubscribe from these communications at any time.
        </p>

        <div
          onClick={() => setChecked(checked => !checked)}
          className="text-left flex items-center gap-4 text-gray-600 pt-5"
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
        <div className="mt-12 flex lg:block">
          <RedButton text="Click to Submit" />
        </div>
      </form>
    </Layout>
  );
}

export default RegisterForm;
