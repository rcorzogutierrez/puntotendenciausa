import { createIndex } from 'pagefind';

const { index, errors } = await createIndex();

if (errors.length > 0) {
	console.error('[pagefind] Error al crear índice:', errors);
	process.exit(1);
}

await index.addDirectory({ path: 'dist' });
await index.writeFiles({ outputPath: 'dist/pagefind' });
await index.deleteIndex();

console.log('[pagefind] Índice generado en dist/pagefind/');
