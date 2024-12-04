import { Outlet } from 'react-router';
import { Sidebar } from '../core/components/Sidebar/Sidebar';

export function PersistentLayout() {
  return (
    <>
      <div>
        <Sidebar dividerIsVisible={true} />
      </div>
      <Outlet />
    </>
  );
}
