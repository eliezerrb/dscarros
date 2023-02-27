import './styles.css';

const ButtonIcon = ({labelButton=""}) => {
    return (
      <>
        {/* btn - efeito de opacidade ao passar o mouse(bootstrap) */}
        <div className="btn-container">
          <button className="btn">
            <h6>{labelButton}</h6>
          </button>
        </div>
      </>
    );
  };
  
  export default ButtonIcon;
  