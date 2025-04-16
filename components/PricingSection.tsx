import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { pricingPlans, PricingPlansType } from "@/lib/pricingPlans";

const PricingPage = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {pricingPlans.map((plan: PricingPlansType, index: number) => (
        <Card className={`${plan.level === "Enterprise" ? "bg-black" : ""} w-[350px] flex flex-col justify-between`} key={index}>
          <CardHeader className="flex flex-row items-center">
            <CardTitle>{plan.level}</CardTitle>
            {plan.level === "Pro" && (
              <Badge className="bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold shadow-sm">
                🔥Popular
              </Badge>
            )}
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.services.map((service: string, index: number) => (
                <li className="flex items-center" key={index}>
                  <span className="text-green-500 font-extrabold mr-2">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              Get started with {plan.level}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingPage;
