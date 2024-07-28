import "./nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <div class="search">
      <div className="nav-container">
        <input
          className="search"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
    </div>
  );
};

export default Nav;