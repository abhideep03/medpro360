import Button from "../components/button";
import "./recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Doctors" />
          <Button onClickHandler={handleClick} value="General Physician" title="General Physician" />
          <Button onClickHandler={handleClick} value="Pediatrics" title="Pediatrics " />
          <Button onClickHandler={handleClick} value="Dental" title="Dental " />
          <Button onClickHandler={handleClick} value="Dermatology" title="Dermatology " />
        </div>
      </div>
    </>
  );
};

export default Recommended;