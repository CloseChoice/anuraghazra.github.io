const meta = {
  // Metadata
  siteTitle: 'Tobias Pitters - Data Engineer',
  siteDescription:
    'Tobias Pitters - building reliable data pipelines and generating lasting insights',
  siteTitleAlt: 'Tobias Pitters',
  siteShortName: 'Tobias Pitters',
  siteUrl: 'https://tobiaspitters.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/test.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'tobiaspitters',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
