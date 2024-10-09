//const { ipcRenderer } = require("electron");

import Controller  from "./Controller/controller.js";
import CarteiraModel from "./Model/carteiraModel.js";
import CarteiraView from "./View/carteiraView.js";
import ViewModel from "./ViewModel/viewModel.js"
import Web from "./Web/web.js";

const dados = new Web("http://localhost:3000");
const carteiraModel = new CarteiraModel(dados);
const carteiraView = new CarteiraView();

const viewModel = new ViewModel(carteiraView ,carteiraModel);

new Controller(viewModel);

