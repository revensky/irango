module.exports = {
  '{apps,libs,tools}/**/*.{js,jsx,ts,tsx,html,css,scss}': (files) => {
    const fileList = files.join(',');
    return [`nx affected:lint --fix --files ${fileList}`, `nx format:write --files ${fileList}`];
  },
};
