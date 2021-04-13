import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from './Pages/Home';
import Manga from './Pages/Manga';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
	<div>
	  <Router>
		  	<ScrollToTop>
				<Sidebar></Sidebar>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					<Route path="/manga">
						<Manga></Manga>
					</Route>
				</Switch>
			</ScrollToTop>
	  </Router>
	</div>
  );
}

export default App;
