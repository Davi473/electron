export default class Controller 
{
  constructor(viewModel)
  {
    this.main = document.querySelector("#main");
    this.viewModel = viewModel;
    this.init();
  }

  async init()
  {
    this.nav();
    //this.table();
  }

  async chart()
  {

  }

  async nav()
  {
    const nav = await this.viewModel.carteiraNav();
    this.main.appendChild(nav.element);
  }

  async table()
  {
    const div = document.createElement("div");
    div.setAttribute("style", "margin: 40px auto; border: 1px solid black; width: 90%; padding: 20px;");
    const table = await this.viewModel.carteiraTable();
    div.appendChild(table);
    this.main.appendChild(div);
  }
}
