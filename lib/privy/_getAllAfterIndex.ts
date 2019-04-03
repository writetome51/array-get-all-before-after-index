import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { getTail } from '@writetome51/array-get-head-tail';


// For this function, the index cannot be negative.

export function _getAllAfterIndex(index, array) {
	errorIfIndexIsNegative(index);
	return getTail(array.length - index - 1, array);
}
