import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;
