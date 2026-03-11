export function categoryToSlug(category: string): string {
	return category
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

export function getPostCategory(data: {
	category?: string;
	tags?: string[];
}): string | null {
	if (data.category) return data.category;
	if (data.tags && data.tags.length > 0) return data.tags[0];
	return null;
}
