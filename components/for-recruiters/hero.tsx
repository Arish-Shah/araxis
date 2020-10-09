import Layout from '../layout';

function Hero({
  title,
  subtitle,
  content,
  className = ''
}: {
  title: string;
  subtitle: string;
  content: string;
  className?: string;
}) {
  return (
    <Layout
      parent={className}
      child="md:px-32 lg:px-6 flex flex-col lg:flex-row items-center pt-6 mb-2 pb-24"
      animate={true}
    >
      <img
        src="/meeting.jpg"
        alt="Meeting"
        draggable={false}
        className="w-full flex-1"
        data-aos="fade-right"
      />
      <div className="pl-0 pt-8 lg:pl-12 lg:pt-0 flex-1">
        <h1 className="uppercase text-blue text-3xl xl:text-4xl font-semibold">
          {title}
        </h1>
        <p className="text-red text-2xl py-1 italic">{subtitle}</p>
        <p className="pt-4 lg:pt-6 text-black-light lg:text-lg xl:text-xl leading-10">
          {content}
        </p>
      </div>
    </Layout>
  );
}

export default Hero;
