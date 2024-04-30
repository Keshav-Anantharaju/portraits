import './navbar.css'

import "bootstrap-icons/font/bootstrap-icons.css";
function Navbar(props) {
	return (
		<nav className='mainnav'>
			<div className=' primary'>
			<h1>Portraits</h1>
				{/* <div className='leftdiv'>
					
					<a href="#body-container" ><h3 className="links">Home</h3></a>




				</div> */}
				{/* <div className='rightdiv'>
					<form>
					<input value={props.name} onChange={props.handleChange}></input>
					<button className='btn btn-primary'> <i class="bi bi-search"></i> Search</button>
					</form>
				</div> */}
			</div>
		</nav>
		);

}
export default Navbar;