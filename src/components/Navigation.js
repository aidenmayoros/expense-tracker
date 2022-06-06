import * as React from "react";
import { useNavigate, useLocation } from "react-router";

export default function Navigation() {
	let navigate = useNavigate();
	const { pathname } = useLocation();

	const shouldHideNavigation = [
		"/login",
		"/forgot-password",
		"/register",
	].includes(pathname);

	if (shouldHideNavigation) {
		return null;
	}

	return <div>In construction...</div>;
}
