import {motion} from 'framer-motion'

export default function CustomButtom({customClass,text}:{customClass:string,text:string}) {
  return (
    <motion.div  whileHover={{scale:1.1 }}  whileTap={{ scale: 0.9, rotate: 3 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}>
        <button className={customClass}>{text}</button>
    </motion.div>
  )
}
