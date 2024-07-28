import { IoMdSend } from "react-icons/io";
import '../products/product.css'

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
            <span className="total-reviews">{reviews}</span>
            <div className="price">
              {prevPrice} | {newPrice}
            </div>
            <div className="bag">
              <input type="text"/>
              <input type="submit" value="Send"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Card;