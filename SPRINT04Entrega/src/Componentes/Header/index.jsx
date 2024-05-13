import { Link } from 'react-router-dom';

function Header({ menuItems }) {


  return (
    <header>
      <main className="head">
        <img className='logoICR' src='https://play-lh.googleusercontent.com/CJrMt-pFfUWLSv3BHm0QRnBgTGT6XgBTeOT7JrWtgLmCMV8X2C9J6QJh3H1kFKPdhRY' />
        <nav>
          {/* <ul className="nav nav-pills nav-fill" id="pillNav2" role="tablist" >
            {menuItems.map((menuItem, index) => (
              <li key={index} className="nav-item" role="presentation">
                <button className="nav-link active rounded-5 --bs-white" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                  <Link to={menuItem.link}>{menuItem.text}</Link>
                </button>
              </li>
            ))}
          </ul> */}
          <ul className="nav nav-pills nav-fill gap-2 p-1  bg-primary text-white rounded-5 shadow-sm" id="pillNav2" role="tablist" >
          {menuItems.map((menuItem, index) => (
            <li key={index} className="nav-item" role="presentation">
              <button className="nav-link active rounded-5 text-white" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                <Link to={menuItem.link} className='text-white'>{menuItem.text}</Link>
              </button>
            </li>
            ))}

          </ul>
        </nav>
        <img src="https://icr.usp.br/wp-content/uploads/2017/11/logos_icr_parceiros.png" />
      </main>
    </header >
  );
}

export default Header;
