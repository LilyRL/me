import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.gif';
import bg3 from './assets/bg3.gif';
import bg4 from './assets/bg4.jpg';
import bg5 from './assets/bg5.jpg';
import bg6 from './assets/bg6.png';

/**
 * Every background available to the site. Sections pick one of these, so
 * swapping a section's background is just a matter of changing its `bg` value.
 */
export const backgrounds = {
	bg1,
	bg2,
	bg3,
	bg4,
	bg5,
	bg6
};

/**
 * The fixed background used by each part of the page. Change a value here to
 * swap that section's background.
 */
export const sectionBackgrounds = {
	page: backgrounds.bg1,
	hero: backgrounds.bg2,
	cCompiler: backgrounds.bg6,
	gameEngine: backgrounds.bg6,
	imageFormat: backgrounds.bg6,
	contact: backgrounds.bg3,
	mascots: backgrounds.bg5
} as const;
