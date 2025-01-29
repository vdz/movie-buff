import { Link } from "react-router-dom";
import { useBreadcrumbs } from "@/lib/useBreadcrumbs";
import { Breadcrumbs, HeaderStyled, SiteTitle } from "./Header.styled";

export function Header() {
    const breadcrumbs = useBreadcrumbs();

    return <HeaderStyled>
        <SiteTitle>
            MovieBuff
        </SiteTitle>
        {showBreadcrumbs()}
    </HeaderStyled>

    function showBreadcrumbs() {
        const routes = breadcrumbs.map((breadcrumb) => (
            {
                title: <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
            }
        ));
        
        routes.unshift({
            title: <Link to="/">Home</Link>
        });

        return <Breadcrumbs items={routes} />

    }
}

