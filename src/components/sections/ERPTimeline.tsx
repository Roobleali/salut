import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Clock,
    Settings,
    FileText,
    CheckCircle,
    Target,
    Users
} from "lucide-react";

interface MilestoneProps {
    id: string;
    duration: string;
    title: string;
    description: string;
    note?: string;
    category: "initial" | "planning" | "design" | "development" | "validation" | "enablement" | "deployment";
}

interface TimelineProps {
    milestones: MilestoneProps[];
}

const categoryIcons = {
    initial: Target,
    planning: FileText,
    design: Settings,
    development: Clock,
    validation: CheckCircle,
    enablement: Users,
    deployment: Target
};

const categoryColors = {
    initial: "bg-blue-500",
    planning: "bg-green-500",
    design: "bg-purple-500",
    development: "bg-orange-500",
    validation: "bg-red-500",
    enablement: "bg-indigo-500",
    deployment: "bg-teal-500"
};

// Change to default export
export default function Timeline({ milestones }: TimelineProps) {
    return (
        <div className="relative container mx-auto px-4 py-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

            <div className="space-y-12">
                {milestones.map((milestone, index) => {
                    const Icon = categoryIcons[milestone.category];
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={milestone.id}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
                        >
                            <div className={`w-1/2 ${isEven ? "pr-8 text-right" : "pl-8"}`}>
                                <Card className="overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline">{milestone.duration}</Badge>
                                            <Badge className={`${categoryColors[milestone.category]} text-white`}>
                                                {milestone.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600 mb-2">{milestone.description}</p>
                                        {milestone.note && (
                                            <p className="text-xs italic text-gray-500">{milestone.note}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center ${categoryColors[milestone.category]}`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                            </div>

                            <div className="w-1/2" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}