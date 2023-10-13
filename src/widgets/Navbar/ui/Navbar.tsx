import { FC } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";
import { useTheme } from "app/providers/ThemeProvider";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { toggleTheme } = useTheme();

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button onClick={toggleTheme}>Toggle</Button>

			<div className={cls.links}>
				<AppLink
					className={cls.mainLink}
					theme={AppLinkTheme.INVERTED}
					to={"/"}
				>
					Main
				</AppLink>
				<AppLink to={"/about"}>About</AppLink>
			</div>
		</div>
	);
};
