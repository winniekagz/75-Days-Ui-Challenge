
import { motion } from "framer-motion";

const AccordionItem = ({ id, title, content, name }:{id:string,title:string,content:string,name:string}) => {
  return (
    <div className="collapse bg-base-200">
      <input type="radio" name={name} id={id} />
      <label htmlFor={id} className="collapse-title text-xl font-medium">
        {title}
      </label>
      <motion.div 
        className="collapse-content"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

const Accordion = ({ items, name }:{name:string,items:{title:string,content:string,}[]}) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`${name}-${index}`}
          name={name}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
