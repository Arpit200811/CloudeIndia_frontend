export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client: string;
    industry: string;
    summary: string;
    challenge: string;
    solution: string;
    impact: string[];
    techStack: string[];
    image: string;
    stats: { label: string; value: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        slug: 'fintech-zero-trust-banking',
        title: 'Zero-Trust Architecture for Neobank',
        client: 'FinSafe Global',
        industry: 'Fintech',
        summary: 'Re-engineering a legacy banking core into a microservices-based, zero-trust fortress handling $50M+ daily transactions.',
        challenge: 'The client faced significant latency issues and security vulnerabilities with their monolithic architecture, struggling to scale beyond 100k concurrent users.',
        solution: 'We implemented a distributed microservices architecture using Go and gRPC, secured by a custom Zero-Trust mesh. We migrated the database to a sharded PostgreSQL cluster for infinite scalability.',
        impact: [
            '99.999% Uptime achieved during peak loads.',
            'Reduced transaction latency by 400%.',
            'Zero security breaches in 12 months.'
        ],
        techStack: ['Golang', 'Kubernetes', 'PostgreSQL', 'Vault', 'React'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
        stats: [
            { label: 'Transactions/Day', value: '$50M+' },
            { label: 'Latency Reduction', value: '400%' },
            { label: 'Uptime', value: '99.99%' }
        ]
    },
    {
        id: '2',
        slug: 'logistics-ai-route-optimization',
        title: 'AI-Driven Route Optimization',
        client: 'SwiftLogistics',
        industry: 'Logistics',
        summary: 'Reducing fuel costs by 30% for a fleet of 500+ trucks using GenAI and Graph Neural Networks.',
        challenge: 'Rising fuel costs and inefficient manual routing were eating into margins. The client needed a real-time, predictive routing engine.',
        solution: 'We built a custom routing engine using Python and NetworkX, enhanced by a generative model that predicts traffic patterns based on historical data. The frontend provides a real-time command center for dispatchers.',
        impact: [
            '30% reduction in monthly fuel costs.',
            '20% increase in daily deliveries per driver.',
            'Real-time fleet visibility for stakeholders.'
        ],
        techStack: ['Python', 'TensorFlow', 'Google Maps API', 'Next.js', 'Redis'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
        stats: [
            { label: 'Fuel Saved', value: '30%' },
            { label: 'Fleet Size', value: '500+' },
            { label: 'ROI', value: '12x' }
        ]
    },
    {
        id: '3',
        slug: 'healthcare-telemedicine-platform',
        title: 'HIPAA-Compliant Telemedicine Suite',
        client: 'MedConnect',
        industry: 'Healthcare',
        summary: 'Connecting 1M+ patients with doctors via a secure, high-definition video consultation platform.',
        challenge: 'Existing platforms were buggy and failed compliance audits. The client needed a rock-solid, secure video platform that worked on low-bandwidth rural connections.',
        solution: 'We utilized WebRTC for adaptive video streaming and built a fully encrypted patient data vault. The UI was designed for extreme accessibility.',
        impact: [
            '1 Million+ successful consultations.',
            'Full HIPAA and GDPR compliance.',
            'Works seamlessly on 3G networks.'
        ],
        techStack: ['WebRTC', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        stats: [
            { label: 'Patients', value: '1M+' },
            { label: 'Compliance', value: '100%' },
            { label: 'Rating', value: '4.9/5' }
        ]
    },
    {
        id: '4',
        slug: 'quantum-fintech-security',
        title: 'Quantum-Resistant Fintech Security',
        client: 'SecureBank Global',
        industry: 'Cybersecurity',
        summary: 'Implementing lattice-based cryptography to secure $5B+ in daily transactions against post-quantum threats.',
        challenge: 'With the rise of quantum computing, traditional RSA encryption methods were becoming a liability. The client needed a future-proof security layer for their high-frequency trading platform.',
        solution: 'We deployed a hybrid cryptographic protocol combining traditional ECC with CRYSTALS-Kyber quantum-resistant algorithms, secured within a hardware security module (HSM) network.',
        impact: [
            'Zero security breaches in 18 months.',
            'Securing $5 Billion+ daily transaction volume.',
            'Latency overhead kept under 10ms.'
        ],
        techStack: ['Rust', 'WebAssembly', 'Hardware Security Modules', 'Blockchain'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
        stats: [
            { label: 'Breaches', value: '0' },
            { label: 'Volume', value: '$5B+' },
            { label: 'Latency', value: '<10ms' }
        ]
    },
    {
        id: '5',
        slug: 'autonomous-drone-delivery',
        title: 'Autonomous Drone Fleet Network',
        client: 'SkyDelivery Systems',
        industry: 'Robotics',
        summary: 'Decentralized swarm intelligence for last-mile logistics, achieving 99.8% delivery success rate.',
        challenge: 'Last-mile delivery in dense urban areas was slow and expensive. Human pilots could not scale to meet demand.',
        solution: 'We engineered a decentralized swarm control system using ROS 2, allowing drones to communicate and avoid obstacles in real-time without a central server.',
        impact: [
            'Fully autonomous BLOS (Beyond Line of Sight) operations.',
            'Delivery cost reduced by 65%.',
            'Fleet expanded to 500+ active units.'
        ],
        techStack: ['C++', 'ROS 2', 'Computer Vision', 'Edge AI'],
        image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=1600',
        stats: [
            { label: 'Success Rate', value: '99.8%' },
            { label: 'Fleet', value: '500+' },
            { label: 'Cost Cut', value: '65%' }
        ]
    },
    {
        id: '6',
        slug: 'agritech-smart-farming',
        title: 'IoT Precision Agriculture Grid',
        client: 'GreenFields Corp',
        industry: 'IoT & Agriculture',
        summary: 'Automated irrigation and soil analysis system that increased crop yields by 25% while saving 40% water.',
        challenge: 'Unpredictable weather and water scarcity were threatening crop viability. Farmers lacked real-time data to make informed decisions.',
        solution: 'We deployed a LoRaWAN mesh network of soil moisture and NPK sensors, connected to a cloud analytics dashboard that automates irrigation valves.',
        impact: [
            '25% increase in crop yield per acre.',
            '40% reduction in water usage.',
            'ROI achieved for farmers in just 6 months.'
        ],
        techStack: ['Azure IoT', 'LoRaWAN', 'React Native', 'Python'],
        image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1600',
        stats: [
            { label: 'Yield', value: '+25%' },
            { label: 'Water Saved', value: '40%' },
            { label: 'ROI', value: '6mo' }
        ]
    },
    {
        id: '7',
        slug: 'ai-medical-diagnostics',
        title: 'AI-Powered Radiography Assistant',
        client: 'MedTech Innovations',
        industry: 'Healthcare AI',
        summary: 'FDA-approved AI model for early anomaly detection in X-rays, boosting diagnostic speed by 60%.',
        challenge: 'Radiologists were overwhelmed by volume, leading to fatigue and potential diagnostic errors. A "Second Opinion" AI was needed.',
        solution: 'We trained a Deep Learning CNN model on 500,000+ proprietary datasets to detect fractures and nodules with 99.2% accuracy, integrated directly into DICOM viewers.',
        impact: [
            '60% reduction in reporting turnaround time.',
            '99.2% diagnostic accuracy validation.',
            'Deployed in 50+ partner hospitals.'
        ],
        techStack: ['PyTorch', 'DICOM', 'FastAPI', 'NVIDIA Clara'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
        stats: [
            { label: 'Accuracy', value: '99.2%' },
            { label: 'Speedup', value: '60%' },
            { label: 'Hospitals', value: '50+' }
        ]
    }
];
