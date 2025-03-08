import PropTypes from 'prop-types'
import Button from '../shared/Button';

const MidButton = ({ buttons, filter, selected }) => {
  return (
    <div className="flex items-center pt-8 gap-2">
      {buttons?.map((button) => {
        return (
          <Button 
            className={`text-white mr-2 ${ selected === button.id ? " mr-4" : " mr-4"}`
            }
            text={button.name}
            key={button.id}
            onClick={() => filter(button.id)}
          >
           
          </Button>
        );
      })}
    </div>
  );
};

MidButton.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
    })
  ).isRequired, 
  filter: PropTypes.func.isRequired, 
  selected: PropTypes.string.isRequired, 
};
export default MidButton;
