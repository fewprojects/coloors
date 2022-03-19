import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="container-980">
      <div className='flex-sb-m'>
                <h3 className="home-title ">
                    coloors
                </h3>
                <div>
                    <Link to="/add">+ Add Theme</Link>
                </div>
            </div>
            <br />
    </div>
  );
}
export default Header;
