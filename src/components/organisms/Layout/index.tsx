import NavBlog from "molecules/Navbar/NavBlog";
import NavDash from "molecules/Navbar/NavDash";
import { useRouter } from "next/router";
import React, { Fragment, useMemo } from "react";

// import { Container } from './styles';

const Navs = { dash: NavDash, blog: NavBlog, default: Fragment };

const Layout: React.FC = ({ children }) => {
    const { pathname } = useRouter();

    const navbarType = useMemo(() => {
        if (pathname.includes("dashboard/login")) {
            return "default";
        } else if (pathname.includes("dashboard")) {
            return "dash";
        } else {
            return "blog";
        }
    }, [pathname]);

    const Navbar = useMemo(() => Navs[navbarType], [navbarType]);

    return (
        <>
            <Navbar />
            <div className="pb-10 w-full h-full">{children}</div>
        </>
    );
};

export default Layout;
