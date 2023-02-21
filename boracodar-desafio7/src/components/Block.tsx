import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card_Component } from "./Card_Component";

export function Block() {
    return (
		<Container className="d-grid gap-4">
			<Row className="gap-4">
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8.png"
					location="São Paulo - SP"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (1).png"
					location="Florianópolis - SC"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (2).png"
					location="Curitiba - PR"
				></Card_Component>
			</Row>
			<Row className="gap-4">
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (3).png"
					location="Salvador - BA"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (4).png"
					location="São Paulo - SP"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (5).png"
					location="São Paulo - SP"
				></Card_Component>
			</Row>
			<Row className="gap-4">
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (6).png"
					location="Rio de Janeiro - RJ"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (7).png"
					location="Porto Alegre - RS"
				></Card_Component>
				<Card_Component
					src="/src/assets/unsplash_b2jkMC95a_8 (8).png"
					location="São Paulo - SP"
				></Card_Component>
			</Row>
		</Container>
	);
}