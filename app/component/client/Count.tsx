"use client"

import React from 'react'
import CountUp from 'react-countup';

const currentDate = new Date();
const currentYear: any = currentDate.getFullYear();
const years: number = currentYear - 1996 ;

export default function Count() {
  return (

      <CountUp 
        end={years}
        duration={8}
      />

  )
}
