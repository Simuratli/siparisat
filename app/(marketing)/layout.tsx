import { MarketingNavbar } from '@/module/marketing';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MarketingNavbar/>
            {
                children
            }
        </div>
    )
};
export default Layout;

