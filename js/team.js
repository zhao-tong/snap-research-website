let publicationForCategory = [];

$(function () {
  const pathnamePage = window.location.pathname;
  const teamsCategory = {
    "computational-imaging": "computationalImaging",
    "computational-social-science": "computationalSocialScience",
    "human-computer-interaction": "humanComputerInteraction",
    "creative-vision": "creativeVision",
    all: "all",
  };

  const categoryPathname = Object.keys(teamsCategory).find((el) =>
    pathnamePage.includes(el)
  );

  const categoryTeam = teamsCategory[categoryPathname];

  const metaTitle = categoryPathname.split('-').map(el => {
    return el[0].toLocaleUpperCase() + el.slice(1)
  }).join(' ');

  let categoryTeamMembers = [];

  if (categoryTeam) {
    categoryTeamMembers = teamMembersForTeamCategory[categoryTeam];
  } else {
    categoryTeamMembers = teamMembersForTeamCategory.all;
  }
  categoryTeamMembers = categoryTeamMembers.map((memberId) => {
    const members = teamMembersList.find((memner) => memner.id === memberId) || {};
    return members.name
  });

  publicationForCategory = publicationsList.filter((publication) => {
    return categoryTeamMembers.some((category) => {
      return publication.authors.includes(category);
    });
  });

  console.log(publicationForCategory)


  if (!publicationForCategory.length) {
    $(".team--detail-publications h2:eq(0)").hide();
  }

  const mDescr = $(".team--nav-h3 ~ p:eq(0)").text();
  $("title").text("Team - " + (metaTitle || "All") + " - Snap Research");
  $("meta[name=description]").attr("content", mDescr);

  $('meta[property="og:title"]').attr(
    "content",
    "Team - " + (metaTitle || "All") + " - Snap Research"
  );
  $('meta[property="og:description"]').attr("content", mDescr);
});
