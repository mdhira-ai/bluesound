'use client'

import MyTable from "@/components/MyTable";
import { useEffect, useState } from "react";


const page = () => {
  const [dataSource, setDataSource] = useState();

  const [data, setData] = useState()


  function Blu() {

    // window.electronAPI.invoke('blu2').then((res) => {

    //     console.log(res)


    // } )


  }

  useEffect(() => {

    window.electronAPI.on('blu', (e, data) => {
      const jsonArray = JSON.parse(data.replace(/'/g, '"'));

      // Create a map using the 'address' property as the key
      const mapFromJson = new Map(jsonArray.map(obj => [obj.address, obj]));

      // Create an array of the map values

      const values = Array.from(mapFromJson.values());

      setData(values)



    })

  }, [])




  // useEffect(() => {
  //   Blu()






  // }, [])










  return (
    <div className=''>


      <MyTable
        data={data}

      />


    </div>
  );
}

export default page;