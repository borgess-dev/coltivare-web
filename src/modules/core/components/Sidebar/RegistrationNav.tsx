import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuSplitGroup,
  MenuTrigger,
  Tab,
  Tooltip,
} from '@fluentui/react-components';
import { SetIcon } from './Icons';

import { useNavigate } from 'react-router';

const ProductionStructureSubmenu = () => {
  const Navigate = useNavigate();
  const HandlePropertiesClick = () => {
    return Navigate('/registrations/production/properties');
  };
  const HandleFieldsClick = () => {
    return Navigate('/registrations/production/fields');
  };
  const HandleStorageClick = () => {
    return Navigate('/registrations/production/storages');
  };

  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem
            onClick={HandlePropertiesClick}
            icon={<SetIcon iconType='productionStructure' />}
          >
            Estrutura de Produção
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de estruturas de produção' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={HandlePropertiesClick}>Propriedades</MenuItem>
            <MenuItem onClick={HandleFieldsClick}>Áreas</MenuItem>
            <MenuItem onClick={HandleStorageClick}>Ármazem</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

const WorkforceSubmenu = () => {
  const Navigate = useNavigate();
  const HandleEmployeesClick = () => {
    return Navigate('/registrations/labor/employees');
  };
  const HandleTeamsClick = () => {
    return Navigate('/registrations/labor/teams');
  };
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem
            onClick={HandleEmployeesClick}
            icon={<SetIcon iconType='rh' />}
          >
            Mão de Obra
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de estruturas de produção' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={HandleEmployeesClick}>Funcionários</MenuItem>
            <MenuItem onClick={HandleTeamsClick}>Equipes</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

const AgriculturalSubMenu = () => {
  const Navigate = useNavigate();
  const HandleCropsClick = () => {
    return Navigate('/registrations/agriculture/crops');
  };
  const HandleActivityClassClick = () => {
    return Navigate('/registrations/agriculture/activity-classifications');
  };
  const HandleActivitiesClick = () => {
    return Navigate('/registrations/agriculture/activities');
  };
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem
            onClick={HandleCropsClick}
            icon={<SetIcon iconType='agricultural' />}
          >
            Agrícolas
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros Agrícolas' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={HandleCropsClick}>Cultivares</MenuItem>
            <MenuItem onClick={HandleActivityClassClick}>
              Classificação de Atividades
            </MenuItem>
            <MenuItem onClick={HandleActivitiesClick}>
              Atividades Agrícolas
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};
const MachinesSubMenu = () => {
  const Navigate = useNavigate();
  const HandleMachinesclassClick = () => {
    Navigate('/registrations/equipment/machine-classifications');
  };
  const HandleMachinesClick = () => {
    Navigate('/registrations/equipment/machines');
  };
  const HandleSpraynozzlesClick = () => {
    Navigate('/registrations/equipment/spray-nozzles');
  };
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem
            onClick={HandleMachinesClick}
            icon={<SetIcon iconType='machines' />}
          >
            Equipamentos
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de Máquinas' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={HandleMachinesclassClick}>
              Classificação de Máquinas
            </MenuItem>
            <MenuItem onClick={HandleMachinesClick}>Máquinas</MenuItem>
            <MenuItem onClick={HandleSpraynozzlesClick}>
              Bicos Pulverizadores
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};
const AgriculturalProductsSubmenu = () => {
  const Navigate = useNavigate();
  const HandleProductclassClick = () => {
    return Navigate('/registrations/products/product-classifcations');
  };
  const HandleProductsClick = () => {
    return Navigate('/registrations/products/products');
  };
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem
            onClick={HandleProductclassClick}
            icon={<SetIcon iconType='products' />}
          >
            Produtos Agrícolas
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de Insumos' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={HandleProductclassClick}>
              Classificação de Insumos
            </MenuItem>
            <MenuItem onClick={HandleProductsClick}>Produtos</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

export function RegistrationNav() {
  return (
    <>
      <Menu positioning={'after-top'}>
        <MenuTrigger disableButtonEnhancement>
          <Tooltip
            positioning='after'
            withArrow
            appearance='inverted'
            content='Cadastros'
            relationship='label'
          >
            <Tab
              className='h-10'
              icon={<SetIcon iconType='productionStructure' />}
              value='cadastros'
            />
          </Tooltip>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <ProductionStructureSubmenu />
            <AgriculturalSubMenu />
            <WorkforceSubmenu />
            <MachinesSubMenu />
            <AgriculturalProductsSubmenu />
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
}
