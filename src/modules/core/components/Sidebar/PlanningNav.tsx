import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tab,
  Tooltip,
} from '@fluentui/react-components';
import { SetIcon } from './Icons';

const AgriculturalPlanSubmenu = () => {
  return (
    <>
      <Menu>
        <MenuItem icon={<SetIcon iconType='agriculturalPlan' />}>
          Plano Agronômico
        </MenuItem>
        <MenuTrigger disableButtonEnhancement>
          <MenuItem aria-label='Abrir Plano Agronômico' />
        </MenuTrigger>
      </Menu>
    </>
  );
};
const HarvestSubmenu = () => {
  return (
    <>
      <Menu>
        <MenuItem icon={<SetIcon iconType='harvest' />}>Safra</MenuItem>
        <MenuTrigger disableButtonEnhancement>
          <MenuItem aria-label='Abrir Safra' />
        </MenuTrigger>
      </Menu>
    </>
  );
};

export function PlanningNav() {
  return (
    <>
      <Menu positioning={'after-top'}>
        <MenuTrigger disableButtonEnhancement>
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
              value='planning'
            />
          </Tooltip>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <AgriculturalPlanSubmenu />
            <HarvestSubmenu />
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
}
