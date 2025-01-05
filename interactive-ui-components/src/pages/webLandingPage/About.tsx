
import { Boxing2, FitBabe2, Gym, Gym2 } from '../../assets/images'
import CustomTypography from '../../components/uiComponents/Typography'
import { about } from '../../data/gym/classes'

export default function About() {
  return (
    <div className="max-w-[1320px] mx-auto px-[15px] my-6">
    {/* Title Section */}
    
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-6 py-8">
 
  <div className="md:col-span-3 flex space-x-4">
   
    <div className="flex flex-col space-y-4">
      <img src={Gym2} alt="Gym2" className="w-auto min-w-[200px] max-w-[400px] h-auto object-cover min-h-[200px] max-h-[400px] rounded-lg" />
      <img src={Boxing2} alt="Boxing2" className="w-auto min-w-[200px] max-w-[400px] h-auto object-cover min-h-[200px] max-h-[400px] rounded-lg" />
    </div>

 
    <div className="flex items-center">
      <img src={FitBabe2} alt="FitBabe2" className="w-auto min-w-[200px] max-w-[400px] h-auto object-cover lg:min-h-[400px] lg:max-h-[400px] rounded-lg" />
    </div>
  </div>


 
  <div className="md:col-span-2 flex flex-col justify-center space-y-4">
  <h1 className={CustomTypography({ fontSize: 'title', color: 'Secondary' })}>
    Your Fitness, Your Way
  </h1>
  <p className={CustomTypography({fontSize:'subTitle',color:'Text'})}>
    Welcome to a gym experience tailored to your needs. Whether you're starting your fitness journey or reaching new heights, we’re here to help.
  </p>

<div className=" rounded-lg  ">

<div className="grid grid-cols-2 gap-4">
<div className="card bg-Accent/20 text-primary-content  ">
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title">Our Mission</h2>
    <p className={CustomTypography({fontSize:'cardSubTitle'})}>To empower individuals to achieve their fitness goals through an intuitive platform that supports goal-setting, progress tracking, and personalized resources.

</p>
  </div>
</div>

<div className="card bg-Accent/20 text-primary-content ">
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title">Our Vision</h2>
    <p className={CustomTypography({fontSize:'cardSubTitle'})}>To be the go-to digital fitness companion, inspiring healthier, happier lives worldwide.

</p>
  </div>
</div>
</div>
  {/* {about?.map((item,index)=>(
    <div className="flex px-6 gap-x-4 items-center justify-start font-sans py-2 ">
    <div className=" p-4 bg-Primary/60 rounded-full text-center text-white max-w-6 max-h-6">
        <p>{index+1}</p>
    </div>
    <div className="flex flex-col  items-start ">
    <strong className={`${CustomTypography({ fontSize: 'subTitle' })} !font-bold text-primary-600`}>
        {item.title} :
      </strong>
      <span className={`${CustomTypography({ fontSize: 'cardTitle' })} `}>{item?.description}</span>
    </div>
  </div>
  ))} */}
</div>
</div>



</div>

    </div>
  )
}
