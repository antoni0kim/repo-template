export default {
  test: {
    watch: false,
		include: ['tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
		coverage: {
			provider: 'v8',
			reporter: ['text'],
			include: ['src/**/*.{js,ts,jsx,tsx}'],
			exclude: ['test'],
			thresholds: {
				functions: 90,
				branches: 90
			}
		}
  },
};
