/**
 * Transforma una URL de Unsplash para servir imágenes en el tamaño correcto.
 * Evita descargar imágenes de 5000x3000px cuando se muestran como miniaturas.
 *
 * @param url   URL original de heroImage
 * @param width Ancho máximo deseado en px (default 400 para tarjetas)
 */
export function unsplashCard(url: string, width = 400): string {
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

/**
 * Genera el atributo srcset para imágenes de tarjeta de Unsplash.
 * 400w  → desktop/mobile @1x (≤360px display)
 * 720w  → desktop @2x (360px * 2)
 * 900w  → tablet @2x (450px * 2)
 */
export function unsplashCardSrcset(url: string): string {
	if (!url || !url.includes('unsplash.com')) return '';
	return [400, 720, 900]
		.map((w) => `${unsplashCard(url, w)} ${w}w`)
		.join(', ');
}
