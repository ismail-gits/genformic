export type PricingPlansType = {
  level: string,
  price: string,
  services: string[]
}

export const pricingPlans: PricingPlansType[] = [
  {
    level: "Free",
    price: "$0/month",
    services: [
      "5 Free Credits",
      "50 Submissions",
      "Basic Support",
      "Limited Features"
    ]
  },
  {
    level: "Pro",
    price: "$29/month",
    services: [
      "Unlimited Credits",
      "200 Submissions",
      "Basic Support",
      "Basic Templates",
      "Community Access"
    ]
  },
  {
    level: "Enterprice",
    price: "$59/month",
    services: [
      "Unlimited Credits",
      "Unlimited Submissions",
      "24/7 Support",
      "Advanced Templates",
      "Community Access",
      "Monthly Updates"
    ]
  }
]