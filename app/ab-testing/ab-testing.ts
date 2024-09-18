// ab-testing.ts
export function getVariant(testName: string, variants: Array<string>, cookieName?: string): string {
	// Check if variant is already assigned in cookies
	if (typeof window !== 'undefined') {
		const storedVariant = document.cookie
			.split('; ')
			.find((row) => row.startsWith(`${cookieName || testName}=`))
			?.split('=')[1]

		if (storedVariant) return storedVariant
	}

	// Randomly assign a variant
	const randomIndex = Math.floor(Math.random() * variants.length)
	const selectedVariant = variants[randomIndex]

	// Set a cookie to persist the variant choice
	if (typeof window !== 'undefined') {
		document.cookie = `${cookieName || testName}=${selectedVariant}; path=/`
	}

	return selectedVariant
}
