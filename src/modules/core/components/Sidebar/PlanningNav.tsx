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
import { useNavigate } from 'react-router';

const AgriculturalPlanSubmenu = () => {
  const Navigate = useNavigate();
  const HandleAgronomicplanClick = () => {
    return Navigate('/planning/agronomic-plan');
  };
  return (
    <>
      <Menu>
        <MenuItem
          onClick={HandleAgronomicplanClick}
          icon={<SetIcon iconType='agriculturalPlan' />}
        >
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
  const Navigate = useNavigate();
  const HandleHarvestClick = () => {
    return Navigate('/planning/harvest');
  };
  return (
    <>
      <Menu>
        <MenuItem
          onClick={HandleHarvestClick}
          icon={<SetIcon iconType='harvest' />}
        >
          Safra
        </MenuItem>
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
