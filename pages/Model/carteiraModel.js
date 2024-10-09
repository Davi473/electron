

export default class CarteiraModel
{
    constructor(dados)
    {
        this.dados = dados;
    }

    async getCarteira()
    {
        const carteira = await this.dados.get("/carteira");
        return carteira;
    }

    async getCarteiraTicket()
    {
        //
    }
}