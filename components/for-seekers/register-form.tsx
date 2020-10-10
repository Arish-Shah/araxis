import { useForm } from 'react-hook-form';

import Layout from '../layout';
import { useState, useRef, useEffect } from 'react';
import { RedButton } from '../index/hero';
import base64 from '../../util/base64';

interface IFormInput {
  firstName: string;
  lastName: string;
  phone?: number;
  email?: string;
  linkedin?: string;
  resume: FileList;
  communications: boolean;
}

function RegisterForm() {
  const [checked, setChecked] = useState(true);
  const { register, errors, handleSubmit } = useForm<IFormInput>();

  useEffect(() => {
    const image = new Image();
    image.src = '/form/check-green.svg';
  }, []);

  const onSubmit = async (data: IFormInput) => {
    const resume = await base64(data.resume[0]);
    const request = await fetch('/api/for-seekers', {
      method: 'POST',
      body: JSON.stringify({ ...data, resume, communications: checked })
    });
    const json = await request.json();
    console.log(json);
  };

  const inputs: {
    label: string;
    id: string;
    type: string;
    rules: Partial<{}>;
  }[] = [
    {
      label: 'First Name*',
      id: 'firstName',
      type: 'text',
      rules: {
        required: { value: true, message: 'Fields marked * are required' },
        pattern: { value: /^[a-zA-Z]+$/, message: 'Enter a correct value' }
      }
    },
    {
      label: 'Last Name*',
      id: 'lastName',
      type: 'text',
      rules: {
        required: { value: true, message: 'Fields marked * are required' },
        pattern: { value: /^[a-zA-Z]+$/, message: 'Enter a correct value' }
      }
    },
    {
      label: 'Phone Number',
      id: 'phone',
      type: 'number',
      rules: {
        minLength: { value: 10, message: 'Please enter a valid number' },
        maxLength: { value: 10, message: 'Please enter a valid number' }
      }
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      rules: {
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: 'Please enter a valid email'
        }
      }
    },
    {
      label: 'Linkedin URL',
      id: 'linkedin',
      type: 'url',
      rules: {
        pattern: {
          value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
          message: 'Please enter a valid URL'
        }
      }
    }
  ];

  const formRef = useRef();

  return (
    <Layout child="py-28 text-center md:px-32 lg:px-6" animate={true}>
      <h1 className="font-semibold uppercase text-3xl md:text-4xl lg:text-5xl text-blue">
        Register Form
      </h1>
      <p className="text-black-light py-4 md:text-lg lg:text-xl">
        We want to get know you better
      </p>
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div className="grid grid-cols-1 gap-y-5 md:gap-y-6 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {inputs.map(({ label, id, type, rules }) => {
            return (
              <div className="text-left" key={id}>
                <div className="flex justify-between items-center">
                  <label className="block text-sm text-gray-600" htmlFor={id}>
                    {label}
                  </label>
                  {errors[id] && (
                    <span className="text-red text-xs mt-0">
                      {errors[id]?.message}
                    </span>
                  )}
                </div>
                <input
                  type={type}
                  id={id}
                  name={id}
                  ref={register(rules)}
                  className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
                />
              </div>
            );
          })}
          <div className="text-left">
            <div className="flex justify-between items-center">
              <label className="block text-sm text-gray-600" htmlFor="resume">
                Please Attach your Resume*
              </label>
              {errors.resume && (
                <span className="text-red text-xs mt-0">
                  {errors.resume?.message}
                  {errors.resume.type === 'size' && 'File must be under 10MB.'}
                  {errors.resume.type === 'type' && 'Unsupported Format'}
                </span>
              )}
            </div>
            <input
              type="file"
              id="resume"
              name="resume"
              ref={register({
                required: {
                  value: true,
                  message: 'Resume required'
                },
                validate: {
                  size: (fileList) => fileList[0].size < 10000000,
                  type: (fileList: File[]) =>
                    ['pdf', 'doc', 'docx'].includes(
                      fileList[0].name.split('.').pop()
                    )
                }
              })}
              multiple={false}
              className="text-sm w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
            />
          </div>
        </div>
        <p className="text-left text-gray-600 pt-16 leading-loose text-sm lg:text-base">
          From time to time, we would like to contact you about our services as
          well as other content that may be of interest to you. If you consent
          to us contacting you for this purpose, please tick below. You may
          unsubscribe from these communications at any time.
        </p>

        <div
          onClick={() => setChecked((checked) => !checked)}
          className="text-left flex items-center text-gray-600 pt-5 text-sm lg:text-base"
        >
          <span
            className="rounded-sm shadow-inner"
            style={{ boxShadow: 'inset 0 0 0 2px var(--gray-300)' }}
          >
            <img
              src="/form/check-green.svg"
              className={`select-none w-5 ${
                checked ? 'opacity-0' : 'opacity-100'
              }`}
              draggable={false}
            />
          </span>
          <p className="cursor-default cursor-pointer ml-4">
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
