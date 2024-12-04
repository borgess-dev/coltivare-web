import {
  DatabaseFilled,
  DatabaseRegular,
  bundleIcon,
  ClipboardTaskListRtlFilled,
  ClipboardTaskListRtlRegular,
  DataBarVerticalFilled,
  DataBarVerticalRegular,
  CalendarEditFilled,
  CalendarEditRegular,
  MapFilled,
  MapRegular,
  BoxRegular,
  BoxFilled,
  CropRegular,
  CropFilled,
  HomeAddRegular,
  HomeAddFilled,
  PeopleRegular,
  PeopleFilled,
  VehicleTractorRegular,
  VehicleTractorFilled,
  LeafThreeFilled,
  LeafThreeRegular,
  CalendarLtrFilled,
  CalendarLtrRegular,
} from '@fluentui/react-icons';

import { IconPropTypes } from '../../types/SidebarPropTypes';
const Map = bundleIcon(MapFilled, MapRegular);
const Database = bundleIcon(DatabaseFilled, DatabaseRegular);
const CalendarEdit = bundleIcon(CalendarEditFilled, CalendarEditRegular);
const ClipboardTaskListLtr = bundleIcon(
  ClipboardTaskListRtlFilled,
  ClipboardTaskListRtlRegular
);
const DataBarVertical = bundleIcon(
  DataBarVerticalFilled,
  DataBarVerticalRegular
);
const Box = bundleIcon(BoxFilled, BoxRegular);
const Crop = bundleIcon(CropFilled, CropRegular);
const HomeAdd = bundleIcon(HomeAddFilled, HomeAddRegular);
const People = bundleIcon(PeopleFilled, PeopleRegular);
const VehicleTractor = bundleIcon(VehicleTractorFilled, VehicleTractorRegular);
const LeafThree = bundleIcon(LeafThreeFilled, LeafThreeRegular);
const CalendarLtr = bundleIcon(CalendarLtrFilled, CalendarLtrRegular);

export function SetIcon({ iconType }: IconPropTypes) {
  if (iconType === 'map') return <Map />;
  if (iconType === 'registration') return <Database />;
  if (iconType === 'planning') return <CalendarEdit />;
  if (iconType === 'serviceOrder') return <ClipboardTaskListLtr />;
  if (iconType === 'report') return <DataBarVertical />;
  if (iconType === 'products') return <Box />;
  if (iconType === 'agricultural') return <Crop />;
  if (iconType === 'productionStructure') return <HomeAdd />;
  if (iconType === 'rh') return <People />;
  if (iconType === 'machines') return <VehicleTractor />;
  if (iconType === 'agriculturalPlan') return <LeafThree />;
  if (iconType === 'harvest') return <CalendarLtr />;
}
