import React from 'react'
interface SidebarType {
    id:number;
    step: string;
    name: string
}
const Sidebar = () => {
    const sidebarData = [
      { id: 1, step: "Step 1", name: "your info" },
      { id: 2, step: "Step 2", name: "select plan" },
      { id: 3, step: "Step 3", name: "add-ons" },
      { id: 4, step: "Step 4", name: "summary" },
    ];
     const lists: SidebarType[] = sidebarData;
  return (
    <div className='bg-[url("/assets/images/bg-sidebar-mobile.svg")] lg:bg-[url("/assets/images/bg-sidebar-desktop.svg")] w-full h-56 md:h-full bg-no-repeat bg-cover bg-center text-white lg:rounded-xl p-5'>
      <div className=" flex lg:flex-col items-center justify-center lg:items-start lg:justify-start gap-10 lg:gap-5 mt-8 md:mt-0">
        {lists.map((sidebar) => (
          <div key={sidebar.id} className="flex items-center gap-5 uppercase">
            <p className="border border-white rounded-full px-3 py-1 text-center">
              {sidebar.id}
            </p>
            <div className="hidden lg:block">
              <p className="text-sm text-[var(--grey-500)]">{sidebar.step}</p>
              <p className='font-medium'>{sidebar.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar