import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiOutlineDashboard/>,
        cName: 'nav-links'
    },
    {
        title: 'Store',
        path: '/store',
        icon: <MdIcons.MdLocalGroceryStore/>,
        cName: 'nav-links'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <AiIcons.AiOutlineCalendar/>,
        cName: 'nav-links'
    },
    // {
    //     title: 'Daily',
    //     path: '/daily',
    //     icon: <BsIcons.BsSun/>,
    //     cName: 'nav-links',

    //     subNav: [
    //         {
    //             title: 'Data',
    //             path: '/data/daily',
    //             icon: <BsIcons.BsSun />
    //         }
    //     ]
    // },
    {
        title: 'Canteen',
        path: '/canteen',
        icon: <MdIcons.MdFastfood/>,
        cName: 'nav-links'
    },
    {
        title: 'Daily Normal',
        path: '/dailynormal',
        icon: <BsIcons.BsSun/>,
        cName: 'nav-links'
    },
    {
        title: 'Daily Accident',
        path: '/dailyaccident',
        icon: <MdIcons.MdVaccines/>,
        cName: 'nav-links'
    },
    {
        title: 'Accidents',
        path: '/accidents',
        icon: <BiIcons.BiFirstAid/>,
        cName: 'nav-links'
    },
    {
        title: 'Pregnent',
        path: '/pregnent',
        icon: <MdIcons.MdOutlinePregnantWoman/>,
        cName: 'nav-links'
    },
    {
        title: 'Clinic',
        path: '/clinic',
        icon: <FaIcons.FaClinicMedical/>,
        cName: 'nav-links'
    },
    {
        title: 'All Patients',
        path: '/allpatients',
        icon: <BsIcons.BsPeople/>,
        cName: 'nav-links'
    },
]
