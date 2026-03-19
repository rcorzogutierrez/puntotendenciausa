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
 * 400w  → @1x mobile/desktop (≤400px display)
 * 720w  → @2x mobile 360px (360×2=720) / @1x tablet 2-col
 * 900w  → @2x tablet 450px (450×2=900)
 * 1080w → @2.625x mobile 412px (Lighthouse Moto G4) / @3x mobile 360px
 */
export function unsplashCardSrcset(url: string): string {
	if (!url || !url.includes('unsplash.com')) return '';
	return [400, 720, 900, 1080]
		.map((w) => `${unsplashCard(url, w)} ${w}w`)
		.join(', ');
}
