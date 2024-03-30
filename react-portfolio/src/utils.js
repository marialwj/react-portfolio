export const getImageUrl = (path) => {
    console.log(path); // Check what path is being passed
    return new URL(`/assets/${path}`, import.meta.url).href;
};
