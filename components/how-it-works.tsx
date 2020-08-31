import Layout from './layout';
import { ButtonWithArrow } from './vision';

function HowItWorks() {
  const items: {
    title: string;
    content: string;
    icon: string;
  }[] = [
    {
      title: 'We Listen',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      icon: 'we-listen.svg',
    },
    {
      title: 'We Understand',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      icon: 'we-understand.svg',
    },
    {
      title: 'We Deliver',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      icon: 'we-deliver.svg',
    },
  ];

  return (
    <Layout child="md:px-32 lg:px-6 pt-20 pb-16 text-center">
      <div>
        <h1 className="uppercase text-blue text-4xl font-semibold">
          How It Works
        </h1>
        <p className="text-red text-2xl py-1 italic">
          Success is not a matter of coincidence
        </p>
        <p className="pt-6 pb-10 lg:pb-8 text-black-light font-medium lg:w-1/2 mx-auto leading-loose">
          Learn how our unique sourcing methodology helps organizations create
          wholes that are greater than the sum of their parts.
        </p>
        <div className="grid grid-cols-1 pt-2 gap-20 lg:grid-cols-3">
          {items.map(({ title, content, icon }) => (
            <div key={title} className="flex flex-col">
              <img
                src={`/how-it-works/${icon}`}
                alt={title}
                className="h-40"
                draggable={false}
              />
              <h3 className="pt-4 pb-2 text-blue text-lg font-semibold">
                {title}
              </h3>
              <p className="pt-2 text-xs text-black-light leading-loose mx-auto w-9/12 lg:w-full">
                {content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-6">
          <ButtonWithArrow text="Read More" />
        </div>
      </div>
    </Layout>
  );
}

export default HowItWorks;
