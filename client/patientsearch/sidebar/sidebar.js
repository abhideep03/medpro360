import Category from "./category/category";

import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;