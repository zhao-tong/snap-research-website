const newsList = [
  {
    id: 0,
    date: "December 21, 2020",
    link: "../news.html",
    slug: "2020-snap-research-fellowship",
    title: "2020 Snap Research Fellowship",
    descriptionShort: "Congratulations to our 2020 Snap Research Fellows!",
    description: "../news/detail/2020-snap-research-fellows.html",
    metaTitle: "Congratulations to our 2020 Snap Research Fellows!",
    metaDescription: "We are pleased to announce the recipients of our 2020 Snap Research Fellowships!  Snap Research Fellowship program is designed to honor the brightest, most driven students who positively impacted research and product development during their internships at Snap. We aim to provide students additional resources and freedom to pursue their innovative ideas, helping shape them into tangible cutting-edge research projects and products. Snap Research Fellows receive a $10,000 academic award.",
  },
  {
    id: 1,
    date: "August 25, 2020",
    link: "../news.html",
    slug: "snap-research-wins-best-in-show-award-at-siggraph-2020",
    title: "Snap Research Wins “Best in Show” Award at SIGGRAPH 2020",
    descriptionShort:
      "Snap Research’s Creative Vision team won the “Best in Show” award at SIGGRAPH 2020 Real Time Live for their demo, “Interactive Style Transfer to Live Video Streams.",
    description:
      "../news/detail/snap-research-wins-best-in-show-award-at-siggraph-2020.html",
    metaTitle: "Snap Research Wins “Best in Show” Award at SIGGRAPH 2020",
    metaDescription: "Snap Research’s Creative Vision team won the “Best in Show” award at SIGGRAPH 2020 Real Time Live for their demo, “Interactive Style Transfer to Live Video Streams.” The technology is the result of a collaboration between Senior Research Scientist Menglei Chai, former Research Intern Ondřej Texler, and Lead Research Scientist Sergey Tulyakov.",
  },
  {
    id: 2,
    date: "August 10, 2020",
    link: "../news.html",
    slug: "snap-creative-challenge-acm-imx-2020",
    title:
      "Snap Creative Challenge Invites Universities to Reimagine AR Storytelling",
    descriptionShort:
      "What will storytelling look like in a world where AR is more prevalent? Snap Research organized a virtual Creative Challenge at ACM IMX, an academic conference focused on interactive media and television, to explore that exact question.",
    description: "../news/detail/snap-creative-challenge-acm-imx-2020.html",
    metaTitle:
      "Snap Creative Challenge Invites Universities to Reimagine AR Storytelling",
    metaDescription: "What will storytelling look like in a world where AR is more prevalent? Snap Research organized a virtual Creative Challenge at ACM IMX, an academic conference focused on interactive media and television, to explore that exact question.",
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
