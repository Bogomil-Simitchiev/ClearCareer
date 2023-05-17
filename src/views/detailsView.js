import { html, nothing } from '../lib/lit-html.js';
import { getOffer } from '../services/requests.js';
import { getUser } from '../util.js';

const detailsTemplate = (offer, user) =>
html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper" class="${offer._id}">
        <img id="details-img" src="${offer.imageUrl}" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
          Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
          Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Description</h4>
            <span>${offer.description}</span
            >
          </div>
          <div id="details-requirements">
            <h4>Requirements</h4>
            <span>${offer.requirements}</span
            >
          </div>
        </div>

        ${user ? user._id == offer._ownerId ? html` 
        <div id="action-buttons">
          <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
          <a href="/delete/${offer._id}" id="delete-btn">Delete</a>
        </div>` : nothing : nothing}        
      </div>
    </section>
`

export const detailsView = (ctx) => {

  getOffer(ctx.params.id).then(offer => {
    ctx.render(detailsTemplate(offer, getUser()));
  });

}