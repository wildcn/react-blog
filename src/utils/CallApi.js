import {
	CALL_API
} from 'redux-api-middleware'


function callAPP({
	api,
	action,
	param,
	meta = {}
}) {
	if (param) {
		for(var i in param){
			api += `&${i}=${param[i]}`;
		}
	}
	return {
		[CALL_API]: {
			endpoint: api,
			method: 'GET',
			types: [{
					type: action + '_REQUEST',
				}, {
					type: action + '_SUCCESS',
					payload: (action, state, res) => {
						return res.json().then((json) => json);
					},
				}, {
					type: action + '_FAILURE',
					payload: {
						error: action + '_FAILURE'
					}
				}

			]
		}
	}
}
export default callAPP;