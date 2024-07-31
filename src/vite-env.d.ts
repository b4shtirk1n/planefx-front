/// <reference types="vite/client" />

declare module "*.svg" {
	const content: unknown;
	export default content;
}
