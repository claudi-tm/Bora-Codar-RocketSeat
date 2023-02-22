import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
export function InputText() {
    return (
		<Form.Group style={{ width: "348px" }}>
			<Form.Control placeholder="Pesquise por nome"></Form.Control>
		</Form.Group>
	);
     
}