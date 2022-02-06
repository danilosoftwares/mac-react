export interface propsFinderContentItem {
  label: string;
  icon: string;
}
export interface propsItemGroup {
  label?: string;
  selected?: boolean;
  color?: string;
  items?: Array<propsFinderContentItem>
}

export interface propsGroup {
  label?: string;
  items?: Array<propsItemGroup>
}

export interface finderTyped {
  id: number;
  active: boolean;
}

export interface propsFinderTyped {
  finders: finderTyped[];
}
