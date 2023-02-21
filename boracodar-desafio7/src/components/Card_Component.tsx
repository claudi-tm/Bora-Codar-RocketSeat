import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MapPin } from "phosphor-react";

interface CardProps {
	src: string;
	location: string;
}

export function Card_Component(props: CardProps) {
	return (
		<Card style={{ width: "24rem" }}>
			<Card.Img variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					{
						"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
					}
				</Card.Text>

				<Card.Text>
					<MapPin size={20} color="#e45858" /> {props.location}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}
