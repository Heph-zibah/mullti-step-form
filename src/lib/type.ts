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
export type StepData = {
  username?: string;
  email?: string;
  phone?: string;
  plan?: {
    id: PlanType["id"];
    title: PlanType["title"];
    billingCycle: "monthly" | "yearly";
    price: string;
  };
  billingCycle?: "monthly" | "yearly";
  addOns?: {
    id: string;
    title: string;
    price: number | string;
  }[];
};
export type StepContextType = {
  onPrevStep: () => void;
  onNextStep: () => void;
  steps: number;
  stepsData: StepData;
  updateStepsData: (data: Partial<StepData>) => void;
};
