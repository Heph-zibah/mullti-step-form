import React from 'react'
import Image from 'next/image'
const Success = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center my-[20%]'>
      <div>
        <Image
          src="/assets/images/icon-thank-you.svg"
          alt="mark icon"
          width={24}
          height={24}
          className="w-auto h-auto"
        />
      </div>
      <div className='mt-5'>
        <h1 className="text-2xl lg:text-4xl text-[var(--blue-950)] font-bold">
          Thank you!
        </h1>
        <p className="text-[var(--grey-500)] mt-2 px-10">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}

export default Success