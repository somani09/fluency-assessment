import {
  SummaryCard,
  CampaignActivityItem,
  CommunityHealthChartData,
  FooterSuggestionsAndAnalytics,
} from "../types-and-interfaces";

import { GiShare } from "react-icons/gi";
import { RiSurveyLine } from "react-icons/ri";
import { TbDiscount } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";
import { BiMessageSquareX } from "react-icons/bi";

export const summaryCardData: SummaryCard = {
  title: "Subscriber Stability Score",
  rating: 3,
  heroStat: "+14",
  heroLabel: "Net Users Lost",
  secondaryStat: "12%",
  secondaryLabel: "Churn Rate",
  insight: "Best Retention from Giveaway Campaign",
  swipeInsight: {
    highlight: "Giveaway drove sustained engagement with lowest churn.",
    description:
      "Q&A had high activity but led to sharp drop-off. Poll+Feedback had inconsistent engagement and low stickiness.",
  },
};

export const campaignActivityData: CampaignActivityItem[] = [
  {
    name: "Story Share",
    icon: GiShare,
    dateRange: "Jul 15 – 18",
    newUsers: -3,
  },
  {
    name: "Poll & Feedback",
    icon: RiSurveyLine,
    dateRange: "Jul 19 – 22",
    newUsers: 1,
  },
  {
    name: "Early Access Drop",
    icon: TbDiscount,
    dateRange: "Jul 23 – 26",
    newUsers: 11,
  },
  {
    name: "Giveaway",
    icon: FaGift,
    dateRange: "Jul 27 – 30",
    newUsers: 5,
  },
];

/* This data represents daily net user gain/loss for the Retention Insights chart.
   Each point includes churn metrics, reply rate, and retention pattern.
   Below is the data to use: [2, -3, 5, 1, -1, 0, -2, 4, 1, -2, 5, 7, -3, 0, 1, -1]
*/
export const retentionInsightsChartData: CommunityHealthChartData[] = [
  {
    date: "Jul 15",
    count: 2,
    campaign: "Story Share",
    icon: GiShare,
    avgTimeToChurn: 1,
    unsubscribeRate: 25,
    replyRate: 3,
    retentionCurve: "Severe Drop",
    stickinessIndex: 0.2,
  },
  {
    date: "Jul 16",
    count: -3,
    campaign: "Story Share",
    icon: GiShare,
    avgTimeToChurn: 1,
    unsubscribeRate: 25,
    replyRate: 3,
    retentionCurve: "Severe Drop",
    stickinessIndex: 0.2,
  },
  {
    date: "Jul 17",
    count: 5,
    campaign: "Story Share",
    icon: GiShare,
    avgTimeToChurn: 1,
    unsubscribeRate: 25,
    replyRate: 3,
    retentionCurve: "Severe Drop",
    stickinessIndex: 0.2,
  },
  {
    date: "Jul 18",
    count: 1,
    campaign: "Story Share",
    icon: GiShare,
    avgTimeToChurn: 1,
    unsubscribeRate: 25,
    replyRate: 3,
    retentionCurve: "Severe Drop",
    stickinessIndex: 0.2,
  },
  {
    date: "Jul 19",
    count: -1,
    campaign: "Poll & Feedback",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 12,
    replyRate: 7,
    retentionCurve: "Volatile",
    stickinessIndex: 0.74,
  },
  {
    date: "Jul 20",
    count: 0,
    campaign: "Poll & Feedback",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 12,
    replyRate: 7,
    retentionCurve: "Volatile",
    stickinessIndex: 0.74,
  },
  {
    date: "Jul 21",
    count: -2,
    campaign: "Poll & Feedback",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 12,
    replyRate: 7,
    retentionCurve: "Volatile",
    stickinessIndex: 0.74,
  },
  {
    date: "Jul 22",
    count: 4,
    campaign: "Poll & Feedback",
    icon: RiSurveyLine,
    avgTimeToChurn: 2,
    unsubscribeRate: 12,
    replyRate: 7,
    retentionCurve: "Volatile",
    stickinessIndex: 0.74,
  },
  {
    date: "Jul 23",
    count: 1,
    campaign: "Early Access Drop",
    icon: TbDiscount,
    avgTimeToChurn: 5,
    unsubscribeRate: 6,
    replyRate: 10,
    retentionCurve: "Stable",
    stickinessIndex: 4.7,
  },
  {
    date: "Jul 24",
    count: -2,
    campaign: "Early Access Drop",
    icon: TbDiscount,
    avgTimeToChurn: 5,
    unsubscribeRate: 6,
    replyRate: 10,
    retentionCurve: "Stable",
    stickinessIndex: 4.7,
  },
  {
    date: "Jul 25",
    count: 5,
    campaign: "Early Access Drop",
    icon: TbDiscount,
    avgTimeToChurn: 5,
    unsubscribeRate: 6,
    replyRate: 10,
    retentionCurve: "Stable",
    stickinessIndex: 4.7,
  },
  {
    date: "Jul 26",
    count: 7,
    campaign: "Early Access Drop",
    icon: TbDiscount,
    avgTimeToChurn: 5,
    unsubscribeRate: 6,
    replyRate: 10,
    retentionCurve: "Stable",
    stickinessIndex: 4.7,
  },
  {
    date: "Jul 27",
    count: -3,
    campaign: "Giveaway",
    icon: FaGift,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 6,
    retentionCurve: "Recovering",
    stickinessIndex: 1.84,
  },
  {
    date: "Jul 28",
    count: 0,
    campaign: "Giveaway",
    icon: FaGift,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 6,
    retentionCurve: "Recovering",
    stickinessIndex: 1.84,
  },
  {
    date: "Jul 29",
    count: 1,
    campaign: "Giveaway",
    icon: FaGift,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 6,
    retentionCurve: "Recovering",
    stickinessIndex: 1.84,
  },
  {
    date: "Jul 30",
    count: -1,
    campaign: "Giveaway",
    icon: FaGift,
    avgTimeToChurn: 4,
    unsubscribeRate: 8,
    replyRate: 6,
    retentionCurve: "Recovering",
    stickinessIndex: 1.84,
  },
];

export const footerSuggestionsAndAnalyticsData: FooterSuggestionsAndAnalytics =
  {
    sectionTitle: "Campaign Playbook Suggestions",
    suggestionsDescription: "Based on recent user churn and recovery signals",
    analyticsDescription:
      "AI-assisted analysis summarizing campaign stickiness and churn patterns to guide next actions.",
    suggestions: [
      {
        title: "Double Down on Early Access Drop",
        icon: FiTarget,
        insight:
          "Strongest retention and net growth across all recent campaigns.",
        dataAnchor: "Stickiness Score: 4.7",
      },
      {
        title: "Improve Poll & Feedback Timing",
        icon: MdOutlinePoll,
        insight:
          "Format showed erratic user behavior despite final-day engagement.",
        dataAnchor: "Avg Churn Time: 2 days",
      },
      {
        title: "Rethink Story Share Format",
        icon: BiMessageSquareX,
        insight:
          "Had the worst net loss and highest unsubscribe rate — likely not resonating.",
        dataAnchor: "Unsub Rate: 25%, Stickiness Score: 0.2",
      },
    ],
    analytics: [
      {
        campaign: "Giveaway",
        icon: FaGift,
        insights: [
          "Highest Stickiness (Score: 1.84)",
          "Lowest Churn (8%)",
          "Most Balanced Engagement",
        ],
      },
      {
        campaign: "Early Access Drop",
        icon: TbDiscount,
        insights: [
          "Best Net Growth (+11 users)",
          "Stable Retention Curve",
          "Reply Rate: 10%",
        ],
      },
      {
        campaign: "Poll & Feedback",
        icon: RiSurveyLine,
        insights: [
          "Low Stickiness (Score: 0.74)",
          "Churn in ~2 days",
          "Unsub Rate: 12%",
        ],
      },
      {
        campaign: "Story Share",
        icon: GiShare,
        insights: [
          "Worst Retention Curve",
          "Unsub Rate: 25%",
          "Stickiness Score: 0.2",
        ],
      },
    ],
  };
