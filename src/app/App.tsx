import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

export const App = () => {
	const { theme } = useTheme();

	return (
		<Suspense fallback={<div>Loading</div>}>
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	);
};
