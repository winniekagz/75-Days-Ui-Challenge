
import { Carousel } from '@material-tailwind/react';

export default function ImageCarousel() {
  return (
    <div className='flex justify-center items-center'>
        <Carousel className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="sm:h-[475px] h-auto pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer max-w-[400px] object-contain rounded-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="sm:h-[475px] h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer max-w-[400px] object-contain rounded-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
         className="sm:h-[475px] h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer max-w-[400px] object-contain rounded-lg"
      />
    </Carousel>
    </div>
  )
}
