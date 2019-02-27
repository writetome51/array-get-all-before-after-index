import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { getTail } from '@writetome51/array-get-head-tail';

// For this function, the index cannot be negative.

export function _getAllAfterIndex(index, array) {
	return ifIndexNotNegative_getActionResult(index, () => {
		return getTail(array.length - index - 1, array);
	});
}
