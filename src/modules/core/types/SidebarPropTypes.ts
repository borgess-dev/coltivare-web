export type IconPropTypes = {
  iconType:
    | 'map'
    | 'registration'
    | 'planning'
    | 'serviceOrder'
    | 'report'
    | 'products'
    | 'agricultural'
    | 'productionStructure'
    | 'rh'
    | 'machines'
    | 'agriculturalPlan'
    | 'harvest';
};

export type TabPropTypes = {
  tabType: 'map' | 'registration' | 'planning' | 'serviceOrder' | 'report';
};
export type SidebarPropTypes = {
  dividerIsVisible: boolean;
};
