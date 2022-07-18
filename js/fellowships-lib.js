const fellowshipsList = [
  {
    id: 0,
    date: 'December 21, 2020',
    link: '../fellowships.html',
    title: '2020 Snap Research Fellowship',
    descriptionShort: 'Congratulations to our 2020 Snap Research Fellows!',
    description: 'Congratulations to our 2020 Snap Research Fellows!',
    event: '',
    metaTitle: 'CCongratulations to our 2020 Snap Research Fellows!',
    metaDescription: ''
  },
  {
    id: 1,
    date: 'December 25, 2020',
    link: '../fellowships.html',
    title: '2020 Snap Research',
    descriptionShort: 'Congratulations to our 2020 Snap Research Fellows!',
    description: 'Congratulations to our 2020 Snap Research Fellows!',
    event: '',
    metaTitle: 'CCongratulations to our 2020 Snap Research Fellows!',
    metaDescription: ''
  },

];

fellowshipsList.forEach((fellowship) => {
  fellowship.metaTitle = fellowship.title + " - Snap Research";
  fellowship.slug = fellowship.title.split(" ").join("-").toLocaleLowerCase();
  fellowship.url = "fellowships/fellowship.html#" + fellowship.slug;
  fellowship.link = "fellowships/fellowship.html";
});



function getFellowshipsBySlug(slug) {
  let result = fellowshipsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}



