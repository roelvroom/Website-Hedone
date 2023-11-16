import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <>
      <div>
        <Link to="doel" smooth={true} duration={500}>
          Scroll naar doel
        </Link>
      </div>
    </>
  );
};

export default NavBar;
