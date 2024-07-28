import "./category.css";
import Input from "../../components/input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Speciality</h2>

      <div>
        <label className="sidebar-label-container" checked>
          <input onChange={handleChange} type="radio" value="" name="test" />
        </label>
        <Input
          handleChange={handleChange}
          value="General Physician"
          title="General Physician"
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Pediatrics"
          title="Pediatrics"
          name="test"

        />

<Input
          handleChange={handleChange}
          value="Dental"
          title="Dental" 
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Cold and Fever"
          title="Cold and Fever"
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Dermatology"
          title="Dermatology "
          name="test"
        />
                <Input
          handleChange={handleChange}
          value="Sexology"
          title="Sexology"
          name="test"
        /> 

<Input
          handleChange={handleChange}
          value="Gynecology"
          title="Gynecology"
          name="test"
        />               <Input
          handleChange={handleChange}
          value="General Surgery "
          title="General Surgery "
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Lab Report Analysis "
          title="Lab Report Analysis"
          name="test"
        />

<Input
          handleChange={handleChange}
          value="Gastroenterology"
          title="Gastroenterology"
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Orthopedics"
          title="Orthopedics"
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Pregnancy Issues "
          title="Pregnancy Issues"
          name="test"
        />

<Input
          handleChange={handleChange}
          value="Ear Nose and Throat "
          title="Ear Nose and Throat "
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Neurology"
          title="Neurology "
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Psychiatry"
          title="Psychiatry "
          name="test"
        />

<Input
          handleChange={handleChange}
          value="Hair Scalp Care"
          title="Hair Scalp Care"
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Psychology"
          title="Psychology "
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Cardiology"
          title="Cardiology "
          name="test"
        />

<Input
          handleChange={handleChange}
          value="Diabetes Consultant "
          title="Diabetes Consultant"
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Opthalmology"
          title="Opthalmology"
          name="test"
        />  <Input
          handleChange={handleChange}
          value="Pulmonology"
          title="Pulmonology"
          name="test"
        />

<Input
          handleChange={handleChange}
          value="Nephrology"
          title="Nephrology "
          name="test"
        />               <Input
          handleChange={handleChange}
          value="Physiotherapist"
          title="Physiotherapist "
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;