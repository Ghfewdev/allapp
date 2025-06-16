'use client'

import Image from 'next/image'


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* <h1 className="text-4xl font-bold mb-4">{user?.username} 🎉</h1> */}
      {/* <Image
        alt='logo'
        src={logo}
        height={180}
      /> */}
      <div className='p-3 mt-10'>
        <h1 className="text-4xl font-bold">EIS MSD</h1>
      </div>

      <br />
      <br />
      {/* <p className="mb-6">ระบบของสำนักการแพทย์</p> */}
      <div className='grid grid-cols-2 lg:grid-cols-3'>

        <a
          href={"https://health2.bangkok.go.th/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>

              <Image
                src="/eis/health.png"
                alt="logo1"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">ตรวจสุขภาพ</h1>

            </div>



          </div>
        </a>

        <a
          href={"https://www.appsheet.com/start/5a5fea49-fcf1-4247-890a-2b1c1a5c8161"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>

                <Image
                  src="/eis/run.png"
                  alt="logo2"
                  width={120}
                  height={120}
                />

                <h1 className="text-lg font-bold mt-2">วิ่งล้อมเมือง</h1>

              </div>

            </div>



          </div>
        </a>



        <a
          href={"https://healthmap.bangkok.go.th/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>


                <Image
                  src="/eis/map.png"
                  alt="logo3"
                  width={120}
                  height={120}
                />

                <h1 className="text-lg font-bold mt-2">Health Map</h1>

              </div>

            </div>



          </div>
        </a>

        <a
          href={"https://policy.bangkok.go.th/tracking/frontend/web/index.php?r=site/index"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center pb-4'>

                <Image
                  src="/eis/policy.png"
                  alt="logo4"
                  width={120}
                  height={120}
                />

                <h1 className="text-lg font-bold mt-2">Policy Tracking</h1>

              </div>

            </div>



          </div>
        </a>

        <a
          href={"https://lookerstudio.google.com/reporting/729bad69-a870-4b42-ad0f-1e62ed539d0d"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >
          <div className='grid grid-cols-1'>

            <div className='flex flex-col items-center justify-center pl-2 pb-4'>

              <Image
                src="/eis/good.png"
                alt="logo5"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">ความพึ่งพอใจ</h1>

            </div>



          </div>
        </a>

        <a
          href={"https://app.powerbi.com/view?r=eyJrIjoiZmZjZGU5MjYtNjI1NS00YjY2LWIwOGEtNmIyOWUyYTIzZjcyIiwidCI6ImRjMWI3ODc0LTE1ZTItNGQzYy05YWRmLWVhNDkxZTM2NmRhZSIsImMiOjEwfQ%3D%3D"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2 "
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>

              <Image
                src="/eis/smart.png"
                alt="logo8"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">Smart IPD</h1>

            </div>


          </div>
        </a>

        <a
          href={"https://app.powerbi.com/Redirect?action=OpenApp&appId=ea27f370-2aa8-450f-85d5-73465ef8e7f4&ctid=dc1b7874-15e2-4d3c-9adf-ea491e366dae&experience=power-bi"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >
          <div className='grid grid-cols-1'>

            <div className='flex flex-col items-center justify-center pb-4'>

              <Image
                src="/eis/data.png"
                alt="logo6"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">Data Center</h1>

            </div>



          </div>
        </a>



        <a
          href={"http://msdmec.go.th/financial/"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2"
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>

              <Image
                src="/eis/budget.png"
                alt="logo7"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">งบประมาณ</h1>

            </div>


          </div>
        </a>

        <a
          href={"http://msdmec.go.th/bhz/admin.php"}
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2 "
        >

          <div className='grid grid-cols-1'>
            <div className='flex flex-col items-center justify-center pb-4'>

              <Image
                src="/eis/bhz.png"
                alt="logo8"
                width={120}
                height={120}
              />

              <h1 className="text-lg font-bold mt-2">BHZ</h1>

            </div>



          </div>
        </a>




      </div>

      <br />
      <br />

    </div>

  )
}
