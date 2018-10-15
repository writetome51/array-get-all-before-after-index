import { ifIndexNotNegative_getActionResult } 
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { getHead} from './getHead';


export function _getAllBeforeIndex(index, array){
	return ifIndexNotNegative_getActionResult(index, () => {
		return getHead(index, array);
	});
}
