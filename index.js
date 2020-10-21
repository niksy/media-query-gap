import parse from 'postcss-value-parser';

/**
 * @param {string} string
 *
 * @returns {string}
 */
export default (string) => {
	const tree = parse(string);

	tree.walk((node) => {
		if (node.type === 'function') {
			const values = node.nodes;
			const maxQuery = values.some((item) => {
				return /max-(?:width|height)/.test(item.value);
			});

			// If we are working with max-width/height query
			if (maxQuery) {
				values

					// Work only with pixel and em values
					.filter((item) => {
						const value = parse.unit(item.value);
						return (
							item.type === 'word' &&
							value &&
							/px|em/.test(value.unit)
						);
					})

					// Apply gap
					.map((item) => {
						const value = parse.unit(item.value);
						const step = value.unit === 'px' ? 1 : 0.01;
						item.value = [
							Number(value.number) - step,
							value.unit
						].join('');
						return item;
					});
			}
		}
	});

	return tree.toString();
};
