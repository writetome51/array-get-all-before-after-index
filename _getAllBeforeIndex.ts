import { ifIndexNotNegative_getActionResult } 
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { getHead} from '@writetome51/array-get-head-tail';

// For this function, the index cannot be negative.

export function _getAllBeforeIndex(index, array){
	return ifIndexNotNegative_getActionResult(index, () => {
		return getHead(index, array);
	});
}
