export interface MenuItem {
  name: string;
  path: string;
}

export interface RouteDefinition {
  name: string;
  path: string;
  isPublic: boolean;
  showInNavigation: boolean;
  icon?: string;
}
