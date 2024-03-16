import React from 'react';
import Sidebar from './_components/sidebar'
import { OrgSidebar } from './_components/OrgSidebar';
import { Navbar } from './_components/Navbar';

interface LayoutDashboardProps {
    children: React.ReactNode
}

const LayoutDashboard = ({
    children
}: LayoutDashboardProps) => {
    return (
        <main>
            <Sidebar />
            <div className='pl-[60px] h-full'>
                <div className='flex gap-x-3 h-full'>
                    <OrgSidebar />
                    <div className='h-full flex-1'>
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LayoutDashboard