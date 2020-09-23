import { MutableRefObject, useEffect } from 'react';
import AOS from 'aos';

interface Props {
  children: React.ReactNode;
  parent?: string;
  parentRef?: MutableRefObject<undefined>;
  child?: string;
}

function Layout({ children, parent, parentRef, child }: Props) {
  useEffect(() => {
    AOS.init();
    console.log(AOS);
  }, []);

  return (
    <div className={`w-full ${parent}`} ref={parentRef}>
      <div className={`px-6 max-w-7xl mx-auto ${child}`}>{children}</div>
    </div>
  );
}

export default Layout;
