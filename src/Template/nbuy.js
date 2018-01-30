//共同样式
require("../Static/scss/reset/reset.scss");
require("../Static/scss/common/common.scss");
// 模板渲染
import nbuy_holder from '../Moudle/nbuy/nbuy_holder.js';
import nbuy_insured from '../Moudle/nbuy/nbuy_insured.js';
import nbuy_favoree from '../Moudle/nbuy/nbuy_favoree.js';
import nbuy_clause from '../Moudle/nbuy/nbuy_clause.js';
import nbuy_supple_info from '../Moudle/nbuy/nbuy_supple_info.js';
import nbuy_footer from '../Moudle/nbuy/nbuy_footer.js';

import nbuy_holder_group from '../Moudle/nbuy/nbuy_holder_group.js';
import nbuy_insured_group from '../Moudle/nbuy/nbuy_insured_group.js';
import nbuy_added from '../Moudle/nbuy/nbuy_added.js';


const brickObj = {
	'nbuy_holder': nbuy_holder,
	'nbuy_insured': nbuy_insured,
	'nbuy_favoree': nbuy_favoree,
	'nbuy_clause': nbuy_clause,
	'nbuy_supple_info': nbuy_supple_info,
	'nbuy_footer': nbuy_footer,
	'nbuy_holder_group': nbuy_holder_group,
	'nbuy_insured_group': nbuy_insured_group,
	'nbuy_added': nbuy_added
}

const tNbuy = function(obj, brick) {
	if (GV.nbuy_user) {
		brickObj.nbuy_supple_info = () => "";
	};
	return document.getElementById("container").innerHTML =
		brick.map((value, index, array) => array[index] =
			brickObj[value]).reduce((prev, next, index) => {
			if (index == 1) {
				prev = prev(obj);
			};
			return `${prev}${next(obj)}`;
		});
}

export default tNbuy;