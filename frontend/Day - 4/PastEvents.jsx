import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/EventList.css";
import { ProductCard } from "react-ui-cards";

function PastEvents() {
	const [toggled, setToggled] = React.useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href =
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

		
		document.head.appendChild(linkElement);

		
		return () => {
			document.head.removeChild(linkElement);
		};
	}, []); 
	const eventData = [
		{
			photos: [
				"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1561489404-42f13a2f09a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#1",
			productName: "Seminars",
			description:
				"A Seminar event showcases the latest trends in the industry and connects the attendees with the experts in the field. ",
			buttonText: "View Event",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1601996759374-f9aa091f3a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#2",
			productName: "Retreats",
			description:
				"A Retreat event is a great way to get away from the hustle and bustle of everyday life and focus on yourself. ",
			buttonText: "View Event",
		},
		
	

	];

	return (
		<>
			<Sidebar
				onBackdropClick={() => setToggled(false)}
				toggled={toggled}
				breakPoint="all"
				collapsed={false}
				backgroundColor="white"
			>
				<Menu>
                <MenuItem component={<Link to="/myevents" />}> Booked Events</MenuItem>
					<MenuItem component={<Link to="/pastevents" />}> Past Events</MenuItem>
					<MenuItem component={<Link to="/eventlist" />}> Events List</MenuItem>
					<MenuItem component={<Link to="/profile" />}>Profile</MenuItem>
                    <MenuItem component={<Link to="/" />}>Home</MenuItem>

					<MenuItem component={<Link to="/"/>}> Logout</MenuItem>
				</Menu>
			</Sidebar>
			<div className="dashboardContent">
				<main
					className="topBar"
					style={{
						display: "flex",
						padding: 10,
						justifyContent: "start",
						alignItems: "center",
					}}
				>
					<div>
						<button
							className="sidebarButton"
							onClick={() => setToggled(!toggled)}
						>
							<span className="materialSymbolsOutlined">menu</span>
						</button>
					</div>
					<h1>Past Events:</h1>
				</main>
				<div className="cardContent">
					{eventData.map((event, index) => (
						<ProductCard
							key={index}
							{...event}
							onClick={() => navigate("/bookevents")}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default PastEvents;
