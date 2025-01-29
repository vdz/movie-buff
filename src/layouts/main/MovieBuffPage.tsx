import { Outlet } from "react-router-dom";
import { ContentWrapper, PageWrapper } from "./MovieBuffPage.styled";
import { Header } from "@/components/Header/Header";

export function MovieBuffPage() {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </PageWrapper>
    )
}