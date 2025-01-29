
import { useLocation } from "react-router-dom";

export function useBreadcrumbs() {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(segment => segment.length > 0);

    const breadcrumbs = segments.map((segment, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);
        return { label, href };
    });
  
  return breadcrumbs;
}   