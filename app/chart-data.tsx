/* This data has been generated to simulate new user entries for a web application, 
  while utilizing the same data points as provided for the assessment.
  First Chart:
  The first chart is “New Users” over the last 10 days. Keep this in mind when building the first chart. Below is the data to use.
  [3,5,1,0,2,7,1,9,13,3,5,6,1,0] 


*/
export interface UserEntry {
  date: string;
  count: number;
  source: string;
  device: string;
  location: string;
}

export const newUserDataConfig: UserEntry[] = [
  {
    date: "2025-07-01",
    count: 3,
    source: "Organic, Referral, Social Media",
    device: "Mobile, Desktop, Tablet",
    location: "California, Texas, Florida",
  },
  {
    date: "2025-07-02",
    count: 5,
    source: "Paid Ads, Organic, Referral, Social Media, Paid Ads",
    device: "Desktop, Mobile, Desktop, Tablet, Mobile",
    location: "Texas, New York, Illinois, Florida, Georgia",
  },
  {
    date: "2025-07-03",
    count: 1,
    source: "Referral",
    device: "Tablet",
    location: "New York",
  },
  {
    date: "2025-07-04",
    count: 0,
    source: "-",
    device: "-",
    location: "-",
  },
  {
    date: "2025-07-05",
    count: 2,
    source: "Organic, Paid Ads",
    device: "Mobile, Desktop",
    location: "California, Texas",
  },
  {
    date: "2025-07-06",
    count: 7,
    source:
      "Paid Ads, Social Media, Referral, Organic, Organic, Paid Ads, Paid Ads",
    device: "Mobile, Tablet, Mobile, Desktop, Desktop, Mobile, Tablet",
    location: "Texas, Florida, Ohio, Illinois, California, Georgia, Michigan",
  },
  {
    date: "2025-07-07",
    count: 1,
    source: "Referral",
    device: "Desktop",
    location: "California",
  },
  {
    date: "2025-07-08",
    count: 9,
    source:
      "Social Media, Organic, Paid Ads, Referral, Referral, Organic, Paid Ads, Organic, Paid Ads",
    device:
      "Mobile, Desktop, Mobile, Tablet, Mobile, Desktop, Mobile, Tablet, Mobile",
    location:
      "Ohio, Washington, Florida, California, Arizona, Illinois, Texas, New York, Nevada",
  },
  {
    date: "2025-07-09",
    count: 13,
    source:
      "Paid Ads, Organic, Referral, Social Media, Paid Ads, Paid Ads, Organic, Referral, Social Media, Organic, Paid Ads, Organic, Social Media",
    device:
      "Tablet, Mobile, Desktop, Tablet, Mobile, Tablet, Desktop, Mobile, Desktop, Tablet, Desktop, Tablet, Mobile",
    location:
      "Washington, Texas, New York, Georgia, California, Nevada, Illinois, Florida, Arizona, Ohio, Georgia, Michigan, Oregon",
  },
  {
    date: "2025-07-10",
    count: 3,
    source: "Organic, Referral, Paid Ads",
    device: "Mobile, Desktop, Tablet",
    location: "Nevada, Georgia, Florida",
  },
  {
    date: "2025-07-11",
    count: 5,
    source: "Social Media, Organic, Referral, Paid Ads, Referral",
    device: "Desktop, Mobile, Tablet, Mobile, Desktop",
    location: "New York, Arizona, Texas, Illinois, Georgia",
  },
  {
    date: "2025-07-12",
    count: 6,
    source: "Referral, Organic, Social Media, Paid Ads, Referral, Organic",
    device: "Mobile, Desktop, Tablet, Mobile, Desktop, Mobile",
    location: "Georgia, Florida, Illinois, California, Washington, Oregon",
  },
  {
    date: "2025-07-13",
    count: 1,
    source: "Organic",
    device: "Mobile",
    location: "Arizona",
  },
  {
    date: "2025-07-14",
    count: 0,
    source: "-",
    device: "-",
    location: "-",
  },
];

export const userChangeDataConfig: UserEntry[] = [
  {
    date: "2025-07-01",
    count: 2,
    source: "Organic Growth, Referral",
    device: "Mobile, Desktop",
    location: "California, Florida",
  },
  {
    date: "2025-07-02",
    count: -3,
    source: "Churn, Account Deletion, Unsubscribed",
    device: "Desktop, Mobile, Tablet",
    location: "Texas, Ohio, Illinois",
  },
  {
    date: "2025-07-03",
    count: 5,
    source: "Referral Boost, Social Media, Organic, Paid Ads, Social Media",
    device: "Tablet, Mobile, Desktop, Tablet, Mobile",
    location: "New York, Illinois, Florida, Georgia, California",
  },
  {
    date: "2025-07-04",
    count: 1,
    source: "Social Media",
    device: "Mobile",
    location: "Illinois",
  },
  {
    date: "2025-07-05",
    count: -1,
    source: "Unsubscribed",
    device: "Desktop",
    location: "Florida",
  },
  {
    date: "2025-07-06",
    count: 0,
    source: "Net Neutral",
    device: "-",
    location: "-",
  },
  {
    date: "2025-07-07",
    count: -2,
    source: "Account Deletion, Churn",
    device: "Desktop, Tablet",
    location: "California, Arizona",
  },
  {
    date: "2025-07-08",
    count: 4,
    source: "Marketing Campaign, Paid Ads, Organic, Referral",
    device: "Mobile, Desktop, Mobile, Tablet",
    location: "Ohio, New York, Florida, Georgia",
  },
  {
    date: "2025-07-09",
    count: 1,
    source: "Organic",
    device: "Tablet",
    location: "Washington",
  },
  {
    date: "2025-07-10",
    count: -2,
    source: "Churn, Account Deletion",
    device: "Mobile, Desktop",
    location: "Nevada, California",
  },
  {
    date: "2025-07-11",
    count: 5,
    source: "Social Media, Referral, Organic, Social Media, Paid Ads",
    device: "Desktop, Tablet, Mobile, Mobile, Desktop",
    location: "New York, Ohio, Texas, Florida, Georgia",
  },
  {
    date: "2025-07-12",
    count: 7,
    source:
      "Referral Surge, Paid Ads, Organic, Social Media, Referral, Organic, Paid Ads",
    device: "Mobile, Desktop, Tablet, Mobile, Tablet, Mobile, Tablet",
    location: "Georgia, California, New York, Illinois, Florida, Ohio, Nevada",
  },
  {
    date: "2025-07-13",
    count: -3,
    source: "Unsubscribed, Churn, Account Closure",
    device: "Mobile, Tablet, Desktop",
    location: "Arizona, Michigan, Oregon",
  },
  {
    date: "2025-07-14",
    count: 0,
    source: "No Change",
    device: "-",
    location: "-",
  },
  {
    date: "2025-07-15",
    count: 1,
    source: "Organic",
    device: "Tablet",
    location: "Colorado",
  },
  {
    date: "2025-07-16",
    count: -1,
    source: "Account Closure",
    device: "Mobile",
    location: "Oregon",
  },
];
