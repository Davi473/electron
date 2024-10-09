export default class Web {

    constructor(site) {
        this.site = site
        this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRhdmkxMiIsImlhdCI6MTcyODA0NDUzMywiZXhwIjoxNzI5MzQwNTMzfQ.wlGE9hp6kHO7-dlwOBq2v1jKFogaxSllKD-CGzzBuvs"
    }

    async get(url) {
        return await this.requisicao("get", url)
    }

    async post(url, valor) {
       return await this.requisicao("post", url, valor)
    }


    async requisicao(tipo, url, valor) {
		let response = await fetch(this.site + url, {
			method: tipo, //get, post, delete
			headers: { 
                "content-type": "application/json",
                "Authorization": `Bearer ${this.token}`
             },
			body: JSON.stringify(valor),
		});
            return await response.json();
	}
}
