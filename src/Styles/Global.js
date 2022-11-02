import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-family: 'Muli','arial', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		-webkit-tap-highlight-color: transparent;
	}
	html, body {
		height: 100%;
	}
	
	a {
		text-decoration: none !important;
	}

	body{
		background-color: ${colors.grey};
	}
`;
export default GlobalStyles;
