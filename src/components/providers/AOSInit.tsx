"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        AOS.init({
            duration: 700,
            once: true,
            offset: 0,
            easing: "ease-out",
            anchorPlacement: "top-bottom",
        });
    }, []);

    return null;
}
