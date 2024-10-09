

export default class Nav
{
  constructor()
  {
    this.element = document.createElement("nav");
    this.element.className = "navbar navbar-expand-lg bg-body-tertiary";
  }

  createNav()
  {
    this.divContainer = document.createElement("div");
    this.divContainer.className = "container-fluid";

    this.navBarBrand = document.createElement("a");
    this.navBarBrand.className = "navbar-brand";
    this.navBarBrand.setAttribute("href", "#");
    this.navBarBrand.setAttribute("type", "button");
    this.navBarBrand.innerText = "Home"

    this.buttonNavBarToggler = document.createElement("button");
    this.buttonNavBarToggler.className = "navbar-toggler";
    this.buttonNavBarToggler.setAttribute("type", "button");
    this.buttonNavBarToggler.setAttribute("data-bs-toggle", "#navbarText");
    this.buttonNavBarToggler.setAttribute("aria-controls", "navbarText");
    this.buttonNavBarToggler.setAttribute("aria-expanded", "false");
    this.buttonNavBarToggler.setAttribute("aria-label", "false");


    

    this.element.appendChild(this.navBarBrand);
    this.element.appendChild(this.divContainer);
  }

  createNav()
  {
    this.divContainer = document.createElement("div");
    this.divContainer.className = "collapse navbar-collapse";
    this.divContainer.id = "navbarNavAltMarkup";

    this.divNavBar = document.createElement("div");
    this.divNavBar.className = "nav-link";
    this.divContainer.appendChild(this.divNavBar);
    this.element.appendChild(this.divContainer);
  }

  links(name, links)
  {
    const link = document.createElement("a");
    link.className = "navbar-brand";
    link.innerText = name;
    link.setAttribute("href", links);
    this.divNavBar.appendChild(link);
  }
}
/*
  
    
    <button aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
*/
