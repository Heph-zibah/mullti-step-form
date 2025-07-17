import React from 'react'
import { LayoutProps } from '@/lib/type';

const StepsLayout = ({children, title, subtitle} : LayoutProps) => {
  return (
    <section className="max-w-md mx-auto ">
      <div className="mb-5">
        <h1 className="text-2xl lg:text-4xl text-[var(--blue-950)] font-bold">
          {title}
        </h1>
        <p className="text-[var(--grey-500)] mt-2">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export default StepsLayout