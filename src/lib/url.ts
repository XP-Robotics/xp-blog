/** Prefixes a site-absolute path with the configured base, leaving external URLs alone. */
export function withBase(path: string) {
	if (!path.startsWith('/')) return path;
	return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
