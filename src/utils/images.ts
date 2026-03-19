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
 * Sirve 400w, 700w y 900w para cubrir móvil, tablet y desktop @2x.
 */
export function unsplashCardSrcset(url: string): string {
	if (!url || !url.includes('unsplash.com')) return '';
	return [400, 700, 900]
		.map((w) => `${unsplashCard(url, w)} ${w}w`)
		.join(', ');
}
