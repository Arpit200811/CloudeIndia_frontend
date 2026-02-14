import { LucideIcon } from 'lucide-react';

export interface DashboardStat {
    title: string;
    value: string;
    trend: string;
    isPositive: boolean;
    icon: LucideIcon;
    color: string;
    bg: string;
}

export interface RevenueData {
    name: string;
    uv: number;
}

export interface ProjectStatusData {
    name: string;
    value: number;
}

export interface ActivityItem {
    id: number;
    title: string;
    description: string;
    time: string;
}

export type TimePeriod = 'week' | 'month' | 'year';

export interface DashboardState {
    stats: DashboardStat[];
    revenueData: RevenueData[];
    projectStatusData: ProjectStatusData[];
    recentActivity: ActivityItem[];
    isLoading: boolean;
    period: TimePeriod;
    fetchDashboardData: (period: TimePeriod) => Promise<void>;
}
