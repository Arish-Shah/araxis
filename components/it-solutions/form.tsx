import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Container from '../container';
import Spinner from '../spinner';

interface IFormInput {
  name: string;
  email: string;
  phone: number;
  service: string;
  message?: string;
}

function Form() {
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit = async (data: IFormInput) => {
    setLoading(true);
    try {
      await fetch('/api/it-solutions', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      await fetch('/api/confirmation-mail', {
        method: 'POST',
        body: JSON.stringify({ email: data.email })
      });
      router.push('/thank-you');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const inputs: {
    label: string;
    id: string;
    type: string;
    rules: Partial<{}>;
  }[] = [
    {
      label: 'Name*',
      id: 'name',
      type: 'text',
      rules: {
        required: {
          value: true,
          message: 'Fields marked * are required'
        }
      }
    },
    {
      label: 'Email Address*',
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
    }
  ];

  return (
    <Container
      child="md:px-32 lg:px-6 border-solid border-t-2 border-gray-300 text-center py-16"
      animate={true}
    >
      <div className="lg:w-9/12 xl:w-8/12 mx-auto">
        <h1 className="uppercase text-blue font-semibold text-4xl leading-tight lg:text-inter xl:text-5xl">
          Tell us <br /> about your Project
        </h1>
        <form name="it-solutions" onSubmit={handleSubmit(onSubmit)}>
          <div className="pt-16 grid grid-cols-1 gap-y-5 md:gap-y-8 gap-x-6 lg:gap-x-8 xl:gap-x-10 md:grid-cols-2">
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
                  id={id}
                  name={id}
                  ref={register(rules)}
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
                name="service"
                placeholder="Select"
                className="w-full border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
                ref={register()}
              >
                <option value="Custom Application Development">
                  Custom Application Development
                </option>
                <option value="Custom Web Development">
                  Custom Web Development
                </option>
                <option value="SEO">SEO</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Quality Engineering">Quality Engineering</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="text-left mt-6 lg:mt-8">
            <label htmlFor="message" className="block text-sm text-gray-600">
              Describe your Project
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full text-sm h-40 border-solid border-2 border-gray-300 rounded-md p-2 mt-3 focus:border-green"
              ref={register()}
            />
          </div>
          <div className="mt-6 flex lg:block">
            <button
              type="submit"
              className={`flex-1 flex mx-auto justify-center items-center uppercase bg-green font-medium text-xl text-white rounded-none py-4 lg:px-16 ${
                loading ? 'loading' : ''
              }`}
            >
              {loading ? <Spinner /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Form;
