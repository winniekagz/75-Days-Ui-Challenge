import { tv } from 'tailwind-variants';
 
const Container =tv({
base:'bg-transparent container p-base sm:p-sm  md:p-md lg:p-14 xl:p-28 py-28',
variants:{
    rounded: {
        true: 'rounded-lg',
        false: 'rounded-none',
      },
      display:{
        centerItems:'flex flex-col justify-between items-center',
        start:'flex flex-col justify-start items-start'
      }
  
}
}) 
export default Container
