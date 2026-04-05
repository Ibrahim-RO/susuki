import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Truck, Fuel, BatteryCharging, Key, HeartPulse } from "lucide-react";

const iconMap = {
  "Arrastre de grúa": Truck,
  "Cambio de llanta": Wrench,
  "Suministro de gasolina": Fuel,
  "Paso de corriente": BatteryCharging,
  "Cerrajería": Key,
  "Consultoría médica telefónica o a domicilio": HeartPulse,
};

type Service = {
  title: string;
  description: string;
  category: string;
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.title as keyof typeof iconMap];

  return (
    <Card className="group relative overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardContent className="p-6 flex flex-col gap-4">
        
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition">
          {Icon && <Icon className="w-6 h-6" />}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {service.description}
        </p>

        {/* Badge */}
        <span className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 w-fit">
          {service.category}
        </span>

        {/* Hover gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
      </CardContent>
    </Card>
  );
}