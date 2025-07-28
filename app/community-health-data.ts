import { RiSurveyLine } from "react-icons/ri";
import {
  SummaryCard,
  CampaignActivityItem,
  CommunityHealthChartData,
  FooterSuggestionsAndAnalytics,
} from "./types-and-interfaces";
import { BsBoxSeam } from "react-icons/bs";
import { TiFlashOutline } from "react-icons/ti";
import { TbStars } from "react-icons/tb";
import { PiHandsClapping } from "react-icons/pi";
import { BiTargetLock } from "react-icons/bi";

export const summaryCardData: SummaryCard = {
  title: "Community Health Score",
  rating: 4,
  heroStat: "+50",
  heroLabel: "Users Gained",
  secondaryStat: "6%",
  secondaryLabel: "Churn Rate",
  insight: "Stickiness Highest in Flash Sale Campaign",
  swipeInsight: {
    highlight: "Flash Sale brought 23 users with a 3% churn rate.",
    description:
      "Drop Announcement saw steady growth, but weaker stickiness. Q&A had high replies, but most users dropped within 2 days.",
  },
};

export const campaignActivityData: CampaignActivityItem[] = [
  {
    name: "Drop Announcement",
    icon: BsBoxSeam,
    dateRange: "Jul 01 – 03",
    newUsers: 9,
  },
  {
    name: "Q&A Engagement",
    icon: RiSurveyLine,
    dateRange: "Jul 04 – 06",
    newUsers: 9,
  },
  {
    name: "Flash Sale",
    icon: TiFlashOutline,
    dateRange: "Jul 07 – 09",
    newUsers: 23,
  },
  {
    name: "Exclusive Content",
    icon: TbStars,
    dateRange: "Jul 10 – 12",
    newUsers: 14,
  },
  {
    name: "Milestone Thank You",
    icon: PiHandsClapping,
    dateRange: "Jul 13 – Live",
    newUsers: 1,
  },
];

/* This data represents daily new users for the Community Health chart.
   Each point includes tooltip metadata like churn rate, replies, and stickiness.
   Below is the data to use: [3, 5, 1, 0, 2, 7, 1, 9, 13, 3, 5, 6, 1, 0]
*/
export const communityChartData: CommunityHealthChartData[] = [
  {
    date: "Jul 01",
    count: 3,
    campaign: "Drop Announcement",
    icon: BsBoxSeam,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 5,
    retentionCurve: "Mild decline",
    stickinessIndex: 17.2,
  },
  {
    date: "Jul 02",
    count: 5,
    campaign: "Drop Announcement",
    icon: BsBoxSeam,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 5,
    retentionCurve: "Mild decline",
    stickinessIndex: 17.2,
  },
  {
    date: "Jul 03",
    count: 1,
    campaign: "Drop Announcement",
    icon: BsBoxSeam,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 5,
    retentionCurve: "Mild decline",
    stickinessIndex: 17.2,
  },
  {
    date: "Jul 04",
    count: 0,
    campaign: "Q&A Engagement",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 22,
    replyRate: 18,
    retentionCurve: "Sharp drop-off",
    stickinessIndex: 2.8,
  },
  {
    date: "Jul 05",
    count: 2,
    campaign: "Q&A Engagement",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 22,
    replyRate: 18,
    retentionCurve: "Sharp drop-off",
    stickinessIndex: 2.8,
  },
  {
    date: "Jul 06",
    count: 7,
    campaign: "Q&A Engagement",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 22,
    replyRate: 18,
    retentionCurve: "Sharp drop-off",
    stickinessIndex: 2.8,
  },
  {
    date: "Jul 07",
    count: 1,
    campaign: "Flash Sale",
    icon: TiFlashOutline,
    avgTimeToChurn: 6,
    unsubscribeRate: 3,
    replyRate: 8,
    retentionCurve: "Flat/Stable",
    stickinessIndex: 46.5,
  },
  {
    date: "Jul 08",
    count: 9,
    campaign: "Flash Sale",
    icon: TiFlashOutline,
    avgTimeToChurn: 6,
    unsubscribeRate: 3,
    replyRate: 8,
    retentionCurve: "Flat/Stable",
    stickinessIndex: 46.5,
  },
  {
    date: "Jul 09",
    count: 13,
    campaign: "Flash Sale",
    icon: TiFlashOutline,
    avgTimeToChurn: 6,
    unsubscribeRate: 3,
    replyRate: 8,
    retentionCurve: "Flat/Stable",
    stickinessIndex: 46.5,
  },
  {
    date: "Jul 10",
    count: 3,
    campaign: "Exclusive Content",
    icon: TbStars,
    avgTimeToChurn: 5,
    unsubscribeRate: 5,
    replyRate: 10,
    retentionCurve: "Slight dip",
    stickinessIndex: 42.8,
  },
  {
    date: "Jul 11",
    count: 5,
    campaign: "Exclusive Content",
    icon: TbStars,
    avgTimeToChurn: 5,
    unsubscribeRate: 5,
    replyRate: 10,
    retentionCurve: "Slight dip",
    stickinessIndex: 42.8,
  },
  {
    date: "Jul 12",
    count: 6,
    campaign: "Exclusive Content",
    icon: TbStars,
    avgTimeToChurn: 5,
    unsubscribeRate: 5,
    replyRate: 10,
    retentionCurve: "Slight dip",
    stickinessIndex: 42.8,
  },
  {
    date: "Jul 13",
    count: 1,
    campaign: "Milestone Thank You",
    icon: PiHandsClapping,
    avgTimeToChurn: null,
    unsubscribeRate: null,
    replyRate: null,
    retentionCurve: null,
    stickinessIndex: null,
  },
  {
    date: "Jul 14",
    count: 0,
    campaign: "Milestone Thank You",
    icon: PiHandsClapping,
    avgTimeToChurn: null,
    unsubscribeRate: null,
    replyRate: null,
    retentionCurve: null,
    stickinessIndex: null,
  },
];

export const footerSuggestionsAndAnalyticsData: FooterSuggestionsAndAnalytics =
  {
    sectionTitle: "Campaign Playbook Suggestions",
    suggestionsDescription: "Based on your recent performance trends",
    analyticsDescription:
      "AI-powered insights summarizing your recent campaigns for clarity and actionability.",
    suggestions: [
      {
        title: "Double Down on Flash Sales",
        icon: BiTargetLock,
        insight: "Your last Flash Sale brought 23 users with only 3% churn.",
        dataAnchor: "Stickiness Score: 46.5",
      },
      {
        title: "Re-balance Q&A Timing",
        icon: RiSurveyLine,
        insight: "High replies, but most users unsubscribed within 2 days.",
        dataAnchor: "Unsubscribe Rate: 22%",
      },
      {
        title: "Use Exclusive Content as a Follow-up",
        icon: TbStars,
        insight:
          "Your last Flash Sale brought strong growth; Exclusive Content helped sustain it.",
        dataAnchor: "Avg Churn Time: 5 days",
      },
    ],
    analytics: [
      {
        campaign: "Flash Sale",
        icon: TiFlashOutline,
        insights: [
          "Highest Growth (23 users)",
          "Best Retention (flat curve)",
          "Stickiness Score: 46.5",
        ],
      },
      {
        campaign: "Q&A Engagement",
        icon: RiSurveyLine,
        insights: [
          "Fastest Drop-Off (churn in 2 days)",
          "Most Unsubscribes (22%)",
          "Least Sticky (Score: 2.8)",
        ],
      },
      {
        campaign: "Exclusive Content",
        icon: TbStars,
        insights: [
          "Balanced Retention",
          "Avg Churn Time: 5 days",
          "Low Unsubscribes (5%)",
        ],
      },
      {
        campaign: "Drop Announcement",
        icon: BsBoxSeam,
        insights: [
          "Mild dip, stable growth",
          "Steady 3-day performance",
          "Low Unsubscribes (8%)",
        ],
      },
      {
        campaign: "Milestone Thank You",
        icon: PiHandsClapping,
        insights: ["Still Running", "No clear trend yet"],
      },
    ],
  };
