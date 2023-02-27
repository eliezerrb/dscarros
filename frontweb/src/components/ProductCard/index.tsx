import './styles.css';

import ProductImg from 'assets/images/product.png';
import ButtonIcon from 'components/ButtonIcon';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto" />
        </div>
        <div className="card-bottom-container">
          <h6 className="card-bottom-container-title">Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <div className="card-buttom-container">
            <ButtonIcon labelButton="Comprar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
