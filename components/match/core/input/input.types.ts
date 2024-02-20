import { InputHTMLAttributes } from "react";

export interface InputComponentProps
	extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	error?: string;
	wrapperClass?: string | undefined;
	labelClass?: string | undefined;
	prefix?: string;
	suffix?: string;
}
