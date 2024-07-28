import '../recommended/recommended.css'
const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} class="button-rec">
      {title}
    </button>
  );
};

export default Button;