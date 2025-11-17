type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-black text-neutral-100 relative">
      {children}
    </div>
  );
}
