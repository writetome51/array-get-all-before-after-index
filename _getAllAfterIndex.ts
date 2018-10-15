import { ifIndexNotNegative_getActionResult } 
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { getTail } from './getTail';


export function _getAllAfterIndex(index, array) {
	return ifIndexNotNegative_getActionResult(index, () => {
		return getTail(array.length - index - 1, array);
	});
}
