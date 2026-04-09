import { loadFragment } from '../../blocks/fragment/fragment.js';

export default async function decorate(doc) {
  const main = doc.querySelector('main');
  if (!main) return;

  // Build sidebar from content fragment
  const sidebar = document.createElement('aside');
  sidebar.className = 'dashboard-sidebar';
  const fragment = await loadFragment('/dashboard-sidebar');
  if (fragment) {
    sidebar.append(...fragment.childNodes);
  }

  // Wrap existing main content
  const content = document.createElement('div');
  content.className = 'dashboard-content';
  while (main.firstChild) content.append(main.firstChild);

  const layout = document.createElement('div');
  layout.className = 'dashboard-layout';
  layout.append(sidebar, content);
  main.append(layout);
}
