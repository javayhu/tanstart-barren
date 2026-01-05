import { createFileRoute } from '@tanstack/react-router';
import { SelectUserType } from '~/lib/db/schema/auth.schema';
import { DashboardIndexContent } from '~/tanstart-barren-examples/components/dashboard-index-content';

export const Route = createFileRoute('/(authenticated)/dashboard/')({
  component: DashboardIndex,
});

function DashboardIndex() {
  const { user } = Route.useRouteContext();

  return <DashboardIndexContent user={user as SelectUserType} />;
}
