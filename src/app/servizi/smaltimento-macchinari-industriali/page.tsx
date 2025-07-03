import ServiceDetail from '@/components/services/ServiceDetail';
import { generateMetadata } from '@/content/metadata';
import { servicesContent } from '@/content/services';

export const metadata = generateMetadata('services/smaltimento-macchinari-industriali');

export default function SmaltimentoMacchinariIndustrialiPage() {
  return <ServiceDetail service={servicesContent.detail['smaltimento-macchinari-industriali']} />;
}