class CardComponent extends HTMLElement {
  constructor() {
    super();
    this._imageSrc =
      'https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-74-512.png';

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
    if(this.hasAttribute('image-src')){
      this._imageSrc = this.getAttribute('image-src')
    }
    const imgEl = this.shadowRoot.querySelector("img");
    imgEl.setAttribute("src", this._imageSrc);
  }
}

customElements.define("admm-card", CardComponent);
