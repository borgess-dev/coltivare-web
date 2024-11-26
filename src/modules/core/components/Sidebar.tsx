import { Tab, TabList } from '@fluentui/react-components';
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
  SettingsFilled,
  SettingsRegular
} from '@fluentui/react-icons';

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
const SignOut = bundleIcon (SignOutFilled, SignOutRegular);
const Settings =bundleIcon (SettingsFilled, SettingsRegular);

export function Sidebar() {
  const renderTabs = () => {
    return (
      <>
        <Tab icon={<Map />} value="mapa" />
        <Tab icon={<CollectionsAdd />} value="cadastros" />
        <Tab icon={<Layer />} value="planejamento" />
        <Tab icon={<ClipboardTaskListLtr />} value="os" />
        <Tab icon={<DataBarVertical />} value="relatorios" />
      </>
    );
  };
  return (
    <div className="app-bar">
      <div className="tabs-stack">
        <TabList defaultSelectedValue="mapa" vertical>
          {renderTabs()}
        </TabList>
      </div>
      <div className="tabs-stack2">
        <TabList defaultSelectedValue="mapa" vertical>
          {renderTabs()}
        </TabList>
      </div>
    </div>
  );
}
