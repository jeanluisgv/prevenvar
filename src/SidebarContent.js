import React from "react"

export const SidebarContent = [
    {
        title: "Title 1",
        path: "/title1",
        completed: false,
        unlocked: true,
        lenght: 60,
        subNav: [
            {
                title: "Sub-title1",
                path: "/title1/sub-title1"
            },
            {
                title: "Sub-title2",
                path: "/title1/sub-title2"
            },
        ]
    },
    {
        title: "Title 2",
        path: "/title2",
        completed: false,
        unlocked: false,
        lenght: 60,
        subNav: [
            {
                title: "Sub-title3",
                path: "/title1/sub-title3"
            },
            {
                title: "Sub-titl4",
                path: "/title1/sub-titl4"
            },
        ]
    }
]