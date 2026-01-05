import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '~/tanstack-barren-examples/components/home-page';

export const Route = createFileRoute('/')({
  component: HomePage,
});
