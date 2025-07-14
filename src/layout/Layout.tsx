import React from 'react'
import Sidebar from '@/components/custom/Sidebar'
import { LayoutProps } from '@/lib/type'
const Layout = ({children}: LayoutProps) => {
  return (
    <div className=" w-full max-w-4xl lg:mx-auto">
      <aside className="w-full shrink-0 lg:hidden">
        <Sidebar />
      </aside>
      <div className="flex gap-6 md:min-h-[500px] bg-white mx-5 p-5 rounded-xl -mt-24 mb-24 lg:-my-0">
        <aside className="w-64 shrink-0 hidden lg:block">
          <Sidebar />
        </aside>

        <main className="flex-1 relative ">{children}</main>
      </div>
    </div>
  );
}

export default Layout