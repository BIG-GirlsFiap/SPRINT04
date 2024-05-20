import { Link } from 'react-router-dom';

function Header({ menuItems }) {


  return (
    <header>
      <main className="head">
        <section className='Logo'>
          <img className='logoICR' src='https://play-lh.googleusercontent.com/CJrMt-pFfUWLSv3BHm0QRnBgTGT6XgBTeOT7JrWtgLmCMV8X2C9J6QJh3H1kFKPdhRY' />
          <p>Instituto da Criança e do Adolescente</p>
        </section>
        <nav>
          <div className="menu">
            {menuItems.map((menuItem, index) => (
              <div key={index}>
                <button key={index}>
                  <Link to={menuItem.link}>{menuItem.text}</Link>
                </button>
              </div>
            ))}

          </div>
          {/* <ul className="menu" >
            {menuItems.map((menuItem, index) => (
              <li key={index} >
                <button >
                  <Link to={menuItem.link}>{menuItem.text}</Link>
                </button>
              </li>
            ))}
          </ul> */}
        </nav>
        <img src="https://icr.usp.br/wp-content/uploads/2017/11/logos_icr_parceiros.png" />
      </main>
    </header >
  );
}

export default Header;
