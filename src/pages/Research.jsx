import React, { useState, useMemo } from "react";
import { useEffect } from 'react';
import { FaBook, FaFlask, FaCloud, FaNetworkWired, FaChevronDown, FaFileDownload, FaLink } from "react-icons/fa";



  const researchInterests = [
    {
      title: "Cloud Computing",
      desc: "Optimizing resource allocation, virtual machine placement, and multi-cloud architectures for scalable systems.",
      icon: <FaCloud />,
    },
    {
      title: "Serverless Architectures",
      desc: "Mitigating cold start issues and designing efficient serverless frameworks for edge computing.",
      icon: <FaFlask />,
    },
    {
      title: "Virtual Network Embedding",
      desc: "Developing algorithms for efficient network virtualization in cloud and fog environments.",
      icon: <FaNetworkWired />,
    },
  ];

const publications = [
  // Journals
  {
    code: "J17",
    type: "journal",
    title: "TReB: Task dependency aware-Resource allocation for Internet of Things using Binary offloading",
    authors: "Priyanka Soni, Ajay Gajanan Hajare, Keerthan Kumar T.G, Sourav Kanti Addya",
    journal: "Ad Hoc Networks, Elsevier, May 2025",
    year: 2025,
    core: "",
    impact: "4.4",
    acceptance: "",
    link: "https://doi.org/10.1016/j.adhoc.2025.103909",
    abstract: "This paper presents TReB, a novel framework that leverages task dependency awareness for efficient resource allocation in Internet of Things (IoT) using binary offloading. The approach optimizes the offloading process to enhance the performance of IoT systems in dynamic environments. The proposed method also ensures efficient resource utilization while maintaining a high level of service quality in IoT applications."
  },
  {
    code: "J16",
    type: "journal",
    title: "DCRDA: Deadline-Constrained Function Scheduling in Serverless-Cloud Platform",
    authors: "Priyanka Ashok Birajdar, Divya Meena, Anurag Satpathy, Sourav Kanti Addya",
    journal: "Journal of Cluster Computing, Springer, January 2025",
    year: 2025,
    core: "",
    impact: "3.6",
    acceptance: "",
    link: "https://doi.org/10.1007/s10586-024-05058-2",
    abstract: "DCRDA is a deadline-constrained function scheduling technique designed for serverless cloud platforms. The approach effectively balances the tradeoff between processing delay and execution time, ensuring that tasks meet their deadlines without violating system constraints. This paper provides an optimal solution for scheduling serverless functions based on their deadlines, improving the system’s overall performance."
  },
  {
    code: "J15",
    type: "journal",
    title: "CSMD: Container state management for deployment in cloud data centers",
    authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "Future Generation Computer Systems, Elsevier, Vol 162, January 2025",
    year: 2025,
    core: "",
    impact: "6.2",
    acceptance: "",
    link: "https://doi.org/10.1016/j.future.2024.107495",
    abstract: "This paper introduces CSMD, a novel container state management system that aims to optimize deployment processes in cloud data centers. By focusing on the container’s lifecycle, including its state transitions, CSMD ensures a more efficient, resource-conscious deployment strategy. The system improves cloud-based infrastructures' scalability and performance, offering an advanced solution for container management in large-scale data centers."
  },
  {
    code: "J14",
    type: "journal",
    title: "InDS: Intelligent DRL Strategy for Effective Virtual Network Embedding of an Online Virtual Network Requests",
    authors: "Keerthan Kumar T G, Sourav Kanti Addya, Shashidhar G Koolagudi",
    journal: "IEEE Access, Vol 12, July 2024, pp. 94843-94860",
    year: 2024,
    core: "",
    impact: "3.4",
    acceptance: "",
    link: "https://doi.org/10.1109/ACCESS.2024.3424474",
    abstract: "InDS introduces a Deep Reinforcement Learning (DRL) approach to enhance virtual network embedding for online virtual network requests in dynamic environments. By integrating DRL with network embedding strategies, InDS provides an adaptive solution to efficiently allocate resources and minimize network congestion, improving overall network performance and resource utilization in large-scale systems."
  },
  {
    code: "J13",
    type: "journal",
    title: "EFraS: Emulated Framework to Develop and Analyze Dynamic Virtual Network Embedding Strategies over SDN Infrastructure",
    authors: "Keerthan Kumar T G, Shivangi Tomar, Sourav Kanti Addya, Anurag Satpathy, Shashidhar G Koolagudi",
    journal: "Journal of Simulation Modelling Practice and Theory, Elsevier, April 2024",
    year: 2024,
    core: "",
    impact: "4.2",
    acceptance: "",
    link: "https://doi.org/10.1016/j.simpat.2024.102952",
    abstract: "EFraS is an emulated framework designed to develop and analyze dynamic virtual network embedding strategies over Software-Defined Networking (SDN) infrastructure. The framework simulates dynamic network topologies and evaluates the performance of various embedding strategies. It offers a comprehensive testing platform for researchers working on improving SDN-based network architectures and virtual network optimization."
  },
  {
    code: "J12",
    type: "journal",
    title: "Optimizing Completion Time of Requests in Serverless Computing",
    authors: "Ajay Sherawat, Shubha Brata Nath, Sourav Kanti Addya",
    journal: "Journal of Network and Systems Management, Springer, Vol 32, January 2024, pp. 01-28",
    year: 2024,
    core: "",
    impact: "3.6",
    acceptance: "",
    link: "https://doi.org/10.1007/s10922-024-09800-4",
    abstract: "This paper addresses the issue of optimizing the completion time of requests in serverless computing environments. The authors propose a new approach to effectively manage serverless function scheduling, considering factors such as resource availability and execution time. The approach helps to improve overall performance by minimizing delays and improving resource allocation efficiency."
  },
  {
    code: "J11",
    type: "journal",
    title: "FASE: Fast Deployment for Dependent Applications in Serverless Environments",
    authors: "Rounak Saha, Anurag Satpathy, Sourav Kanti Addya",
    journal: "Journal of Supercomputing, Springer, December 2023, pp. 01-22",
    year: 2023,
    core: "",
    impact: "3.3",
    acceptance: "",
    link: "https://doi.org/10.1007/s11227-023-05840-w",
    abstract: "FASE proposes a fast deployment strategy for serverless applications, particularly for those with dependent tasks. By reducing the time required for deployment, FASE ensures that tasks with dependencies are completed efficiently and in a timely manner. The proposed strategy integrates dynamic function scheduling, significantly improving serverless computing workflows."
  },
  {
    code: "J10",
    type: "journal",
    title: "ESMA: Towards elevating system happiness in a decentralized serverless edge computing framework",
    authors: "Somoshree Datta, Sourav Kanti Addya, Soumya K Ghosh",
    journal: "Journal of Parallel and Distributed Computing, Elsevier, September 2023",
    year: 2023,
    core: "",
    impact: "3.8",
    acceptance: "",
    link: "https://doi.org/10.1016/j.jpdc.2023.104762",
    abstract: "ESMA aims to enhance the overall system satisfaction or 'happiness' in decentralized serverless edge computing environments. By introducing an innovative approach to evaluating system performance in edge settings, ESMA focuses on optimizing task offloading decisions while maintaining user satisfaction. The framework integrates adaptive mechanisms that scale dynamically based on load and environmental conditions, offering a robust solution for modern distributed applications."
  },
  {
    code: "J9",
    type: "journal",
    title: "Geo-distributed Multi-tier Workload Migration over Multi-timescale Electricity Markets",
    authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K Ghosh, Sajal K Das",
    journal: "IEEE Transactions on Services Computing, Vol 16(5), Sep-Oct 2023, pp. 3385-3396",
    year: 2023,
    core: "",
    impact: "11.019",
    acceptance: "",
    link: "https://ieeexplore.ieee.org/document/10109840",
    abstract: "This paper investigates the challenges and solutions of migrating geo-distributed multi-tier workloads across various electricity markets at multiple timescales. The proposed approach incorporates dynamic load balancing strategies, optimizing energy consumption and system performance. The authors highlight the importance of aligning cloud resource allocation with energy price fluctuations to maximize both economic and environmental benefits."
  },
  {
    code: "J8",
    type: "journal",
    title: "NORD: NOde Ranking-based efficient virtual network embedding over single Domain substrate networks",
    authors: "Keerthan Kumar T G, Sourav Kanti Addya, Anurag Satpathy, Shashidhar G Koolagudi",
    journal: "Computer Networks, Elsevier, Vol 225, April 2023",
    year: 2023,
    core: "",
    impact: "5.6",
    acceptance: "",
    link: "https://doi.org/10.1016/j.comnet.2023.109661",
    abstract: "NORD is an innovative node ranking-based approach for efficient virtual network embedding within single domain substrate networks. By dynamically ranking nodes based on their capacity and availability, NORD effectively minimizes network congestion and resource wastage. The methodology also provides a solution for improving the scalability and performance of virtual network embedding in dense network environments, while maintaining low computational overhead."
  },
  {
    code: "J7",
    type: "journal",
    title: "Shipping Code towards Data in an Inter-Region Serverless Environment to Leverage Latency",
    authors: "Biswajeet Sethi, Sourav Kanti Addya, Jay Bhutada, Soumya K Ghosh",
    journal: "Journal of Supercomputing, Springer, Vol 79(10), March 2023, pp. 11585-11610",
    year: 2023,
    core: "",
    impact: "3.3",
    acceptance: "",
    link: "https://doi.org/10.1007/s11227-023-05104-7",
    abstract: "This paper addresses the latency challenges in serverless computing environments by proposing a novel approach that involves shipping code towards data across inter-region networks. By optimizing the placement of serverless functions, the method reduces data transfer time and improves the overall response time for real-time applications, such as IoT and edge computing, where minimizing latency is critical."
  },
  {
    code: "J6",
    type: "journal",
    title: "CoMCLOUD: Virtual Machine Coalition for Multi-Tier Applications over Multi-Cloud Environments",
    authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K Ghosh, Sajal K Das",
    journal: "IEEE Transactions on Cloud Computing, Vol 11(1), Jan-Mar 2023, pp. 956-970",
    year: 2023,
    core: "",
    impact: "5.6",
    acceptance: "",
    link: "https://ieeexplore.ieee.org/document/9585379",
    abstract: "CoMCLOUD introduces a Virtual Machine (VM) coalition strategy for multi-tier applications deployed over multi-cloud environments. This approach ensures efficient resource utilization across different cloud providers by forming virtual coalitions, which enables workload distribution based on cloud capacity and cost. By using VM coalition techniques, CoMCLOUD improves application performance and reduces operational costs in multi-cloud ecosystems."
  },
  {
    code: "J5",
    type: "journal",
    title: "Containerized Deployment of Micro-services in Fog Devices: A Reinforcement Learning-based Approach",
    authors: "Shubha Brata Nath, Subhrendu Chattopadhyay, Raja Karmakar, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "Journal of Supercomputing, Springer, 78, April 2022, pp. 6817-6845",
    year: 2022,
    core: "",
    impact: "3.3",
    acceptance: "",
    link: "https://link.springer.com/article/10.1007/s11227-021-04135-2",
    abstract: "This paper explores a reinforcement learning-based approach for containerized micro-service deployment in fog devices. By considering the limited resources and real-time constraints in fog computing environments, the proposed framework adapts to varying loads and efficiently schedules containers. The approach improves both the scalability and efficiency of service deployment in edge and fog environments, optimizing resource usage while maintaining service quality."
  },
  {
    code: "J4",
    type: "journal",
    title: "A Strategy For Live Migration of Virtual Machines In A Cloud Federation",
    authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Anurag Satpathy, Bibhudatta Sahoo, Mahasweta Sarkar",
    journal: "IEEE Systems Journal, 13(3), 2019, pp. 2877-2887",
    year: 2019,
    core: "",
    impact: "4.5",
    acceptance: "",
    link: "https://doi.org/10.1109/JSYST.2018.2872580",
    abstract: "This paper presents a strategy for the live migration of virtual machines (VMs) in a cloud federation. The proposed method addresses the challenges in migrating VMs across federated cloud systems without interrupting ongoing services. By using dynamic scheduling algorithms and ensuring compatibility between different cloud providers, the strategy improves the flexibility and reliability of cloud infrastructures, particularly in multi-cloud environments."
  },

  {
    code: "J3",
    type: "journal",
    title: "A Game Theoretic Approach to Estimate Fair Cost of VM Placement in Cloud Data Center",
    authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Anurag Satpathy, Mahasweta Sarkar",
    journal: "IEEE Systems Journal, 12(4), 2018, pp. 3509-3518",
    year: 2018,
    core: "",
    impact: "4.5",
    acceptance: "",
    link: "https://doi.org/10.1109/JSYST.2017.2776117",
    abstract: "This paper proposes a game-theoretic approach to estimate the fair cost of virtual machine (VM) placement in cloud data centers. By modeling the VM placement problem as a non-cooperative game among cloud service providers, the approach ensures an equitable distribution of resources while minimizing operational costs. The game-theoretic model guarantees fairness in pricing and optimizes resource allocation for cloud providers and users."
  },
  {
    code: "J2",
    type: "journal",
    title: "Crow Search Based VM Placement Strategy in Cloud Data Centers with Live Migration",
    authors: "Anurag Satpathy, Sourav Kanti Addya, Ashok Kumar Turuk, Bansidhar Majhi, Gadadhar Sahoo",
    journal: "Computers & Electrical Engineering, Elsevier, 69, 2018, pp. 334-350",
    year: 2018,
    core: "",
    impact: "4.3",
    acceptance: "",
    link: "https://doi.org/10.1016/j.compeleceng.2017.12.032",
    abstract: "In this work, the authors propose a crow search-based virtual machine (VM) placement strategy in cloud data centers that incorporates live migration. The strategy aims to enhance VM placement efficiency while reducing energy consumption and operational costs. By utilizing bio-inspired crow search optimization algorithms, the proposed method dynamically adjusts VM positions to improve resource utilization and minimize downtime during migration, making it ideal for cloud environments with fluctuating workloads."
  },
  {
    code: "J1",
    type: "journal",
    title: "Simulated Annealing based VM Placement Strategy to Maximize the Profit of Cloud Service Providers",
    authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Mahasweta Sarkar, Sanjay Kumar Biswash",
    journal: "Engineering Science and Technology, an International Journal (JESTECH), Elsevier, 20(4), 2017, pp. 1249-1259",
    year: 2017,
    core: "",
    impact: "5.7",
    acceptance: "",
    link: "https://doi.org/10.1016/j.jestch.2017.09.003",
    abstract: "This paper presents a simulated annealing-based approach for virtual machine (VM) placement in cloud data centers, designed to maximize the profit of cloud service providers. The strategy optimizes the allocation of VMs in a manner that minimizes operational costs and maximizes the efficiency of resource utilization. Through simulated annealing, the model iteratively finds the optimal placement for VMs, improving the overall profitability of cloud service providers while meeting client demands."
  },

  // Continuing with conferences

  {
    code: "C30",
    type: "conference",
    title: "Enhancing Security in Smart Contract Wallets: An OTP Based 2-Factor Authentication Approach",
    authors: "Kalash, Bishakh Chandra Ghosh, Sourav Kanti Addya",
    journal: "26th International Conference on Distributed Computing and Networking (ICDCN '25), Hyderabad, India, pp. 211-220",
    year: 2025,
    core: "B-National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1145/3700838.3700868",
    abstract: "This paper presents an OTP-based two-factor authentication (2FA) approach to enhance security in smart contract wallets. By integrating a secondary layer of authentication, the approach provides an additional security barrier against unauthorized access and fraud in blockchain transactions. The system ensures that smart contract wallets remain secure, even in the event of compromised credentials or phishing attacks."
  },
  {
    code: "C29",
    type: "conference",
    title: "LitE: Load Balanced Virtual Data Center Embedding for Energy Efficiency in Data Centers",
    authors: "Preetham N, Sourav Kanti Addya, Keerthan Kumar T G, Saumya Hegde",
    journal: "26th International Conference on Distributed Computing and Networking (ICDCN '25), Hyderabad, India, pp. 31-35",
    year: 2025,
    core: "B-National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1145/3700838.3700849",
    abstract: "LitE proposes a load-balanced virtual data center embedding strategy aimed at improving energy efficiency in data centers. By dynamically distributing workloads across servers based on energy consumption and resource utilization, the method reduces overall power consumption while maintaining optimal performance. The proposed approach also ensures scalability, making it ideal for large-scale, energy-efficient cloud data centers."
  },
  {
    code: "C28",
    type: "conference",
    title: "Adaptive Workload Management for Enhanced Function Performance in Serverless Computing",
    authors: "Priyanka Ashok Birajdar, Harsha V, Anurag Satpathy, Sourav Kanti Addya",
    journal: "26th International Conference on Distributed Computing and Networking (ICDCN '25), Hyderabad, India, pp. 276-277",
    year: 2025,
    core: "B-National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1145/3700838.3703657",
    abstract: "This paper focuses on adaptive workload management strategies in serverless computing environments to improve function performance. The approach optimizes resource allocation and minimizes execution latency by dynamically adjusting workload distribution based on real-time performance data. This methodology ensures that serverless systems can efficiently handle varying workloads while maintaining high service quality."
  },
  {
    code: "C27",
    type: "conference",
    title: "Collaborative Deadline-sensitive Multi-task Offloading in Vehicular-Cloud Networks (Best Poster award)",
    authors: "Prasanna Kumar, Sushma S A, K Chandrasekaran, Sourav Kanti Addya",
    journal: "17th International Conference on COMmunication Systems & NETworkS (COMSNETS '25), Bangalore, India, pp. 979-983",
    year: 2025,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS63942.2025.10885632",
    abstract: "This paper introduces a collaborative approach for deadline-sensitive multi-task offloading in vehicular-cloud networks. By leveraging the computing resources of both the vehicular and cloud infrastructure, the proposed strategy ensures timely task completion while reducing network congestion and latency. The method was awarded Best Poster at the COMSNETS '25 conference."
  },
 {
    code: "C26",
    type: "conference",
    title: "Drone-Assisted Load Distribution Framework for Traffic Optimization in IoT Networks",
    authors: "Priyanka Soni, Omkar Manohar Mense, Sourav Kanti Addya",
    journal: "17th International Conference on COMmunication Systems & NETworkS (COMSNETS '25), Bangalore, India, pp. 974-978",
    year: 2025,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS63942.2025.10885760",
    abstract: "This paper proposes a drone-assisted load distribution framework for traffic optimization in IoT networks. By integrating drones with edge computing capabilities, the system optimizes network load distribution, ensuring efficient resource utilization and low latency in IoT networks. The framework helps alleviate congestion in IoT networks, making it suitable for real-time traffic management applications in smart cities."
  },
  {
    code: "C25",
    type: "conference",
    title: "Function Scheduling with Data Security in Serverless Computing Systems",
    authors: "Srestha Saha, Arvind Pandey, Sourav Kanti Addya, Shubha Brata Nath",
    journal: "17th International Conference on COMmunication Systems & NETworkS (COMSNETS '25), Bangalore, India, pp. 921-925",
    year: 2025,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS63942.2025.10885582",
    abstract: "This paper addresses the challenge of function scheduling with data security in serverless computing systems. By employing secure multi-party computation techniques, the system ensures that sensitive data is protected while maintaining efficient function execution. The proposed strategy optimizes scheduling to reduce latency while providing robust data security mechanisms in serverless environments."
  },
  {
    code: "C24",
    type: "conference",
    title: "LEASE: Leveraging Energy-Awareness in Serverless Edge for Latency-Sensitive IoT Services",
    authors: "Aastik Verma, Anurag Satpathy, Sajal. K. Das, Sourav Kanti Addya",
    journal: "IEEE International Conference on Pervasive Computing and Communications Workshops (PerCom Workshops '24), Biarritz, France, pp. 302-307",
    year: 2024,
    core: "A*",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/PerComWorkshops59983.2024.10502788",
    abstract: "This paper introduces LEASE, a framework for leveraging energy-awareness in serverless edge computing for latency-sensitive IoT services. The system minimizes energy consumption while maintaining low latency by intelligently scheduling functions on edge nodes. LEASE enhances the performance of IoT applications that require real-time data processing, such as smart healthcare and autonomous vehicles."
  },
  {
    code: "C23",
    type: "conference",
    title: "Performance Analysis of Disruptive Instances in Cloud Environment",
    authors: "Pranab Nandy, Rounak Saha, Anurag Satpathy, Sandip Chakraborty, Sourav Kanti Addya",
    journal: "16th International Conference on COMmunication Systems & NETworkS (COMSNETS '24), Bangalore, India, pp. 370-378",
    year: 2024,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS59351.2024.10427039",
    abstract: "This paper presents a performance analysis of disruptive instances in cloud environments. The study investigates the impact of unpredictable events, such as system failures or traffic surges, on the performance and stability of cloud-based systems. Through extensive simulations, the authors provide insights into mitigating these disruptions, ensuring reliable cloud service provisioning in dynamic environments."
  },
  {
    code: "C22",
    type: "conference",
    title: "DeepVNE: Deep Reinforcement and Graph Convolution Fusion for Virtual Network Embedding",
    authors: "Keerthan Kumar T G, Aneesh AB, Anagha Siddheshwar, Amulya Marali, Anupama Kamath, Shashidhar G Koolagudi, Sourav Kanti Addya",
    journal: "16th International Conference on COMmunication Systems & NETworkS (COMSNETS '24), Bangalore, India, pp. 633-636",
    year: 2024,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS59351.2024.10426879",
    abstract: "DeepVNE introduces a novel approach to virtual network embedding using deep reinforcement learning (DRL) combined with graph convolutional networks (GCNs). The method optimizes virtual network mapping in SDN environments, taking into account both network topology and resource constraints. DeepVNE outperforms traditional methods by significantly improving embedding efficiency and scalability in dynamic environments."
  },
  {
    code: "C21",
    type: "conference",
    title: "LBA: Matching Theory Based Latency-Sensitive Binary Offloading in IoT-Fog Networks",
    authors: "Priyanka Soni, Omkar Chand, Anurag Satpathy, Sourav Kanti Addya",
    journal: "MINDS Workshop @ 16th International Conference on COMmunication Systems & NETworkS (COMSNETS '24), Bangalore, India, pp. 165-170",
    year: 2024,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS59351.2024.10427455",
    abstract: "LBA proposes a matching theory-based approach for latency-sensitive binary offloading in IoT-fog networks. The system leverages the theoretical framework of matching theory to achieve efficient offloading decisions, ensuring minimal latency and optimal resource utilization. This method is particularly beneficial for IoT applications that require quick response times, such as autonomous driving and industrial automation."
  },
{
    code: "C20",
    type: "conference",
    title: "VMAP: Matching-based Efficient Offloading in IoT-Fog Environments with Variable Resources",
    authors: "Jui Vijay Morey, Anurag Satpathy, Sourav Kanti Addya",
    journal: "IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS '23), Jaipur, India, pp. 714-719",
    year: 2023,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/ANTS59832.2023.10468986",
    abstract: "This paper presents VMAP, a matching-based approach for efficient offloading in IoT-fog environments with variable resources. VMAP intelligently matches IoT tasks to fog nodes, ensuring minimal latency and energy consumption. The framework adapts dynamically to resource fluctuations, making it suitable for real-time applications such as smart cities and industrial IoT systems."
  },
  {
    code: "C19",
    type: "conference",
    title: "LCS : Alleviating Total Cold Start Latency in Serverless Applications with LRU Warm Container Approach",
    authors: "Biswajeet Sethi, Sourav Kanti Addya, Soumya K. Ghosh",
    journal: "24th International Conference on Distributed Computing and Networking (ICDCN '23), Kharagpur, India, Jan 2023, pp. 197-206",
    year: 2023,
    core: "B-National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1145/3571306.3571404",
    abstract: "This paper introduces the LCS (LRU Warm Container Strategy) to alleviate cold start latency in serverless applications. By leveraging the Least Recently Used (LRU) strategy for warm containers, LCS reduces latency during function invocations, improving the performance of serverless computing in latency-sensitive applications such as real-time analytics and IoT systems."
  },
  {
    code: "C18",
    type: "conference",
    title: "Efficient Task Offloading in IoT-Fog Network",
    authors: "Jui Vijay Morey, Sourav Kanti Addya",
    journal: "24th International Conference on Distributed Computing and Networking (ICDCN '23), Kharagpur, India, Jan 2023, pp. 288-289",
    year: 2023,
    core: "B-National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1145/3571306.3571418",
    abstract: "This paper focuses on the efficient task offloading mechanism in IoT-fog networks. By optimizing the offloading decision process based on available resources and task priority, the proposed approach minimizes latency and maximizes throughput in fog-enabled IoT networks. This strategy is essential for time-sensitive applications such as autonomous systems and smart cities."
  },
  {
    code: "C17",
    type: "conference",
    title: "Virtual Machine Placement in Non-Cooperative Cloud Federation-Alliance",
    authors: "Sourav Kanti Addya, Anurag Satpathy, Ashok Kumar Turuk, Bibhudatta Sahoo",
    journal: "15th International Conference on COMmunication Systems & NETworkS (COMSNETS '23), Bangalore, India, Jan 2023, pp. 405-409",
    year: 2023,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS56262.2023.10041420",
    abstract: "This paper explores the problem of virtual machine placement in non-cooperative cloud federations, where cloud providers do not share resources. The proposed approach uses game-theoretic models to optimize VM placement decisions while considering factors like cost, resource utilization, and inter-cloud communication, making it suitable for multi-cloud environments and federated cloud systems."
  },
  {
    code: "C16",
    type: "conference",
    title: "MatchVNE: A Stable Virtual Network Embedding Strategy Based on Matching Theory",
    authors: "Keerthan Kumar T G, Ankit Srivastava, Anurag Satpathy, Sourav Kanti Addya, Shashidhar G Koolagudi",
    journal: "15th International Conference on COMmunication Systems & NETworkS (COMSNETS '23), Bangalore, India, Jan 2023, pp. 355-359",
    year: 2023,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS56262.2023.10041377",
    abstract: "MatchVNE proposes a stable virtual network embedding strategy based on matching theory. By leveraging the concepts of matching theory, this approach ensures stability and optimal resource utilization in virtual network embedding, particularly in Software-Defined Networks (SDNs). The solution is efficient for dynamic networks, such as those found in 5G and beyond networks."
  },
  {
    code: "C15",
    type: "conference",
    title: "DeSAT: Towards Transparent and Decentralized University Counselling Process",
    authors: "Dhaval Thummar, Yerramaddu Jahnavi, Mudavath Prathyusha, Sayad Shahanaz, Bishakh Chandra Ghosh, Sourav Kanti Addya",
    journal: "5th IEEE International Conference on Blockchain (IEEE Blockchain), Espoo, Finland, Aug 2022",
    year: 2022,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/Blockchain55522.2022.00029",
    abstract: "DeSAT is a decentralized system designed to automate and make transparent the university counselling process. By utilizing blockchain technology, the system ensures secure, tamper-proof data management, providing students with a transparent, efficient platform for the counselling and seat allocation process. The study showcases the system's feasibility in improving educational transparency."
  },
{
    code: "C14",
    type: "conference",
    title: "A Preliminary Study of Serverless Platforms for Latency Sensitive Applications",
    authors: "Thirukovela Venkata Sarathi, Julakanti Sai Nischal Reddy, Peddaboinolu Shiva, Rounak Saha, Anurag Satpathy, Sourav Kanti Addya",
    journal: "2022 IEEE CONECCT, Bangalore, India, July 2022",
    year: 2022,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/CONECCT55679.2022.9865790",
    abstract: "This paper investigates the challenges and opportunities of using serverless platforms for latency-sensitive applications. We perform an in-depth analysis of serverless computing, focusing on performance bottlenecks and latency concerns, and propose solutions to minimize cold start latencies in edge and IoT-based systems."
  },
  {
    code: "C13",
    type: "conference",
    title: "A Time Series Forecasting Approach to Minimize Cold Start Time in Cloud-Serverless Platform",
    authors: "Akash Puliyadi Jegannathan, Rounak Saha, Sourav Kanti Addya",
    journal: "IEEE International Black Sea Conference on Communications and Networking (IEEE BlackSeaCom 2022), Sofia, Bulgaria, June 2022",
    year: 2022,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/BlackSeaCom54372.2022.9858271",
    abstract: "This paper presents a time series forecasting approach to minimize cold start time in cloud-serverless platforms. The proposed method uses historical data to predict and pre-warm serverless functions, thus significantly reducing latency during function invocation. The approach is evaluated using real-world cloud services to demonstrate its effectiveness."
  },
  {
    code: "C12",
    type: "conference",
    title: "Automating the Selection of Container Orchestrators for Service Deployment",
    authors: "Pravar Chaurasia, Shubha Brata Nath, Sourav Kanti Addya, Soumya K Ghosh",
    journal: "MINDS Workshop @ 14th International Conference on Communication Systems & Networks (COMSNETS '22), Bangalore, India, Jan 2022",
    year: 2022,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS53615.2022.9668432",
    abstract: "This paper addresses the challenge of selecting appropriate container orchestrators for deploying microservices in cloud environments. We propose an automated framework to select the best orchestrator based on workload, resource availability, and service requirements. The framework is validated using multiple cloud environments and service models."
  },
  {
    code: "C11",
    type: "conference",
    title: "Democratizing University Seat Allocation using Blockchain",
    authors: "Yerramaddu Jahnavi, Mudavath Prathyusha, Sayad Shahanaz, Dhaval Thummar, Bishakh Chandra Ghosh, Sourav Kanti Addya",
    journal: "14th International Conference on Communication Systems & Networks (COMSNETS '22), Bangalore, India, Jan 2022",
    year: 2022,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS53615.2022.9668336",
    abstract: "This paper explores the use of blockchain technology to democratize the university seat allocation process. By leveraging smart contracts and decentralized networks, the proposed system ensures transparency, fairness, and security in the allocation of seats, benefiting both students and academic institutions."
  },
  {
    code: "C10",
    type: "conference",
    title: "Leveraging Public-Private Blockchain Interoperability for Closed Consortium Interfacing",
    authors: "Bishakh Chandra Ghosh, Tanay Bhartia, Sourav Kanti Addya, Sandip Chakraborty",
    journal: "IEEE International Conference on Computer Communications (IEEE INFOCOM 2021), May 2021",
    year: 2021,
    core: "A*",
    impact: "",
    acceptance: "19.9%",
    link: "https://doi.org/10.1109/INFOCOM42981.2021.9488683",
    abstract: "This paper proposes a framework for public-private blockchain interoperability, designed for closed consortium interfacing in cloud and distributed systems. The framework enhances data privacy, improves transaction transparency, and ensures seamless integration across heterogeneous blockchain platforms."
  },
   {
    code: "C9",
    type: "conference",
    title: "Container-based Service State Management in Cloud Computing",
    authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "IFIP/IEEE International Symposium on Integrated Network Management (IFIP/IEEE IM 2021), Bordeaux, France, May 2021",
    year: 2021,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://ieeexplore.ieee.org/document/9463966",
    abstract: "In this paper, we propose a novel approach for managing the state of containerized services in cloud environments. Our framework uses dynamic monitoring and proactive scaling to ensure efficient deployment and resource allocation. The results demonstrate improved performance in managing service states across multiple cloud platforms."
  },
  {
    code: "C8",
    type: "conference",
    title: "MatchCloud: Service Matching for Multi-Cloud Marketplace",
    authors: "Arpana Chakma, Shubham Kumar, Pradeep Kumar Mahato, Anurag Satpathy, Sourav Kanti Addya",
    journal: "13th International Conference on Communication Systems & Networks (COMSNETS '21), Bangalore, India, Jan 2021",
    year: 2021,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS51098.2021.9352821",
    abstract: "This paper introduces MatchCloud, a service-matching framework for multi-cloud environments. The framework optimizes service placement and resource allocation by leveraging matchmaking algorithms. The proposed approach demonstrates enhanced service reliability and reduced operational costs in multi-cloud platforms."
  },
  {
    code: "C7",
    type: "conference",
    title: "Green Containerized Service Consolidation in Cloud",
    authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "IEEE International Conference on Communications (IEEE ICC '20), Dublin, Ireland, June 2020",
    year: 2020,
    core: "B",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/ICC40277.2020.9149173",
    abstract: "This paper presents a green approach for containerized service consolidation in cloud environments. We focus on minimizing energy consumption while maintaining high-performance levels. Our framework integrates service consolidation algorithms with energy-efficient cloud infrastructure management strategies."
  },
  {
    code: "C6",
    type: "conference",
    title: "Caching Techniques to Improve Latency in Serverless Architectures",
    authors: "Bishakh Chandra Ghosh, Sourav Kanti Addya, Nishant Baranwal Somy, Shubha Brata Nath, Sandip Chakraborty, Soumya K Ghosh",
    journal: "12th International Conference on Communication Systems & Networks (COMSNETS '20), Bangalore, India, Jan 2020",
    year: 2020,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS48256.2020.9027427",
    abstract: "We explore caching techniques to improve latency in serverless architectures, specifically for IoT and edge computing applications. Our work shows how caching can reduce cold start latencies and enhance function invocation times in serverless systems. The proposed approach leads to a significant improvement in real-time processing capabilities."
  },
  {
    code: "C5",
    type: "conference",
    title: "PTC: Pick-Test-Choose to Place Containerized Micro-services in IoT",
    authors: "Shubha Brata Nath, Subhrendu Chattopadhyay, Raja Karmakar, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "IEEE Global Communications Conference (IEEE GLOBECOM '19), Waikoloa, Hawaii, USA, Dec 2019",
    year: 2019,
    core: "B",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/GLOBECOM38437.2019.9013163",
    abstract: "This paper proposes a new methodology for placing containerized microservices in IoT environments. The proposed 'Pick-Test-Choose' (PTC) algorithm improves resource allocation by considering the characteristics of both microservices and IoT devices, resulting in optimized performance and lower latency."
  },
  {
    code: "C4",
    type: "conference",
    title: "Power and Time aware VM Migration for Multi-tier Applications over Geo-distributed Clouds",
    authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K. Ghosh",
    journal: "IEEE International Conference on Cloud Computing (IEEE CLOUD 2019), Milan, Italy, July 2019",
    year: 2019,
    core: "B",
    impact: "",
    acceptance: "20.8%",
    link: "https://doi.org/10.1109/CLOUD.2019.00062",
    abstract: "In this paper, we introduce a novel power and time-aware virtual machine (VM) migration strategy for multi-tier applications in geo-distributed cloud environments. The approach minimizes energy consumption while optimizing application performance across multi-cloud setups, improving overall efficiency in large-scale cloud infrastructures."
  },
  {
    code: "C3",
    type: "conference",
    title: "Towards a Democratic Federation for Infrastructure Service Provisioning",
    authors: "Bishakh Chandra Ghosh, Sourav Kanti Addya, Anurag Satpathy, Soumya K. Ghosh, Sandip Chakraborty",
    journal: "IEEE International Conference on Services Computing (IEEE SCC 2019), Milan, Italy, July 2019",
    year: 2019,
    core: "A",
    impact: "",
    acceptance: "17%",
    link: "https://doi.org/10.1109/SCC.2019.00036",
    abstract: "This paper discusses the concept of a democratic federation for infrastructure service provisioning, leveraging decentralized approaches to improve resource allocation, transparency, and efficiency. By utilizing blockchain and smart contract technologies, the proposed system enables fair and scalable service provisioning in cloud environments."
  },
 {
    code: "C2",
    type: "conference",
    title: "Optimal VM Coalition Selection for Multi-Tier Applications Over Multi-Cloud Broker Environment",
    authors: "Sourav Kanti Addya, Anurag Satpathy, Sandip Chakraborty, Soumya K Ghosh",
    journal: "11th International Conference on Communication Systems & Networks (COMSNETS '19), Bangalore, India, Jan 2019",
    year: 2019,
    core: "India National",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/COMSNETS.2019.8711038",
    abstract: "In this paper, we propose an optimal strategy for virtual machine (VM) coalition selection in multi-tier applications over multi-cloud broker environments. The proposed solution ensures efficient resource utilization and reduces operational costs by considering VM availability, resource demand, and network topology across multi-cloud infrastructures."
  },
  {
    code: "C1",
    type: "conference",
    title: "A Hybrid Queuing Model for Virtual Machine Placement in Cloud Data Center",
    authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Mahasweta Sarkar",
    journal: "IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS '15), Kolkata, India, Dec 2015",
    year: 2015,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://doi.org/10.1109/ANTS.2015.7413642",
    abstract: "This paper introduces a hybrid queuing model for the optimal placement of virtual machines (VMs) in cloud data centers. The model combines multiple queuing strategies to improve system performance, reduce energy consumption, and enhance resource management, ensuring efficient VM scheduling and placement across diverse cloud environments."
  },

  // Books
  {
    code: "B1",
    type: "book",
    title: "Blockchain Technology and Applications",
    authors: "Manoj Kumar, B Annappa, Likewin Thomas, Sourav Kanti Addya, M Niranjanamurthy",
    journal: "Chapman and Hall/CRC, 1st Edition, ISBN: 9781032054438, 498 pages, December 13, 2022",
    year: 2022,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://www.routledge.com/Blockchain-Technology-and-Applications/V-B-Thomas-Addya-M/p/book/9781032054438",
    abstract: "This book provides a comprehensive exploration of blockchain technology, its applications, and emerging trends. It covers key concepts such as smart contracts, consensus algorithms, blockchain security, and practical use cases in areas like finance, supply chain, and IoT. The book is a valuable resource for both researchers and practitioners seeking to understand the transformative potential of blockchain."
  },
  {
    code: "B2",
    type: "book",
    title: "Cloud Network Management: An IoT Based Framework",
    authors: "Sanjay Kumar Biswash, Sourav Kanti Addya",
    journal: "Chapman and Hall/CRC, 1st Edition, ISBN: 9780367256050, 290 pages, October 27, 2020",
    year: 2020,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://www.routledge.com/Cloud-Network-Management-An-IoT-Based-Framework/Biswash-Addya/p/book/9780367256050",
    abstract: "This book presents a novel framework for cloud network management with a focus on the integration of Internet of Things (IoT) devices. It explores how cloud infrastructures can be optimized for IoT applications, offering solutions for resource management, scalability, and security in IoT-based cloud environments. It is an essential reference for researchers and practitioners working in cloud computing and IoT."
  },

  // Book Chapters
  {
    code: "BC1",
    type: "chapter",
    title: "IoT Device Management in Cloud-Fog Environment using Blockchain",
    authors: "Asutosh Kumar Biswal, Sourav Kanti Addya, Bibhudatta Sahoo, Ashok Kumar Turuk",
    journal: "In book: Cloud Security, 1st Edition, ISBN: 9780367821555, 14 pages, May 26, 2021",
    year: 2021,
    core: "",
    impact: "",
    acceptance: "",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9780367821555-1/secured-iot-device-management-cloud-fog-environment-using-blockchain-asutosh-kumar-biswal-sourav-kanti-addya-bibhudatta-sahoo-ashok-kumar-turuk",
    abstract: "In this book chapter, we discuss the integration of blockchain technology for secure IoT device management in cloud-fog environments. The proposed model ensures data integrity, confidentiality, and secure device authentication, leveraging blockchain’s decentralized and immutable nature to enhance security in distributed systems."
  },

  // Patents
  {
    code: "P1",
    type: "patent",
    title: "SatVote: Secure Remote Voting System Using Blockchain and Satellite Communication",
    authors: "Sourav Kanti Addya, Urvesh Rathod, Shashidhar G Koolagudi",
    journal: "Indian Patent Filed, File No. 202141056308, Date: Dec 04, 2021",
    year: 2021,
    core: "",
    impact: "",
    acceptance: "",
    link: "",
    abstract: "SatVote is a secure remote voting system that combines blockchain technology with satellite communication for ensuring transparency and tamper-proof election processes. The system provides a decentralized voting mechanism, making it resistant to hacking and manipulation, and offering a new level of security and privacy in online voting systems."
  },
  {
    code: "P2",
    type: "patent",
    title: "A Stable Cloud-Alliance to Provide Uninterruptable Service",
    authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Anurag Satpathy",
    journal: "Indian Patent Filed, File No. 201931006455, Date: Feb 19, 2019",
    year: 2019,
    core: "",
    impact: "",
    acceptance: "",
    link: "",
    abstract: "This patent proposes a cloud-alliance system designed to ensure uninterrupted service in multi-cloud environments. The framework leverages redundancy and automatic failover techniques to maintain service continuity, even in the event of cloud service disruptions. The system ensures high availability and fault tolerance for critical applications."
  },

  // Continue with other entries similarly...
];



function Research() {

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  const [filter, setFilter] = useState("all");
  const [openAbstracts, setOpenAbstracts] = useState({});





const FILTERS = ["all", "journal", "conference", "book", "chapter", "patent"];

const counts = {
  all: publications.length,
  journal: publications.filter(pub => pub.type === "journal").length,
  conference: publications.filter(pub => pub.type === "conference").length,
  book: publications.filter(pub => pub.type === "book").length,
  chapter: publications.filter(pub => pub.type === "chapter").length,
  patent: publications.filter(pub => pub.type === "patent").length,
};

const sortedPublications = [...publications].sort((a, b) => {
  const yearA = a.year ? parseInt(a.year) : 0;
  const yearB = b.year ? parseInt(b.year) : 0;
  return yearB - yearA;
});

const filteredPublications =
  filter === "all"
    ? sortedPublications
    : sortedPublications.filter((pub) => pub.type === filter);



// For conferences: group by core ranking
const groupedByCore = {};
if (filter === "conference") {
  filteredPublications.forEach(pub => {
    const key = pub.core || "Unranked";
    if (!groupedByCore[key]) groupedByCore[key] = [];
    groupedByCore[key].push(pub);
  });
}


  const toggleAbstract = (index) => {
    setOpenAbstracts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="min-h-screen bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight">
      {/* Hero Header */}
      <div className="relative h-96 flex items-center justify-center  backgroundColor: 'dark:bg-gray-900' bg-center bg-[url('https://picsum.photos/1920/1080?random=2')]">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold font-serifHeading text-white animate-fade-in-down">
            Research & Innovation
          </h1>
          <p className="mt-4 text-lg font-bold font-sans text-white animate-middle-typewriter">
            Advancing Cloud & Network Systems
          </p>
          <a href="#research-content" className="mt-6 inline-block text-white animate-pulse">
            <FaChevronDown className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <div id="research-content" className="max-w-[90%] mx-auto px-4 md:px-10 py-16">
        {/* Research Interests */}
        <div className="py-16">
          <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA]  text-center mb-12 animate-fade-in">
            Research Interests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-secondary shadow-md hover:shadow-lg hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl text-[#389589] dark:text-[#A78BFA] mr-3">{interest.icon}</span>
                  <h3 className="text-xl font-semibold font-cool text-gray-900 dark:text-gray-100">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-base font-body text-gray-900 dark:text-gray-100">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        
<div className="py-16">
  <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-12 animate-fade-in">
    Publications
  </h2>
  {/* Filter Bar with Counts */}
 <div className="flex flex-wrap justify-center mb-8 gap-x-2 gap-y-2">
  {FILTERS.map((type) => (
    <button
      key={type}
      onClick={() => setFilter(type)}
      className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold font-body text-xs sm:text-sm md:text-base
        ${
          filter === type
            ? "bg-[#389589] text-white dark:bg-[#A78BFA] dark:text-white"
            : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white dark:hover:bg-[#A78BFA] dark:hover:text-white hover:bg-[#389589] hover:text-white"
        } transition-colors duration-300`}
      aria-label={`Filter by ${type}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)} ({counts[type]})
    </button>
  ))}
</div>



  {/* Publication List */}
  <ul className="w-full max-w-6xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
    {filteredPublications.map((pub, index) => (
      <li
        key={index}
        className="py-8 px-4 md:px-10 text-left animate-fade-in-up"
        style={{ animationDelay: `${index * 0.07}s` }}
      >
        {/* Top row: code badge, title, type badge, core, IF, citation, acceptance */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {pub.code && (
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#389589] to-[#A78BFA] text-white shadow-sm">
              {pub.code}
            </span>
          )}
          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-xl font-cool text-[#389589] dark:text-[#A78BFA] hover:underline"
            >
              {pub.title}
            </a>
          ) : (
            <span className="font-semibold text-xl font-cool text-[#389589]">
              {pub.title}
            </span>
          )}
          {pub.type && (
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ml-2
                ${
                  pub.type === "conference"
                    ? "bg-orange-100 text-orange-700"
                    : pub.type === "journal"
                    ? "bg-blue-100 text-blue-700"
                    : pub.type === "book"
                    ? "bg-green-100 text-green-700"
                    : pub.type === "chapter"
                    ? "bg-yellow-100 text-yellow-700"
                    : pub.type === "patent"
                    ? "bg-pink-100 text-pink-700"
                    : "bg-gray-100 text-gray-700"
                }
              `}
            >
              {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
            </span>
          )}
          {/* Core ranking badge (inline, not heading) */}
          {pub.core && (
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ml-2
                ${
                  pub.core === "Core-A"
                    ? "bg-green-200 text-green-900 border border-green-400"
                    : pub.core === "Core-B"
                    ? "bg-yellow-200 text-yellow-900 border border-yellow-400"
                    : pub.core === "Core-C"
                    ? "bg-blue-200 text-blue-900 border border-blue-400"
                    : "bg-gray-100 text-gray-700 border border-gray-300"
                }
                shadow-sm`}
            >
              {"Core Ranking : "+pub.core}
            </span>
          )}
          {/* Impact factor badge (improved color) */}
          {pub.impact && (
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ml-2 bg-[#f2f7fa] text-[#0f5b7a] border border-[#0f5b7a] shadow-sm dark:bg-[#193a4d] dark:text-[#b3e6ff]">
              IF: {pub.impact}
            </span>
          )}
          {/* Citation badge (improved color) */}
          {pub.citation && (
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ml-2 bg-[#fff4d6] text-[#a36a00] border border-[#a36a00] shadow-sm dark:bg-[#473a18] dark:text-[#ffe8b3]">
              Citations: {pub.citation}
            </span>
          )}
          {/* Acceptance rate badge */}
          {pub.acceptance && (
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ml-2 bg-green-100 text-green-700 border border-green-300 shadow-sm">
              Acceptance Rate: {pub.acceptance}
            </span>
          )}
        </div>
        {/* Authors */}
        {pub.authors && (
          <div className="italic text-sm font-body text-gray-700 dark:text-gray-300 mb-1">
            {pub.authors}
          </div>
        )}
        {/* Journal/Venue and Year */}
        <div className="text-base font-body text-gray-700 dark:text-gray-300 mb-1">
          {pub.journal}
          {pub.year && `, ${pub.year}`}
        </div>
        {/* Short Description */}
        {pub.desc && (
          <div className="text-sm font-body text-gray-500 dark:text-gray-400 mb-1">
            {pub.desc}
          </div>
        )}
        {/* Abstract Collapse */}
        {pub.abstract && (
          <div>
            <button
              onClick={() => toggleAbstract(index)}
              className="mt-1 text-[#389589] dark:text-[#A78BFA] hover:text-accent font-body flex items-center text-sm"
              aria-label={openAbstracts[index] ? "Hide abstract" : "Show abstract"}
            >
              {openAbstracts[index] ? "Hide Abstract" : "Show Abstract"}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-300 ${
                  openAbstracts[index] ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`mt-1 text-sm font-body text-gray-900 dark:text-gray-100 transition-all duration-300 ${
                openAbstracts[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {pub.abstract}
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}

export default Research;