import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/EventList.css";
import { ProductCard } from "react-ui-cards";

function MyEvents() {
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
				"https://images.unsplash.com/photo-1601996759374-f9aa091f3a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#2",
			productName: "Retreats",
			description:
				"A Retreat event is a great way to get away from the hustle and bustle of everyday life and focus on yourself. ",
			buttonText: "Edit Application Status",
		},
		{
			photos: [
				"https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://plus.unsplash.com/premium_photo-1661281345831-72aac72beb52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#3",
			productName: "Team Building",
			description:
				"An activity that strengthens the bonds and skills of a group of people who work together.",
			buttonText: "Edit Application Status",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1440&dpr=1",
			],
			float: true,
			price: "#4",
			productName: "Milestones",
			description:
				"A significant point in a project that marks the completion of a major task or achievement.",
			buttonText: "Edit Application Status",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#5",
			productName: "Launch Party",
			description:
				"Host an event to celebrate and promote a new release, such as a product, business, or service.",
			buttonText: "Edit Application Status",
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
					<MenuItem component={<Link to="/profile" />}> Profile</MenuItem>
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
					<h1>My Events:</h1>
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

export default MyEvents;
