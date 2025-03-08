
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";


const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Dive into the Future"
          text="In a world where people constantly have phone in their hands, 
        the need for online opportunities is growing. We have a solution - fully digital access to 
        all information and services related to 
        the interior and design itself. Everything for a carefree stay in the palm of a hand."
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default MidComponentParent;
