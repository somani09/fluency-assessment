import { IconType } from "react-icons";

export interface SummaryCard {
  title: string;
  rating: number;
  heroStat: string;
  heroLabel: string;
  secondaryStat: string;
  secondaryLabel: string;
  insight: string;
  swipeInsight: {
    highlight: string;
    description: string;
  };
}

export interface CampaignActivityItem {
  name: string;
  dateRange: string;
  newUsers: number;
  icon?: IconType;
}

export interface CommunityHealthChartData {
  date: string;
  count: number;
  campaign: string;
  icon?: IconType;
  avgTimeToChurn: number | null;
  unsubscribeRate: number | null;
  replyRate: number | null;
  retentionCurve: string | null;
  stickinessIndex: number | null;
}

export interface CampaignSuggestion {
  title: string;
  icon: IconType;
  iconClassName: string;
  insight: string;
  dataAnchor: string;
}

export interface CampaignInsightCard {
  campaign: string;
  icon?: IconType;
  insights: string[];
}

export interface FooterSuggestionsAndAnalytics {
  sectionTitle: string;
  suggestionsDescription: string;
  analyticsDescription: string;
  suggestions: CampaignSuggestion[];
  analytics: CampaignInsightCard[];
}
