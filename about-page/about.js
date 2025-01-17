import { getMyProfile, getUser } from '../fetch-utils.js';
import { renderAboutHeader } from '../render-utils.js';

const body = document.querySelector('body');
const loadingScreen = document.querySelector('.loading-screen');

// EVENT LISTENERS
window.addEventListener('load', async () => {
    if (getUser()) {
        await fetchAndDisplayHeader();
    }
    loadingScreen.classList.add('invisible');
});

// FUNCTIONS
async function fetchAndDisplayHeader() {
    const profile = await getMyProfile();
    const hardHeader = document.querySelector('header');
    body.removeChild(hardHeader);
    const header = renderAboutHeader(profile);
    body.prepend(header);
}
