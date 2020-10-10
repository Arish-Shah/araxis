import Container from '../container';
import { ButtonWithArrow } from './vision';

function HowItWorks() {
  const items: {
    title: string;
    content: string;
    icon: string;
    className: string;
  }[] = [
    {
      title: 'We Listen',
      content: `The most important thing we do, is we let you speak. We understand the importance of listening to your needs and make it our utmost priority to give you exactly what you want - and nothing else`,
      icon: 'we-listen.svg',
      className: 'lg:mr-16'
    },
    {
      title: 'We Understand',
      content: `Applying the same rule for all partners is just not how we like it. We take on each requirement and scrutinise it - breaking the requirements down into actionable steps.`,
      icon: 'we-understand.svg',
      className: 'mt-20 lg:mt-0 lg:ml-8 lg:mr-8'
    },
    {
      title: 'We Deliver',
      content: `Empty words and false promises are not the standards we go by. After analysing every detail, our results showcase an almost perfect success ratio: one that sets us apart and keeps our partners happy.`,
      icon: 'we-deliver.svg',
      className: 'mt-20 lg:mt-0 lg:ml-16'
    }
  ];

  return (
    <Container child="md:px-32 lg:px-6 pt-20 pb-16 text-center" animate={true}>
      <div>
        <h1 className="uppercase text-blue text-4xl lg:text-inter font-semibold">
          How It Works
        </h1>
        <p className="text-red text-2xl py-1 italic">
          What we do, nobody else can
        </p>
        <p className="pt-6 pb-10 lg:pb-8 text-black-light font-medium lg:w-1/2 mx-auto leading-loose">
          With unique sourcing methodologies coupled with our lateral approach
          to finding perfect matches, we enrich organisations with wholes that
          are more than the sum of their parts.
        </p>
        <div className="grid grid-cols-1 pt-2 lg:grid-cols-3">
          {items.map(({ title, content, icon, className }) => (
            <div
              key={title}
              className={`flex flex-col ${className}`}
              // data-aos="fade-up"
            >
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
          <ButtonWithArrow text="Read More" href="/for-recruiters" />
        </div>
      </div>
    </Container>
  );
}

export default HowItWorks;
