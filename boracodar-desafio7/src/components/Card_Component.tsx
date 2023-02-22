import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MapPin } from "phosphor-react";
import styled from "styled-components";

interface CardProps {
	title: string;
	src: string;
	location: string;
}



export function Card_Component(props: CardProps) {
	return (
		<Card style={{ width: "24rem" }}>
			<Card.Img
				style={{
					position: "relative",
					right: "12.5px",
					width: "24rem",
				}}
				variant="top"
				src={props.src}
			/>
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold" }}>
					{props.title}
				</Card.Title>
				<Card.Text>
					{
						"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
					}
				</Card.Text>

				<Card.Text>
					<MapPin size={20} color="#e45858" /> {props.location}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
