'use client'

import MyTable from "@/components/MyTable";
import { useEffect, useState } from "react";


const page = () => {
  const [dataSource, setDataSource] = useState(); 

  const [data, setData] = useState([

    {
      name: 'JBL Flip 4',
      status: 'Connected',
      method: 'Bluetooth',
      signal: '100%',
    },
    {
      name: 'JBL Flip 4',
      status: 'Connected',
      method: 'Bluetooth',
      signal: '100%',
    },

  ])


  function Blu() {

    window.electronAPI.invoke('checkblu').then(res => {
      setDataSource(res)
    })


  }





  useEffect(() => {
    Blu()




  }, [])










  return (
    <div className=''>

      <button onClick={Blu}>click</button>

      <h1 className='text-3xl'>{dataSource}</h1>
      <MyTable
        data={data}

      />


    </div>
  );
}

export default page;