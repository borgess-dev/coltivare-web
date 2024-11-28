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
} from '@fluentui/react-icons';

import { SidebarPropTypes } from '../../types/SidebarPropTypes';
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

export function SetIcon({ iconType }: SidebarPropTypes) {
  if (iconType === 'map') return <Map />;
  if (iconType === 'collectionsAdd') return <CollectionsAdd />;
  if (iconType === 'layer') return <Layer />;
  if (iconType === 'clipboardTaskListLtr') return <ClipboardTaskListLtr />;
  <DataBarVertical/>
}
