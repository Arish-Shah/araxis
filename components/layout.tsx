import { MutableRefObject } from 'react';

interface Props {
  children: React.ReactNode;
  parent?: string;
  parentRef?: MutableRefObject<undefined>;
  child?: string;
  animate?: boolean;
}

function Layout({ children, parent, parentRef, child, animate }: Props) {
  const props = {};

  if (animate) {
    props['data-aos'] = 'fade-up';
  }

  return (
    <div className={`w-full ${parent}`} ref={parentRef}>
      <div className={`px-6 max-w-7xl mx-auto ${child}`} {...props}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
