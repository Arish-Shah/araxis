import { MutableRefObject } from 'react';

interface Props {
  children: React.ReactNode;
  parent?: string;
  parentRef?: MutableRefObject<undefined>;
  child?: string;
}

function Layout({ children, parent, parentRef, child }: Props) {
  return (
    <div className={`w-full ${parent}`} ref={parentRef}>
      <div className={`px-6 max-w-7xl mx-auto ${child}`}>{children}</div>
    </div>
  );
}

export default Layout;
