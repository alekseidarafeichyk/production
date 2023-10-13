import { FC } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
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
