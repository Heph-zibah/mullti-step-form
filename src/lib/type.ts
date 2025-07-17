export interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
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

export interface AddOnType {
  id: string;
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
}
