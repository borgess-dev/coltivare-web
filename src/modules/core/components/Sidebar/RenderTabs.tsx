import { RegistrationNav } from './RegistrationNav';
import { Tabs } from './Tabs';
import { PlanningNav } from './PlanningNav';

export function RenderTabs() {
  return (
    <>
      <Tabs tabType='map' />
      <RegistrationNav />
      <PlanningNav />
      <Tabs tabType='serviceOrder' />
      <Tabs tabType='report' />
    </>
  );
}
