const jsScriptTagsFromAssets = (assets, entrypoint, ...extra) => {
  return assets[entrypoint] ? assets[entrypoint].js ?
    assets[entrypoint].js.map(asset =>
      `<script src="${asset}" ${extra.join(" ")}></script>`
    ).join('') : '' : '';
};

export default jsScriptTagsFromAssets;
