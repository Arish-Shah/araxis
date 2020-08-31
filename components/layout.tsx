interface Props {
  children: React.ReactNode;
  parent?: string;
  child?: string;
}

function Layout({ children, parent, child }: Props) {
  return (
    <div className={`w-full ${parent}`}>
      <div className={`px-6 max-w-7xl mx-auto ${child}`}>{children}</div>
    </div>
  );
}

export default Layout;
