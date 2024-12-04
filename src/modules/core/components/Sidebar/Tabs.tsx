import { Tab, Tooltip } from '@fluentui/react-components';
import { SetIcon } from './Icons';
import { TabPropTypes } from '../../types/SidebarPropTypes';

const mapTab = () => {
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Mapa'
        relationship='label'
      >
        <Tab className='h-10' icon={<SetIcon iconType='map' />} value='mapa' />
      </Tooltip>
    </>
  );
};
const registrationTab = () => {
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Cadastros'
        relationship='label'
      >
        <Tab
          draggable={false}
          className='h-10'
          icon={<SetIcon iconType='registration' />}
          value='cadastros'
        />
      </Tooltip>
    </>
  );
};
const planningTab = () => {
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Planejamento'
        relationship='label'
      >
        <Tab
          className='h-10'
          icon={<SetIcon iconType='planning' />}
          value='planejamento'
        />
      </Tooltip>
    </>
  );
};
const serviceOrderTab = () => {
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Ordens de Serviço'
        relationship='label'
      >
        <Tab
          className='h-10'
          icon={<SetIcon iconType='serviceOrder' />}
          value='os'
        />
      </Tooltip>
    </>
  );
};
const reportTab = () => {
  return (
    <>
      <Tooltip
        positioning='after'
        withArrow
        appearance='inverted'
        content='Relatórios'
        relationship='label'
      >
        <Tab
          className='h-10'
          icon={<SetIcon iconType='report' />}
          value='relatorios'
        />
      </Tooltip>
    </>
  );
};

export function Tabs({ tabType }: TabPropTypes) {
  if (tabType === 'map') return mapTab();
  if (tabType === 'registration') return registrationTab();
  if (tabType === 'planning') return planningTab();
  if (tabType === 'serviceOrder') return serviceOrderTab();
  if (tabType === 'report') return reportTab();
}
