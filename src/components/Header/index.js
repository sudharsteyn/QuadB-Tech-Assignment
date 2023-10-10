import { withRouter } from "react-router-dom";

const Header = (props) => {
  const handleLogout = () => {
    const { history } = props;
    history.replace("/login");
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default withRouter(Header);
