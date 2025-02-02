// @ts-nocheck

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import ReactFlow, { Controls, Background } from 'react-flow-renderer';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Bell, Settings, User, Search, Download, ChevronDown, Activity } from 'lucide-react';

// Navigation Component
const Navigation = ({ currentLang, onLanguageChange }) => {
    const { t } = useTranslation();
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <img src="/logo.svg" alt="Logo" className="h-8" />
                        <div className="hidden md:flex space-x-6">
                            {Object.keys(t('navigation', { returnObjects: true })).map((key) => (
                                <motion.a
                                    key={key}
                                    href={`#${key}`}
                                    className="text-gray-700 hover:text-blue-600"
                                    whileHover={{ y: -2 }}
                                >
                                    {t(`navigation.${key}`)}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="p-2 rounded-full hover:bg-gray-100"
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        >
                            <Bell className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="p-2 rounded-full hover:bg-gray-100"
                            onClick={() => onLanguageChange(currentLang === 'en' ? 'ro' : 'en')}
                        >
                            {currentLang}
                        </motion.button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Enhanced Metrics Dashboard
const MetricsDashboard = () => {
    const { t } = useTranslation();
    const [metrics, setMetrics] = useState({
        uptime: 99.99,
        costs: 'Free',
        compliance: 97,
        tickets: 3
    });

    // Simulate real-time updates


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(metrics).map(([key, value]) => (
                <motion.div
                    key={key}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -2 }}
                >
                    <h3 className="text-sm text-gray-500 mb-2">{t(`dashboard.metrics.${key}`)}</h3>
                    <p className="text-2xl font-bold text-blue-600">
                        {typeof value === 'number' ? value.toLocaleString() : value}
                        {key === 'uptime' && '%'}
                        {key === 'costs' && ''}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

// Interactive Network Topology
const NetworkTopology = () => {
    const [nodes, setNodes] = useState([
        { id: '1', type: 'input', position: { x: 250, y: 0 }, data: { label: 'Primary DC' } },
        { id: '2', position: { x: 100, y: 100 }, data: { label: 'Backup DC' } },
        { id: '3', position: { x: 400, y: 100 }, data: { label: 'Edge Location' } }
    ]);

    const [edges, setEdges] = useState([
        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#3B82F6' } },
        { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#3B82F6' } }
    ]);

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-4 h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                className="bg-gray-50"
            >
                <Controls />
                <Background />
            </ReactFlow>
        </motion.div>
    );
};

// Enhanced Cost Analysis
const CostAnalysis = () => {
    const { t } = useTranslation();
    const [timeRange, setTimeRange] = useState('1M');
    const [costData, setCostData] = useState([]);

    useEffect(() => {
        // Simulate cost data
        const generateData = () => {
            const points = timeRange === '1M' ? 30 : timeRange === '3M' ? 90 : 365;
            return Array.from({ length: points }, (_, i) => ({
                date: new Date(2024, 0, i + 1).toLocaleDateString(),
                actual: Math.floor(Math.random() * 2000) + 3000,
                predicted: 4000,
                baseline: 3500
            }));
        };

        setCostData(generateData());
    }, [timeRange]);

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{t('costs.title')}</h3>
                <div className="flex space-x-2">
                    {['1M', '3M', '1Y'].map((range) => (
                        <motion.button
                            key={range}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1 rounded-lg ${timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-100'
                                }`}
                            onClick={() => setTimeRange(range)}
                        >
                            {range}
                        </motion.button>
                    ))}
                </div>
            </div>
            <AreaChart width={800} height={400} data={costData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="actual" stroke="#3B82F6" fill="#93C5FD" />
                <Area type="monotone" dataKey="predicted" stroke="#9CA3AF" fill="#F3F4F6" strokeDasharray="5 5" />
            </AreaChart>
        </motion.div>
    );
};

// Resource Usage Monitor
const ResourceMonitor = () => {
    const { t } = useTranslation();
    const [resources, setResources] = useState({
        cpu: 45,
        memory: 62,
        storage: 78,
        network: 33
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setResources(prev => ({
                cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
                memory: Math.min(100, Math.max(0, prev.memory + (Math.random() - 0.5) * 5)),
                storage: Math.min(100, Math.max(0, prev.storage + (Math.random() - 0.5) * 2)),
                network: Math.min(100, Math.max(0, prev.network + (Math.random() - 0.5) * 15))
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getColor = (value) => {
        if (value > 80) return 'text-red-600';
        if (value > 60) return 'text-yellow-600';
        return 'text-green-600';
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h3 className="text-xl font-bold mb-6">Resource Usage</h3>
            <div className="grid grid-cols-2 gap-6">
                {Object.entries(resources).map(([key, value]) => (
                    <motion.div
                        key={key}
                        className="bg-gray-50 p-4 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="capitalize">{key}</span>
                            <span className={`font-bold ${getColor(value)}`}>
                                {value.toFixed(1)}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                className={`h-2 rounded-full ${value > 80 ? 'bg-red-500' : value > 60 ? 'bg-yellow-500' : 'bg-green-500'
                                    }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${value}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Activity Log Component
const ActivityLog = () => {
    const { t } = useTranslation();
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const generateActivity = () => ({
            id: Date.now(),
            type: ['security', 'system', 'user'][Math.floor(Math.random() * 3)],
            message: `Activity ${Math.floor(Math.random() * 1000)}`,
            timestamp: new Date().toISOString(),
            severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        });

        setActivities(Array.from({ length: 10 }, generateActivity));

        const interval = setInterval(() => {
            setActivities(prev => [generateActivity(), ...prev.slice(0, 9)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Activity Log</h3>
                <div className="flex space-x-2">
                    {['all', 'security', 'system', 'user'].map((type) => (
                        <motion.button
                            key={type}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1 rounded-lg capitalize ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100'
                                }`}
                            onClick={() => setFilter(type)}
                        >
                            {type}
                        </motion.button>
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                <AnimatePresence>
                    {activities
                        .filter(activity => filter === 'all' || activity.type === filter)
                        .map((activity) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="p-3 rounded-lg bg-gray-50 flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className={`w-2 h-2 rounded-full ${activity.severity === 'high' ? 'bg-red-500' :
                                        activity.severity === 'medium' ? 'bg-yellow-500' :
                                            'bg-green-500'
                                        }`} />
                                    <span className="text-sm">{activity.message}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-500">
                                        {new Date(activity.timestamp).toLocaleTimeString()}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-200 capitalize">
                                        {activity.type}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};




// Components
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, features }) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -2 }}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);



const ComplianceStatus: React.FC = () => {
    const { t } = useTranslation();
    const [complianceData, setComplianceData] = useState<ComplianceItem[]>([]);

    useEffect(() => {
        const areas = ['GDPR', 'ISO27001', 'SOC2', 'Privacy'];
        const generateComplianceData = () =>
            areas.map(area => ({
                area,
                score: Math.floor(Math.random() * 20) + 80,
                issues: Math.floor(Math.random() * 5),
                lastCheck: new Date(Date.now() - Math.random() * 86400000).toISOString()
            }));

        setComplianceData(generateComplianceData());

        const interval = setInterval(() => {
            setComplianceData(generateComplianceData());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{t('compliance.title')}</h3>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-blue-600 flex items-center"
                >
                    <Download className="h-4 w-4 mr-2" />
                    {t('dashboard.actions.export')}
                </motion.button>
            </div>
            <div className="space-y-4">
                {complianceData.map((item) => (
                    <motion.div
                        key={item.area}
                        className="p-4 rounded-lg bg-gray-50"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold">{item.area}</h4>
                                <p className="text-sm text-gray-500">
                                    {new Date(item.lastCheck).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 rounded-full h-2"
                                        style={{ width: `${item.score}%` }}
                                    />
                                </div>
                                <span className="font-semibold">{item.score}%</span>
                                {item.issues > 0 && (
                                    <span className="text-red-500 text-sm">
                                        {item.issues} issues
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};


const CloudManagement: React.FC = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('en');

    return (
        <div className="min-h-screen py-10  bg-gray-50">
            <header className="bg-blue-900 text-white py-20  px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        {t('dashboard.title')}
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('dashboard.subtitle')}
                    </motion.p>
                    <div className="flex justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold"
                        >
                            {t('dashboard.actions.startTrial')}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold"
                        >
                            {t('dashboard.actions.requestDemo')}
                        </motion.button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <MetricsDashboard />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <ResourceMonitor />
                    <ComplianceStatus />
                </div>
                <div className="grid grid-cols-1 gap-8 mb-8">
                    <CostAnalysis />
                </div>

                <ActivityLog />
            </main>

        </div>
    );
};

export default CloudManagement;