import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { getHead } from '@writetome51/array-get-head-tail';


// For this function, the index cannot be negative.

export function _getAllBeforeIndex(index, array) {
	errorIfIndexIsNegative(index);
	return getHead(index, array);
}
