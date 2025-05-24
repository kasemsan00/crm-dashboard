import { Layout } from '@/components/Layout';

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
