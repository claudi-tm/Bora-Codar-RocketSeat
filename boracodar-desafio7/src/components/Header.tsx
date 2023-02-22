import { SearchBar } from "./SearchBar";



export function Header() {
	return (
		<div
			className="m-auto text-center"
			style={{
				height: "532px",
				backgroundColor: "rgba(248, 248, 255, 1)",
			}}
		>
			<img
				src="/src/assets/ilustra-01.svg"
				alt=""
				style={{ position: "absolute", top: "0rem", left: "0rem" }}
			/>
			<h3
				style={{
					color: "#E45858",
					position: "relative",
					top: "8rem",
				}}
			>
				Find your block
			</h3>
			<h1 style={{ position: "relative", top: "9rem" }}>
				Encontre os 
				<span style={{ color: "#6246EA" }}> melhores blocos</span> <br />
				de carnaval de 2023
			</h1>
			<div className="search_bar rounded" style={{position: "relative", top: "9rem", left: "17rem"}}>
				<SearchBar></SearchBar>
			</div>
			<img
				style={{ position: "absolute", top: "13.5rem", right: "0rem" }}
				src="/src/assets/ilustra-02.svg"
				alt=""
			/>
		</div>
	);
}
