this.ServerResponse = fetchJsonp(Apis.getNewsClass).then((res) => res.json()).then((json) => {
			cb && cb(json.result);
		}).catch((e) => {
			console.log(e)
			cb && cb(Data.getNewsClass.result);
		})