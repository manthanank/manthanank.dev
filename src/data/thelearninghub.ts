export interface LearningRepo {
  title: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  slug?: string;
}

export const theLearningHubRepos: LearningRepo[] = [
  {
    title: 'Learn Angular',
    name: 'learn-angular',
    description: 'Complete hands-on guide to Angular 19+: standalone components, Signals, control flow, RxJS & NgRx state management.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
    github: 'https://github.com/TheLearningHubOrg/learn-angular',
    live: 'https://learn-angular.netlify.app',
    slug: 'learn-angular',
  },
  {
    title: 'Learn TypeScript',
    name: 'learn-typescript',
    description: 'Master TypeScript: strict mode, interfaces, generics, utility types, conditional types, and advanced type gymnastics.',
    tags: ['TypeScript', 'JavaScript', 'Type System'],
    github: 'https://github.com/TheLearningHubOrg/learn-typescript',
    slug: 'learn-typescript',
  },
  {
    title: 'Learn JavaScript',
    name: 'learn-javascript',
    description: 'Master modern JavaScript: execution contexts, event loop, closures, ES2024+ syntax, async/await, and browser DOM APIs.',
    tags: ['JavaScript', 'ES6+', 'Async', 'Web APIs'],
    github: 'https://github.com/TheLearningHubOrg/learn-javascript',
    live: 'https://thelearninghuborg.github.io/learn-javascript/',
  },
  {
    title: 'Learn React',
    name: 'learn-reactjs',
    description: 'Master React: Components & state, React 19 Actions & hooks, React Compiler, Server Components, Fiber reconciliation, and testing.',
    tags: ['React', 'Next.js', 'TypeScript', 'Frontend'],
    github: 'https://github.com/TheLearningHubOrg/learn-reactjs',
  },
  {
    title: 'Learn Node.js',
    name: 'learn-nodejs',
    description: 'Master Node.js: V8 engine & libuv event loop, streams, worker threads, microservices, and production backends.',
    tags: ['Node.js', 'Backend', 'V8', 'Streams'],
    github: 'https://github.com/TheLearningHubOrg/learn-nodejs',
  },
  {
    title: 'Learn System Design',
    name: 'learn-system-design',
    description: 'Master System Design: Capacity estimation, load balancing, caching, database sharding, CAP theorem, and scalable architectures.',
    tags: ['System Design', 'Distributed Systems', 'Architecture'],
    github: 'https://github.com/TheLearningHubOrg/learn-system-design',
    slug: 'learn-system-design',
  },
  {
    title: 'Learn Docker',
    name: 'learn-docker',
    description: 'Master Docker: Multi-stage builds, container isolation, networking, volume persistence, and Kubernetes workflows.',
    tags: ['Docker', 'Containers', 'DevOps', 'CI/CD'],
    github: 'https://github.com/TheLearningHubOrg/learn-docker',
    live: 'https://manthanank.github.io/learn-docker',
  },
  {
    title: 'Learn Kubernetes',
    name: 'learn-kubernetes',
    description: 'Master Kubernetes: Control plane architecture, Pods, Deployments, Services, Ingress, Helm charts, and cluster autoscaling.',
    tags: ['Kubernetes', 'K8s', 'DevOps', 'Cloud Native'],
    github: 'https://github.com/TheLearningHubOrg/learn-kubernetes',
  },
  {
    title: 'Learn AWS',
    name: 'learn-aws',
    description: 'Master AWS Cloud: IAM policies, VPC networking, EC2/ECS/Lambda compute, S3 & DynamoDB storage, and SQS/SNS messaging.',
    tags: ['AWS', 'Cloud', 'Serverless', 'Infrastructure'],
    github: 'https://github.com/TheLearningHubOrg/learn-aws',
  },
  {
    title: 'Learn PostgreSQL',
    name: 'learn-postgresql',
    description: 'Master PostgreSQL: Advanced JSONB, window functions, CTEs, GIN/BRIN indexing, MVCC, and query optimization.',
    tags: ['PostgreSQL', 'SQL', 'Databases', 'Performance'],
    github: 'https://github.com/TheLearningHubOrg/learn-postgresql',
  },
  {
    title: 'Learn Redis',
    name: 'learn-redis',
    description: 'Master Redis: Event loop architecture, in-memory data structures, caching patterns, Streams, Pub/Sub, and Lua scripting.',
    tags: ['Redis', 'Caching', 'In-Memory', 'NoSQL'],
    github: 'https://github.com/TheLearningHubOrg/learn-redis',
  },
  {
    title: 'Learn RxJS',
    name: 'learn-rxjs',
    description: 'Master RxJS: Observables, transformation operators, error recovery, Subjects, Schedulers, and marble unit testing.',
    tags: ['RxJS', 'Reactive', 'TypeScript', 'Streams'],
    github: 'https://github.com/TheLearningHubOrg/learn-rxjs',
  },
];

