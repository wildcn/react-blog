export function strToObj(str) {
	// 将属性值转换成对象
	if (!/:/.test(str)) {
		return {
			str: str
		}
	}
	var o = str.split(';'),
		i = o.length,
		result = {};
	while (--i >= 0) {
		var target = o[i],
			tarr = target.split(':');
		result[tarr[0]] = tarr[1];
	}
	return result;
}
export function scrollTo  (targetY = 0)  {
	
	targetY = Math.ceil(targetY);
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	let y = currentScroll > targetY ? Math.floor(currentScroll - (currentScroll / 5)) : Math.ceil(currentScroll + ((targetY - currentScroll) / 5));
	window.scrollTo(0, y);
	if (y !== targetY) {
		window.requestAnimationFrame(scrollTo.bind(this, targetY));
	}
}