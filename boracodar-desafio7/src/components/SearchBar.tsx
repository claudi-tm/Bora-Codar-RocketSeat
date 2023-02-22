import Form from "react-bootstrap/Form";
import { InputText } from "./InputText";
import { SearchButton } from "./SearchButton";
import { Select } from "./Select";

export function SearchBar() {
	return (
		<div
			className="search_bar d-flex p-5 gap-3"
			style={{ backgroundColor: "rgba(255, 255, 255, 1)", width:"993px" }}
		>
			<InputText></InputText>
			<Select></Select>
			<SearchButton></SearchButton>
		</div>
	);
}
