import Nav from "../Componentes/Nav/nav.js";
import tableElement from "../Componentes/Table/table.js";

export default class CarteiraView 
{
    constructor() {}

    async carteiraTable(values)
    {
       const table = tableElement.table();
       tableElement.thead(table);
       tableElement.tbody(values, table);
       return table
    }

    async carteiraNav(values)
    {
        const nav = new Nav();
        nav.createNav();
        for(let i = 0; i < values.length; i++)
        {
            nav.links(values[i].name, values[i].link);
        }
        return nav;
    }
}