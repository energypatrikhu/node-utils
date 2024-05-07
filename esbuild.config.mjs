import { build } from 'esbuild';
import {
	existsSync,
	mkdirSync,
	readFileSync,
	readdirSync,
	rmSync,
} from 'node:fs';
import { join } from 'node:path';

const __destination = './build';

async function removeOldFiles() {
	console.log('Removing old files...');

	const files = readdirSync(__destination, { withFileTypes: true });
	for (const entry of files) {
		rmSync(join(__destination, entry.name), {
			force: true,
			recursive: true,
		});
	}
}

async function buildFiles() {
	console.log('Building files...');

	const packageJson = JSON.parse(
		readFileSync('./package.json', { encoding: 'utf-8' }),
	);

	await build({
		bundle: true,
		entryPoints: ['./src/index.ts'],
		platform: 'node',
		outdir: __destination,
		logLevel: 'debug',
		minify: true,
		format: 'cjs',
		treeShaking: true,
		external: Object.keys(packageJson.dependencies || {}),
		mangleQuoted: true,
	});
}

(async function () {
	if (existsSync(__destination)) {
		await removeOldFiles();
	} else {
		mkdirSync(__destination);
	}

	await buildFiles();
})();
