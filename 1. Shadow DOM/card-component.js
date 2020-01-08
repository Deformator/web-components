class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
     <img src="https://www.techvilleonline.com/wp-content/uploads/revslider/The7-fancy-title-business/rev-person-img.png">
       <h3>
       John Doe
       </h3>
       <p>Angular Developer</p>
       <button>Profile</button>

    </div> 
    `;
  }
}

customElements.define('admm-card', CardComponent);
