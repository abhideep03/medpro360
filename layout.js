import { Outlet, Link } from "react-router-dom";
import "./assets/layout.css";
import Footer from "./pages/footer.js";

const Layout = () => {
return(
<>
<body>
<div class="header-h1">
<div class="header-h1-text">MEDPRO:360</div>
</div>
<div class='header-h2'>
<nav class="menu">
<div class="nav-text"><Link to="/">Home</Link></div>
<div class="nav-text"><Link to="/aboutus">About us</Link></div>
<div class="nav-text"><Link to="/contact">Contact</Link></div>
</nav>
</div>
</body>
<Outlet />
<Footer/>
</>
)};

export default Layout;