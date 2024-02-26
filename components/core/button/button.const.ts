import { ButtonSizes, ButtonVariants } from "./button.types";

export const MAPPED_SIZE_CLASSES = {
	[ButtonSizes.xs]: "text-xs px-2 py-1",
	[ButtonSizes.sm]: "text-sm px-3 py-2",
	[ButtonSizes.md]: "text-base px-4 py-3",
	[ButtonSizes.lg]: "text-lg px-6 py-4",
	[ButtonSizes.fluid]: "text-base px-4 py-3 w-full",
	[ButtonSizes.base]: "text-base p-0",
};

export const MAPPED_VARIANT_CLASSES = {
	[ButtonVariants.primary]:
		"bg-primary opacity-95 hover:opacity-100 text-white",
	[ButtonVariants.secondary]: "bg-white border border-primary text-primary",
	[ButtonVariants.success]: "bg-green-500 text-white",
	[ButtonVariants.danger]: "bg-green-600 text-white",
	[ButtonVariants.base]: "background-transparent",
};
