/**
 * Transforma una URL de Unsplash para servir imágenes en el tamaño correcto.
 * Evita descargar imágenes de 5000x3000px cuando se muestran como miniaturas.
 *
 * @param url   URL original de heroImage
 * @param width Ancho máximo deseado en px (default 800 para tarjetas)
 */
export function unsplashCard(url: string, width = 800): string {
	if (!url || !url.includes('unsplash.com')) return url;

	try {
		const u = new URL(url);
		u.searchParams.set('w', String(width));
		u.searchParams.set('q', '75');
		u.searchParams.set('auto', 'format');
		u.searchParams.set('fit', 'crop');
		return u.toString();
	} catch {
		return url;
	}
}
