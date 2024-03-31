import React from "react";

//include images into your bundle
import Card from "./card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";

const images = [
	{
		imagenCard : "https://www.oftalmicadelpacifico.com/wp-content/uploads/2018/08/shutterstock_101720998-500x325.jpg"
	},
	{
		imagenCard : "https://www.edigar.com.mx/wp-content/uploads/2014/10/Sandia-500x325.jpg"
	},
	{
		imagenCard : "https://tiempo.hn/wp-content/uploads/2021/01/proteinas-alimentos-500x325-1.jpg"
	},
	{
		imagenCard : "https://www.carniceriagormaz.com/wp-content/uploads/2020/06/Cerdo_Chuletas_bajas-500x325.jpg"
	}
]
//create your first component
const Home = () => {
	return (
		<><><div className="nav">
			<Navbar />
		</div>
			<div className="container">
				<Jumbotron />
				<div className="container1">
					
					<div className="row justify-content-center gap-3">
							<Card props={images}/>
					</div>
				</div>
			</div></>
			<div className="footer">
				Copyright @ your Website 2019
			</div></>
	);
};

export default Home;
