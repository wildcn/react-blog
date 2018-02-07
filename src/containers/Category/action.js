// 定义顶部导航交互的action



export const HEADLINE_ONCLICK = 'block/HEADLINE_ONCLICK'
export const GET_HEADLINE = 'news/GET_HEADLINE'


export function OnClickAction(id) {
	console.log(`actions => HEADLINE_ONCLICK id${id}` )
	return {
		type: HEADLINE_ONCLICK,
		id: id
	}
}
