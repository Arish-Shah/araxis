import Layout from './layout';

function Companies() {
  const images: { src: string; alt: string; className: string }[] = [
    {
      src: '/companies/capgemini.svg',
      alt: 'Capgemini',
      className: 'h-8',
    },
    { src: '/companies/oracle.svg', alt: 'Oracle', className: 'h-5 mx-auto' },
    {
      src: '/companies/dell.svg',
      alt: 'DELL',
      className: 'h-6 md:h-8 mx-auto',
    },
    {
      src: '/companies/deloitte.svg',
      alt: 'Deloitte',
      className: 'h-8 mx-auto',
    },
    { src: '/companies/nokia.svg', alt: 'Nokia', className: 'h-6 mx-auto' },
  ];

  return (
    <Layout
      parent="bg-gray-100 mt-2"
      child="py-10 overflow-x-hidden grid grid-cols-3 gap-10 items-center text-center lg:px-6 md:px-32 md:grid-cols-5"
      animate={true}
    >
      {images.map(image => (
        <div key={image.src}>
          <img {...image} draggable={false} />
        </div>
      ))}
    </Layout>
  );
}

export default Companies;
