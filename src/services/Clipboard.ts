export async function writeClipboardText(text: string) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error);
	}
}
