import { TabList } from '@fluentui/react-components';
import '../../styles/Sidebar.sass';
import { RenderTabs } from './RenderTabs';
import { BottomButtons } from './Buttons';
import { SidebarPropTypes } from '../../types/SidebarPropTypes';

export function Sidebar({ dividerIsVisible }: SidebarPropTypes) {
  return (
    <div className='relative app-bar h-screen w-12 flex flex-col justify-between'>
      {dividerIsVisible && (
        <div className='shadow-light absolute w-2 h-screen right-0'></div>
      )}
      <div className='tabs-stack flex align-center justify-center mt-2 '>
        <TabList
          selectTabOnFocus={true}
          className='gap-2'
          defaultSelectedValue='mapa'
          vertical
        >
          {<RenderTabs />}
        </TabList>
      </div>
      <div className='gap-2 flex flex-col align-center justify-center relative mx-1 my-2'>
        <BottomButtons />
      </div>
    </div>
  );
}
