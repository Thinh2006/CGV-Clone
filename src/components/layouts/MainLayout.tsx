import { Footer, Header } from "components";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";

export const MainLayout = () => {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <MainContainer>
            <div className={cn({ "fixed-menu": scroll })}>
                <Header />
            </div>
            <div className={cn({ "h-[192px]": scroll })}></div>
            <Outlet />
            <Footer />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    .fixed-menu {
        position: fixed;
        z-index: 999;
        width: 100%;
        background: #fdfcf0;
        top: 0;
    }
`;
