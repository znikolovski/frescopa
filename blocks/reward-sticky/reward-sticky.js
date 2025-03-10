import { getAEMPublish, getAEMAuthor } from '../../scripts/endpointconfig.js';

/* eslint-disable no-underscore-dangle */
export default async function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const [pictureContainer, eyebrow, title, longDescr, shortDescr, firstCta, secondCta] = props;

  block.innerHTML = `
  <div class='reward-sticky'>
      <a href="/signup" data-aue-prop="callToAction" data-aue-label="Call to Action" data-aue-type="text" class='button secondary'>${firstCta.innerText}</a>
  </div>
`;
}
