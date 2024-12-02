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

const ProductionStructureSubmenu = () => {
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem icon={<SetIcon iconType='productionStructure' />}>
            Estrutura de Produção
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de estruturas de produção' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem>Propriedades</MenuItem>
            <MenuItem>Áreas</MenuItem>
            <MenuItem>Ármazem</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

const WorkforceSubmenu = () => {
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem icon={<SetIcon iconType='rh' />}>Mão de Obra</MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de estruturas de produção' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem>Funcionários</MenuItem>
            <MenuItem>Equipes</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

const AgriculturalSubMenu = () => {
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem icon={<SetIcon iconType='agricultural' />}>
            Agrícolas
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros Agrícolas' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem>Cultivares</MenuItem>
            <MenuItem>Classificação de Atividades</MenuItem>
            <MenuItem>Atividades Agrícolas</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};
const MachinesSubMenu = () => {
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem icon={<SetIcon iconType='machines' />}>
            Máquinas e Implementos
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de Máquinas' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem>Classificação de Máquinas</MenuItem>
            <MenuItem>Máquinas</MenuItem>
            <MenuItem>Bicos Pulverizadores</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};
const AgriculturalProductsSubmenu = () => {
  return (
    <>
      <Menu>
        <MenuSplitGroup>
          <MenuItem icon={<SetIcon iconType='products' />}>
            Insumos Agrícolas
          </MenuItem>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem aria-label='Abrir Cadastros de Insumos' />
          </MenuTrigger>
        </MenuSplitGroup>

        <MenuPopover>
          <MenuList>
            <MenuItem>Classificação de Insumos</MenuItem>
            <MenuItem>Insumos</MenuItem>
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
