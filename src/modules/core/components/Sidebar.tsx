import {
  Button,
  Tab,
  TabList,
  Tooltip,
} from '@fluentui/react-components';
import {
  CollectionsAddFilled,
  CollectionsAddRegular,
  bundleIcon,
  ClipboardTaskListLtrFilled,
  ClipboardTaskListLtrRegular,
  DataBarVerticalFilled,
  DataBarVerticalRegular,
  LayerFilled,
  LayerRegular,
  MapFilled,
  MapRegular,
  SignOutFilled,
  SignOutRegular,
  Settings20Filled,
  Settings20Regular,
} from '@fluentui/react-icons';
import '../styles/Sidebar.sass';

const Map = bundleIcon(MapFilled, MapRegular);
const CollectionsAdd = bundleIcon(CollectionsAddFilled, CollectionsAddRegular);
const Layer = bundleIcon(LayerFilled, LayerRegular);
const ClipboardTaskListLtr = bundleIcon(
  ClipboardTaskListLtrFilled,
  ClipboardTaskListLtrRegular
);
const DataBarVertical = bundleIcon(
  DataBarVerticalFilled,
  DataBarVerticalRegular
);
const SignOut = bundleIcon(SignOutFilled, SignOutRegular);
const Settings = bundleIcon(Settings20Filled, Settings20Regular);

export function Sidebar() {
  const renderTabs = () => {
    return (
      <>
        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Mapa"
          relationship="label"
        >
          <Tab className="h-10" icon={<Map />} value="mapa" />
        </Tooltip>

        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Cadastros"
          relationship="label"
        >
          <Tab className="h-10" icon={<CollectionsAdd />} value="cadastros" />
        </Tooltip>
        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Planejamento"
          relationship="label"
        >
          <Tab className="h-10" icon={<Layer />} value="planejamento" />
        </Tooltip>
        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Ordens de Serviço"
          relationship="label"
        >
          <Tab className="h-10" icon={<ClipboardTaskListLtr />} value="os" />
        </Tooltip>
        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Relatórios"
          relationship="label"
        >
          <Tab className="h-10" icon={<DataBarVertical />} value="relatorios" />
        </Tooltip>
      </>
    );
  };
  return (
    <div className="relative app-bar h-screen w-12 flex flex-col justify-between">
      <div className="shadow-light absolute w-2 h-screen right-0"></div>
      <div className="tabs-stack flex align-center justify-center mt-2 ">
        <TabList className="gap-2" defaultSelectedValue="mapa" vertical>
          {renderTabs()}
        </TabList>
      </div>
      <div className="buttons-stack gap-2 flex flex-col align-center justify-center relative mx-1 my-2">
        <Tooltip
          positioning="after"
          withArrow
          appearance="inverted"
          content="Configurações"
          relationship="label"
        >
          <Button
            size="large"
            appearance="subtle"
            icon={<Settings></Settings>}
          ></Button>
        </Tooltip>
        <Tooltip
          
          positioning="after"
          withArrow
          appearance="inverted"
          content="Sair"
          relationship="label"
        >
          <Button
            size="large"
            appearance="subtle"
            icon={<SignOut></SignOut>}
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
}
