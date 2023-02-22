import Form from "react-bootstrap/Form";

export function Select() {
	return (
		<Form.Select
			aria-label="Selecione uma cidade"
			style={{ width: "348px" }}
		>
			<option>Selecione uma cidade</option>
			<option value="1">São Paulo</option>
			<option value="2">Rio de Janeiro</option>
			<option value="3">Brasília</option>
			<option value="4">Bahia</option>
			<option value="5">Salvador</option>v
		</Form.Select>
	);
}
