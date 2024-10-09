export default class ViewModel
{
    constructor(carteiraView, carteiraModel)
    {
        this.carteiraView = carteiraView;
        this.carteiraModel = carteiraModel;
    }

    async carteiraTable()
    {
        const carteira = await this.carteiraModel.getCarteira();
        const table = await this.carteiraView.carteiraTable(carteira.carteira);
        return table;
    }

    async carteiraNav()
    {
        const links = [ 
            {name: "Home", link: "#"},
            {name: "Lancamento", link: "../Lancamento/index.html"}
        ];
        const nav = await this.carteiraView.carteiraNav(links);
        return nav;
    }
}