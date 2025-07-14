export interface LayoutProps{
  children: React.ReactNode
}

export interface PlanType {
  id: string;
  title: string;
  icon: string;
  price: {
    monthly: string;
    yearly: string;
  };
  promo: string;
}