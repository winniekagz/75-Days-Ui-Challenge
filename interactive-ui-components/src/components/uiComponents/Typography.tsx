import { tv } from 'tailwind-variants';
 
const CustomTypography =tv({
// base:'font-sans text-normal tracking text-Text',
variants:{
    
    fontSize:{
        caption:'text-xs  font-bold',
        display:'text-xxl font-bold font-poppins',
        logo:'text-xl uppercase  italic font-bold  font-poppins bg-gradient-to-r from-Primary  to-Secondary text-transparent bg-clip-text',
        body:'text-sm font-sans',
        title:'text-xl font-poppins text-secondary/80 capitalize font-bold',
        subTitle:'text-md font-sans font-normal text-Text/60',
        sectionTitle:'text-[28px] font-sans text-secondary/80 capitalize font-semibold',
        sectionSubTitle:'text-[20px] font-sans text-secondary/60 capitalize font-semibold',
        cardTitle:'text-normal font-sans font-bold capitalize text-Text/80',
        cardSubTitle:' text-xs font-sans font-medium text-Text/60'
    },

    color:{
        Primary:'text-primary',
        Secondary: "text-secondary",
        Accent: "text-accent",
        Background: "text-Background",
        Text: "text-Text",
        logo:'text-transparent '

    },
    background:{
        logo:'bg-gradient-to-r from-Primary  bg-clip-text'
    },
  
}
}) 
export default CustomTypography



