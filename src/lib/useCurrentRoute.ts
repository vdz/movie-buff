import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";

type AppRoute = {
  path: string;
  name: string;
  children?: AppRoute[];
};

export function useCurrentRoute(routes: AppRoute[]): AppRoute | null {
  const { pathname } = useLocation();
  
  const findRoute = (routes: AppRoute[]): AppRoute | null => {
    for (const route of routes) {
      if (matchPath(route.path, pathname)) return route;
      if (route.children) {
        const childMatch = findRoute(route.children);
        if (childMatch) return childMatch;
      }
    }
    return null;
  };

  return findRoute(routes);
}