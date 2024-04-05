import PropTypes from "prop-types";
import Button from "@/components/base/Button";
import TrashIcon from "@/assets/icons/TrashIcon";

const Counter = ({ quantity, onIncrease, onDecrease, onClearItem }) => {
  return (
    <div className="relative flex items-center justify-center ">
      <Button onClick={onDecrease} size="sm" variant="light">
        -
      </Button>
      <span className="w-6 text-center text-sm font-bold">{quantity}</span>
      <Button onClick={onIncrease} size="sm" variant="light">
        +
      </Button>
      <Button
        className="ml-3 absolute right-0"
        icon={<TrashIcon />}
        size="sm"
        variant="light"
        onClick={onClearItem}
      ></Button>
    </div>
  );
};

Counter.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onClearItem: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  quantity: 1,
};

export default Counter;
