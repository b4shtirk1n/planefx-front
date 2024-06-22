export async function writeClipboardText(text: string) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (err: any) {
		console.error(err.message);
	}
}
