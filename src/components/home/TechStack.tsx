"use client";

import NextImage from "next/image";
import NoSSR from "@/components/common/NoSSR";

const technologies = [
    // Frontend
    { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Bootstrap", logo: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" },
    { name: "Sass", logo: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" },
    { name: "Vue.js", logo: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" },
    { name: "Angular", logo: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg" },
    { name: "jQuery", logo: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" },
    { name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "Webpack", logo: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg" },
    { name: "Babel", logo: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" },

    // Backend
    { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
    { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
    { name: "Go", logo: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg" },
    { name: "Spring", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
    { name: "Express", logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    { name: "Django", logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
    { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
    { name: "Rust", logo: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" },
    { name: "PHP", logo: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
    { name: "WordPress", logo: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" },
    { name: "Laravel", logo: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
    { name: "Composer", logo: "https://cdn.worldvectorlogo.com/logos/composer.svg" },

    // Mobile
    { name: "Flutter", logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
    { name: "React Native", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Android", logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg" },
    { name: "Swift", logo: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
    { name: "Kotlin", logo: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },

    // AI & Data
    { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
    { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
    { name: "OpenCV", logo: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
    { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "OpenAI", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
    { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "NumPy", logo: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Dialogflow", logo: "https://cdn.worldvectorlogo.com/logos/dialogflow.svg" },
    { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },

    // Cloud & DevOps
    { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Azure", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { name: "Jenkins", logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
    { name: "Terraform", logo: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
    { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "Linux", logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
    { name: "Nginx", logo: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg" },

    // Database & APIs
    { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
    { name: "pgAdmin", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
    { name: "Redis", logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg" },
    { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
    { name: "SQL Server", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
    { name: "Oracle", logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
    { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Kafka", logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
    { name: "GraphQL", logo: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
    { name: "Elasticsearch", logo: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Swagger", logo: "https://cdn.worldvectorlogo.com/logos/swagger-4.svg" },

    // Automation & Testing
    { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Puppeteer", logo: "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" },
    { name: "Playwright", logo: "https://playwright.dev/img/playwright-logo.svg" },
    { name: "Cypress", logo: "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg" },
    { name: "Jest", logo: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" },
    { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
    { name: "n8n", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Chrome Dev", logo: "https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg" },
    { name: "RPA", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },

    // Collaboration & Tools
    { name: "VS Code", logo: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
    { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "GitLab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
    { name: "Bitbucket", logo: "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg" },
    { name: "Jira", logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
    { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
    { name: "Trello", logo: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
    { name: "npm", logo: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" },
];

export default function TechStack() {
    return (
        <section className="py-12 bg-slate-50 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-6 text-center">
                <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Our Technology DNA</span>
                <h2 className="text-2xl font-black text-[#111418]">Powering Innovation With</h2>
            </div>

            <NoSSR>
                <div className="relative flex overflow-x-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                        {/* Triple the list for smoother seamless loop given the larger count */}
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group/item transition-all duration-500 min-w-[70px]">
                                <div className="h-12 w-12 relative flex items-center justify-center">
                                    <NextImage
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        quality={100}
                                        unoptimized
                                        className="size-10 object-contain"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 group-hover/item:text-gray-900 uppercase tracking-widest">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
            .animate-marquee {
              animation: marquee 60s linear infinite; /* Slowed down for readability */
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
          `}</style>
            </NoSSR>
        </section>
    );
}
