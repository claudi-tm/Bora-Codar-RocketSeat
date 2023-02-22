import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card_Component } from "./Card_Component";

export function Block() {
    return (
		<Container className="d-grid gap-4 justify-content-center">
			<Row className="gap-4">
				<Card_Component
					title="O Python do vovô não sobe mais"
					src="/src/assets/unsplash_b2jkMC95a_8.png"
					location="São Paulo - SP"
				></Card_Component>
				<Card_Component
					title="Todo mundo null"
					src="/src/assets/unsplash_b2jkMC95a_8 (1).png"
					location="Florianópolis - SC"
				></Card_Component>
				<Card_Component
					title="Hoje dou exception"
					src="/src/assets/unsplash_b2jkMC95a_8 (2).png"
					location="Curitiba - PR"
				></Card_Component>
			</Row>
			<Row className="gap-4">
				<Card_Component
					title="Manda Node"
					src="/src/assets/unsplash_b2jkMC95a_8 (3).png"
					location="Salvador - BA"
				></Card_Component>
				<Card_Component
					title="Só no back-end"
					src="/src/assets/unsplash_b2jkMC95a_8 (4).png"
					location="São Paulo - SP"
				></Card_Component>
				<Card_Component
					title="Esse anel não é de Ruby"
					src="/src/assets/unsplash_b2jkMC95a_8 (5).png"
					location="São Paulo - SP"
				></Card_Component>
			</Row>
			<Row className="gap-4">
				<Card_Component
					title="Pimenta no C# dos outros é refresco"
					src="/src/assets/unsplash_b2jkMC95a_8 (6).png"
					location="Rio de Janeiro - RJ"
				></Card_Component>
				<Card_Component
					title="EnCACHE aqui"
					src="/src/assets/unsplash_b2jkMC95a_8 (7).png"
					location="Porto Alegre - RS"
				></Card_Component>
				<Card_Component
					title="Não valho nada mas JAVA li"
					src="/src/assets/unsplash_b2jkMC95a_8 (8).png"
					location="São Paulo - SP"
				></Card_Component>
			</Row>
		</Container>
	);
}