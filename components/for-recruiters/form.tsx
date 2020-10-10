import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Container from '../container';
import { RedButton } from '../index/hero';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  company: string;
  website: string;
  needs: string;
  communications: boolean;
}

function Form() {
  const [checked, setChecked] = useState(true);
  const { register, errors, handleSubmit } = useForm<IFormInput>();

  useEffect(() => {
    const image = new Image();
    image.src = '/form/check-green.svg';
  }, []);

  const onSubmit = async (data: IFormInput) => {
    const req = await fetch('/api/for-recruiters', {
      method: 'POST',
      body: JSON.stringify({ ...data, communications: checked })
    });
    const json = await req.json();
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
        required: {
          value: true,
          message: 'Fields marked * are required'
        }
      }
    },
    {
      label: 'Last Name*',
      id: 'lastName',
      type: 'text',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        }
      }
    },
    {
      label: 'Email*',
      id: 'email',
      type: 'email',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        },
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: 'Please enter a valid email'
        }
      }
    },
    {
      label: 'Phone Number*',
      id: 'phone',
      type: 'number',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        },
        minLength: {
          value: 10,
          message: 'Please enter a valid phone number'
        },
        maxLength: {
          value: 10,
          message: 'Please enter a valid phone number'
        }
      }
    },
    {
      label: 'Company Name*',
      id: 'company',
      type: 'text',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        }
      }
    },
    {
      label: 'Website URL*',
      id: 'website',
      type: 'url',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        },
        pattern: {
          value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
          message: 'Please enter a valid URL'
        }
      }
    }
  ];

  return (
    <Container child="py-32 md:px-32 lg:px-6 text-center" animate={true}>
      <h1 className="text-blue uppercase font-semibold leading-tight text-3xl md:text-4xl xl:text-5xl">
        Fill out the Form
      </h1>
      <h1 className="text-blue uppercase font-semibold leading-tight text-3xl md:text-4xl xl:text-5xl">
        To get started
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-16 grid grid-cols-1 gap-y-5 md:gap-y-6 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2">
          {inputs.map(({ label, id, type, rules }) => (
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
                name={id}
                id={id}
                ref={register(rules)}
                className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
              />
            </div>
          ))}
        </div>
        <div className="text-left mt-5 md:mt-6">
          <div className="flex justify-between items-center">
            <label className="block text-sm text-gray-600" htmlFor="needs">
              Tell Us More About Your Hiring Needs*
            </label>
            {errors.needs && (
              <span className="text-red text-xs mt-0">
                {errors.needs?.message}
              </span>
            )}
          </div>
          <textarea
            id="needs"
            className="w-full h-40 border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
            name="needs"
            ref={register({
              required: {
                value: true,
                message: 'Fields marked * are required'
              }
            })}
          />
          <p className="text-left text-gray-600 pt-16 leading-loose text-sm lg:text-base">
            From time to time, we would like to contact you about opportunities
            as well as other content that may be of interest to you. If you
            consent to us contacting you for this purpose, please tick below.
            You may unsubscribe from these communications at any time.
          </p>

          <div
            onClick={() => setChecked((checked) => !checked)}
            className="text-left flex items-center text-gray-600 pt-5 text-sm lg:text-base"
          >
            <span
              className="rounded-sm shadow-inner cursor-pointer"
              style={{ boxShadow: 'inset 0 0 0 1px var(--gray-600)' }}
            >
              <img
                src="/form/check-green.svg"
                className={`select-none w-5 ${
                  checked ? 'opacity-0' : 'opacity-100'
                }`}
                draggable={false}
              />
            </span>
            <p className="cursor-default ml-4">
              I agree to receive communications from Araxis Systems.
            </p>
          </div>
          <div className="mt-12 flex lg:block text-center">
            <RedButton text="Click to Submit" />
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Form;
