import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.png"
import "./carousel.css"
const Carrousel = () => {


    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" data-bs-interval="3000">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={banner1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={banner2} class="d-block w-100" alt="..." />
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Carrousel