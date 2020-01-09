class CardComponent extends HTMLElement {
  constructor() {
    super();

    this.imageSrc =
      "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png";
    this._imgEl;
    this._btnEl;
    this._innerWorld;
    this._emitCustomEvent = this._emitCustomEvent.bind(this);
    this._logEvent = this._logEvent.bind(this);

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .card {
        display: flex;
        flex-direction: column;
        max-width: 25%;
        padding: 16px;
        margin: 16px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
    img {
        max-width:100%;
        max-height: 50vh;
        object-fit: contain;
    }

    p {
      margin: 0;
    }

    button {
      background-color: white; 
      color: black; 
      border: 2px solid var(--button-color, #4CAF50);
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      cursor: pointer;
      align-self: flex-end;
    }
    button:hover {
      
      background-color: var(--button-color, #4CAF50);
      color: white;
    }
    </style>

     <div class="card">
     <img>
       <h3>
       <slot name='employee-name'></slot>
       </h3>
       <p>
       <slot name='employee-position'></slot>
       </p>
       <button>Profile</button>
    </div> 
    `;
  }

  connectedCallback() {
    console.log("connectedCallback()");

    this._btnEl = this.shadowRoot.querySelector("button");
    this._btnEl.addEventListener("click", this._emitCustomEvent);

    this._innerWorld = this.shadowRoot.querySelector(".card");
    this._innerWorld.addEventListener("cardBtnClicked", this._logEvent);

    this._btnEl.addEventListener("cardBtnClicked", this._logEvent);

    if (this.hasAttribute("image-src")) {
      this.imageSrc = this.getAttribute("image-src");
    }
    this._render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback()");
    if (name === "image-src") {
      this.imageSrc = newValue;
    }

    if (oldValue === null) {
      return;
    }
    this._render();
  }

  disconnectedCallback() {
    console.log("disconnectedCallback()");
    this._btnEl.removeEventListener("click", this._emitCustomEvent);
    this._btnEl.removeEventListener("cardBtnClicked", this._logEvent);
    this._innerWorld.removeEventListener("cardBtnClicked", this._logEvent);
  }

  static get observedAttributes() {
    return ["image-src"];
  }

  _render() {
    this._imgEl = this.shadowRoot.querySelector("img");
    this._imgEl.setAttribute("src", this.imageSrc);
  }

  _emitCustomEvent(event) {
    console.log("_emitCustomEvent()");

    const cardBtnClicked = new Event("cardBtnClicked", {
      bubbles: true,
      composed: true
    });
    event.target.dispatchEvent(cardBtnClicked);
  }

  _logEvent(event) {
    console.log(`${event.type} was received`);
  }
}

customElements.define("admm-card", CardComponent);


// test image = https://www.vanillaplus.com/wp-content/uploads/2018/04/Donald-Trump-PNG-1-720x500.png
// test image2 = https://purepng.com/public/uploads/medium/purepng.com-donald-trumpdonald-trumpdonaldtrumppresidentpoliticsbusinessmanborn-in-queens-1701528042651zjwps.png