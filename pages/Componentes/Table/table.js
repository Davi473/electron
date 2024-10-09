const tableElement = {
  table() 
  {
    const element = this.newElement("table");
    element.className = "table table-hover";
    element.setAttribute("style", "margin: 40px auto; width: 90%;")
    return element;
  },

  newElement(tag)
  {
    const element = document.createElement(tag);
    return element;
  },

  filho(pai, filho)
  {
    pai.appendChild(filho);
  },

  thead(table)
  {
    const thead = tableElement.newElement("thead");
    const tr = tableElement.newElement("tr");
    tr.className = "text-center"

    const cabecalho = [
    "#", "Ticket", "Tipo", "Quantidade", "Valor Médio"
    ]

    for(let i = 0; i < cabecalho.length; i++)
    {
        const th = tableElement.newElement("th");
        th.innerText = cabecalho[i];
        tableElement.filho(tr, th);
    }

    tableElement.filho(thead, tr);    
    tableElement.filho(table, thead);    
  },

  tbody(values, table)
  {
    const tbody = tableElement.newElement("tbody");

    for(let i = 0; i < values.length; i++)
    {
        const tr = tableElement.newElement("tr");
        tr.className = "text-center"
        for(const itens in values[i])
        {
            const td = tableElement.newElement("td");
            td.innerText = values[i][itens];
            tableElement.filho(tr, td);
        }
        tableElement.filho(tbody, tr);
    }
    tableElement.filho(table, tbody);
  }
}

export default tableElement;