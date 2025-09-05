'use client';

import React, { useState, useEffect, useRef } from 'react';


const Works = () => {

  return (
    <div className="relative">

      {/* Main Content */}
      <main className="relative z-2">
        <div className='min-h-screen flex items-center justify-center'>
          <h1 className='text-[300px] font-bold'>Projects</h1>  
        </div>        

        {/* first section */}
        <div className='min-h-screen grid grid-cols-3 gap-4'>
          <div className='bg-amber-400 col-span-1 h-[800px]' style={{ marginTop: '300px' }}/>
          <div className='bg-amber-400 col-span-1 h-[800px]' />
          <div className='bg-amber-400 col-span-1 h-[800px]' style={{ marginTop: '1300px' }}/>
        </div>

         {/* second section */}
         <div className='min-h-screen grid grid-cols-3 gap-4' style={{ marginTop: '100px' }}>
          <div className='col-span-1'/>
          <div className='bg-amber-400 col-span-2' />
        </div>

         {/* second section */}
         <div className='min-h-screen grid grid-cols-2 gap-4' style={{ marginTop: '100px' }}>
          <div className='col-span-1 h-[800px]'>
            <div className='h-full w-2/3 bg-amber-400'></div>
          </div>
          <div className='bg-amber-400 col-span-1 h-[800px]' />
        </div>
      </main>
    </div>
  );
};

export default Works;
