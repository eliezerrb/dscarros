import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const ButtonSearch = () => {
    return (
      <>
        {/* btn - efeito de opacidade ao passar o mouse(bootstrap) */}
        <div className="btn-container">
            <input
              id="ctrl-search"
              className="form-input"
              name="search"
              type="search"
              placeholder="Digite sua busca"
            />

          <div className="btnSearch">
            <ButtonIcon labelButton="buscar"/>
          </div>
        </div>
      </>
    );
  };
  
  export default ButtonSearch;