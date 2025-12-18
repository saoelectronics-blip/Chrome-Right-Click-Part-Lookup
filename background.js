chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "searchAllSources",
      title: "Search All for \"%s\"",
      contexts: ["selection"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const query = info.selectionText;
  if (!query) return;

  const urls = [
    `https://www.radwell.com/Search/?q=${encodeURIComponent(query)}`,
    `https://www.classicautomation.com/catalogsearch/result/?q=${encodeURIComponent(query)}`,
    `https://www.galco.com/catalogsearch/result/?q=${encodeURIComponent(query)}`,
    `https://www.mc-mc.com/Search?query=${encodeURIComponent(query)}&stockedItemsOnly=false&searchType=product`,
    `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    `https://hub.afi-systems.com/product/product-list?part_num=${encodeURIComponent(query)}`
  ];

  chrome.windows.create({
    url: urls,
    focused: true
  });
});
