import PropTypes from "prop-types";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";
import { addEvent } from "../../../Redux/Reducers/Cart";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const Cards = ({ image, name, description, id, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addEvent({ name, price }));
    Swal.fire({
      title: "Good!",
      text: "You buy a entry to this event",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div data-aos="fade-up" className={style.card}>
      <div className={style.imgCard}>
        <img src={image} />
      </div>
      <div className={style.cardSummaryContent}>
        <div className={style.cardSummary}>
          <div className={style.cardTitle}>
            <h2>{name}</h2>
          </div>
          <div className={style.cardDescription}>
            <p>{description}</p>
          </div>
          <div className={style.cardsButtons}>
            <div className={style.linkToDetail}>
              <Link to={`/detail/${id}`}>Details</Link>
            </div>
            <div className={style.buttonCart}>
              <button onClick={addToCart}>To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default Cards;
