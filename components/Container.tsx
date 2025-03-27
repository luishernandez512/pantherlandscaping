import React from "react";
import type { ReactNode } from "react";

interface Props{
    children: React.ReactNode;
    className?: string;
}

const Container = ({children, className}: Props) => {
    return <div className={`max-w-screen-2xl mx-auto px-2 py-10 ${className ?? ""}`}>{children}</div>;
};

export default Container;