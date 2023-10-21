import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
