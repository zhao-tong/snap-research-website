const newsList = [
  {
    id: 0,
    date: "August 8, 2022",
    link: "../news.html",
    slug: "neroic-2022",
    title:
      "Snap Research creates a new way to digitize and render assets for Augmented Reality",
    descriptionShort:
      "Snap Research presents NeRoic (Neural Object Capture and Rendering from Online Image Collections), a new method that explores how to digitize and render objects more easily than ever before, at SIGGRAPH.",
    description: "../news/detail/neroic-2022.html",
    metaTitle:
      "Snap Research creates a new way to digitize and render assets for Augmented Reality",
    metaDescription: "Snap Research presents NeRoic (Neural Object Capture and Rendering from Online Image Collections), a new method that explores how to digitize and render objects more easily than ever before, at SIGGRAPH.",
  },
];

function getNews() {
  const tempNewsList = newsList.map((item) => {
    const tempItems = { ...item };
    tempItems.url = "news/news-one.html#" + tempItems.slug;
    return tempItems;
  });
  return tempNewsList.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getNewsBySlug(slug) {
  let result = newsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}
