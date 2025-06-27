import fetch from 'node-fetch';


// Your publications array (import or paste here)
const publications = [
  {
    code: "J17",
    type: "journal",
    title: "TReB: Task dependency aware-Resource allocation for Internet of Things using Binary offloading",
    authors: "Priyanka Soni, Ajay Gajanan Hajare, Keerthan Kumar T.G, Sourav Kanti Addya",
    journal: "Ad Hoc Networks, Elsevier",
    year: 2025,
    core: "",
    impact: "4.4",
    acceptance: "",
    link: "https://doi.org/10.1016/j.adhoc.2025.103909",
    citationDoi: "10.1016/j.adhoc.2025.103909"
  },
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
    citationDoi: "10.1145/3700838.3700868"
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
    citationDoi: "10.1145/3700838.3700849"
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
    citationDoi: "10.1145/3700838.3703657"
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
    citationDoi: "10.1109/COMSNETS63942.2025.10885632"
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
    citationDoi: "10.1109/COMSNETS63942.2025.10885760"
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
    citationDoi: "10.1109/COMSNETS63942.2025.10885582"
  },
  {
    code: "J16",
    type: "journal",
    title: "DCRDA: Deadline-Constrained Function Scheduling in Serverless-Cloud Platform",
    authors: "Priyanka Ashok Birajdar, Divya Meena, Anurag Satpathy, Sourav Kanti Addya",
    journal: "Journal of Cluster Computing, Springer",
    year: 2025,
    core: "",
    impact: "3.6",
    acceptance: "",
    link: "https://doi.org/10.1007/s10586-024-05058-2",
    citationDoi: "10.1007/s10586-024-05058-2"
  },
  {
    code: "J15",
    type: "journal",
    title: "CSMD: Container state management for deployment in cloud data centers",
    authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
    journal: "Future Generation Computer Systems, Elsevier, Vol 162",
    year: 2025,
    core: "",
    impact: "6.2",
    acceptance: "",
    link: "https://doi.org/10.1016/j.future.2024.107495",
    citationDoi: "10.1016/j.future.2024.107495"
  },
  {
    code: "J14",
    type: "journal",
    title: "InDS: Intelligent DRL Strategy for Effective Virtual Network Embedding of an Online Virtual Network Requests",
    authors: "Keerthan Kumar T G, Sourav Kanti Addya, Shashidhar G Koolagudi",
    journal: "IEEE Access, Vol 12, pp. 94843-94860",
    year: 2024,
    core: "",
    impact: "3.4",
    acceptance: "",
    link: "https://doi.org/10.1109/ACCESS.2024.3424474",
    citationDoi: "10.1109/ACCESS.2024.3424474"
  },
  {
    code: "J13",
    type: "journal",
    title: "EFraS: Emulated Framework to Develop and Analyze Dynamic Virtual Network Embedding Strategies over SDN Infrastructure",
    authors: "Keerthan Kumar T G, Shivangi Tomar, Sourav Kanti Addya, Anurag Satpathy, Shashidhar G Koolagudi",
    journal: "Simulation Modelling Practice and Theory, Elsevier",
    year: 2024,
    core: "",
    impact: "4.2",
    acceptance: "",
    link: "https://doi.org/10.1016/j.simpat.2024.102952",
    citationDoi: "10.1016/j.simpat.2024.102952"
  },
  // Continue in your publications array:
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
  citationDoi: "10.1109/PerComWorkshops59983.2024.10502788"
},
{
  code: "J12",
  type: "journal",
  title: "Optimizing Completion Time of Requests in Serverless Computing",
  authors: "Ajay Sherawat, Shubha Brata Nath, Sourav Kanti Addya",
  journal: "Journal of Network and Systems Management, Springer, Vol 32, pp. 01-28",
  year: 2024,
  core: "",
  impact: "3.6",
  acceptance: "",
  link: "https://doi.org/10.1007/s10922-024-09800-4",
  citationDoi: "10.1007/s10922-024-09800-4"
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
  citationDoi: "10.1109/COMSNETS59351.2024.10427039"
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
  citationDoi: "10.1109/COMSNETS59351.2024.10426879"
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
  citationDoi: "10.1109/COMSNETS59351.2024.10427455"
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
  citationDoi: "10.1109/ANTS59832.2023.10468986"
},
{
  code: "J11",
  type: "journal",
  title: "FASE: Fast Deployment for Dependent Applications in Serverless Environments",
  authors: "Rounak Saha, Anurag Satpathy, Sourav Kanti Addya",
  journal: "Journal of Supercomputing, Springer, pp. 01-22",
  year: 2023,
  core: "",
  impact: "3.3",
  acceptance: "",
  link: "https://doi.org/10.1007/s11227-023-05840-w",
  citationDoi: "10.1007/s11227-023-05840-w"
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
  citationDoi: "10.1016/j.jpdc.2023.104762"
},
{
  code: "J9",
  type: "journal",
  title: "Geo-distributed Multi-tier Workload Migration over Multi-timescale Electricity Markets",
  authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K Ghosh, Sajal K Das",
  journal: "IEEE Transactions on Services Computing, Vol 16(5), pp. 3385-3396",
  year: 2023,
  core: "",
  impact: "11.019",
  acceptance: "",
  link: "https://ieeexplore.ieee.org/document/10109840",
  citationDoi: "10.1109/TSC.2023.3270921"
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
  citationDoi: "10.1016/j.comnet.2023.109661"
},
{
  code: "J7",
  type: "journal",
  title: "Shipping Code towards Data in an Inter-Region Serverless Environment to Leverage Latency",
  authors: "Biswajeet Sethi, Sourav Kanti Addya, Jay Bhutada, Soumya K Ghosh",
  journal: "Journal of Supercomputing, Springer, Vol 79(10), pp. 11585-11610",
  year: 2023,
  core: "",
  impact: "3.3",
  acceptance: "",
  link: "https://doi.org/10.1007/s11227-023-05104-7",
  citationDoi: "10.1007/s11227-023-05104-7"
},
{
  code: "J6",
  type: "journal",
  title: "CoMCLOUD: Virtual Machine Coalition for Multi-Tier Applications over Multi-Cloud Environments",
  authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K Ghosh, Sajal K Das",
  journal: "IEEE Transactions on Cloud Computing, Vol 11(1), pp. 956-970",
  year: 2023,
  core: "",
  impact: "5.6",
  acceptance: "",
  link: "https://ieeexplore.ieee.org/document/9585379",
  citationDoi: "10.1109/TCC.2021.3122445"
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
  citationDoi: "10.1007/s11227-021-04135-2"
},
{
  code: "C12",
  type: "conference",
  title: "Automating the Selection of Container Orchestrators for Service Deployment",
  authors: "Pravar Chaurasia, Shubha Brata Nath, Sourav Kanti Addya, Soumya K Ghosh",
  journal: "MINDS Workshop @ 14th International Conference on Communication Systems & Networks (COMSNETS '22), Bangalore, India",
  year: 2022,
  core: "India National",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/COMSNETS53615.2022.9668432",
  citationDoi: "10.1109/COMSNETS53615.2022.9668432"
},
{
  code: "C11",
  type: "conference",
  title: "Democratizing University Seat Allocation using Blockchain",
  authors: "Yerramaddu Jahnavi, Mudavath Prathyusha, Sayad Shahanaz, Dhaval Thummar, Bishakh Chandra Ghosh, Sourav Kanti Addya",
  journal: "14th International Conference on Communication Systems & Networks (COMSNETS '22), Bangalore, India",
  year: 2022,
  core: "India National",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/COMSNETS53615.2022.9668336",
  citationDoi: "10.1109/COMSNETS53615.2022.9668336"
},
{
  code: "C10",
  type: "conference",
  title: "Leveraging Public-Private Blockchain Interoperability for Closed Consortium Interfacing",
  authors: "Bishakh Chandra Ghosh, Tanay Bhartia, Sourav Kanti Addya, Sandip Chakraborty",
  journal: "IEEE International Conference on Computer Communications (IEEE INFOCOM 2021), May 10-13, 2021",
  year: 2021,
  core: "A*",
  impact: "",
  acceptance: "19.9%",
  link: "https://doi.org/10.1109/INFOCOM42981.2021.9488683",
  citationDoi: "10.1109/INFOCOM42981.2021.9488683"
},
{
  code: "C9",
  type: "conference",
  title: "Container-based Service State Management in Cloud Computing",
  authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
  journal: "IFIP/IEEE International Symposium on Integrated Network Management (IFIP/IEEE IM 2021), Bordeaux, France, May 17-21, 2021",
  year: 2021,
  core: "",
  impact: "",
  acceptance: "",
  link: "https://ieeexplore.ieee.org/document/9463966",
  citationDoi: "10.1109/IM.2021.9463966"
},
{
  code: "C8",
  type: "conference",
  title: "MatchCloud:Service Matching for Multi Cloud Marketplace",
  authors: "Arpana Chakma, Shubham Kumar, Pradeep Kumar Mahato, Anurag Satpathy, Sourav Kanti Addya",
  journal: "13th International Conference on Communication Systems & Networks (COMSNETS '21), Bangalore, India",
  year: 2021,
  core: "India National",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/COMSNETS51098.2021.9352821",
  citationDoi: "10.1109/COMSNETS51098.2021.9352821"
},
{
  code: "C7",
  type: "conference",
  title: "Green Containerized Service Consolidation in Cloud",
  authors: "Shubha Brata Nath, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
  journal: "IEEE International Conference on Communications (IEEE ICC '20), Dublin, Ireland, June 07-11, 2020",
  year: 2020,
  core: "B",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/ICC40277.2020.9149173",
  citationDoi: "10.1109/ICC40277.2020.9149173"
},
{
  code: "C6",
  type: "conference",
  title: "Caching Techniques to Improve Latency in Serverless Architectures",
  authors: "Bishakh Chandra Ghosh, Sourav Kanti Addya, Nishant Baranwal Somy, Shubha Brata Nath, Sandip Chakraborty, Soumya K Ghosh",
  journal: "12th International Conference on Communication Systems & Networks (COMSNETS '20), Bangalore, India",
  year: 2020,
  core: "India National",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/COMSNETS48256.2020.9027427",
  citationDoi: "10.1109/COMSNETS48256.2020.9027427"
},
{
  code: "C5",
  type: "conference",
  title: "PTC: Pick-Test-Choose to Place Containerized Micro-services in IoT",
  authors: "Shubha Brata Nath, Subhrendu Chattopadhyay, Raja Karmakar, Sourav Kanti Addya, Sandip Chakraborty, Soumya K Ghosh",
  journal: "IEEE Global Communications Conference(IEEE GLOBECOM '19), Waikoloa, Hawaii, USA, December 09-13, 2019",
  year: 2019,
  core: "B",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/GLOBECOM38437.2019.9013163",
  citationDoi: "10.1109/GLOBECOM38437.2019.9013163"
},
{
  code: "C4",
  type: "conference",
  title: "Power and Time aware VM Migration for Multi-tier Applications over Geo-distributed Clouds",
  authors: "Sourav Kanti Addya, Anurag Satpathy, Bishakh Chandra Ghosh, Sandip Chakraborty, Soumya K. Ghosh",
  journal: "IEEE International Conference on Cloud Computing (IEEE CLOUD 2019), Milan, Italy, July 08-13, 2019",
  year: 2019,
  core: "B",
  impact: "",
  acceptance: "20.8%",
  link: "https://doi.org/10.1109/CLOUD.2019.00062",
  citationDoi: "10.1109/CLOUD.2019.00062"
},
{
  code: "C3",
  type: "conference",
  title: "Towards a Democratic Federation for Infrastructure Service Provisioning",
  authors: "Bishakh Chandra Ghosh, Sourav Kanti Addya, Anurag Satpathy, Soumya K. Ghosh, Sandip Chakraborty",
  journal: "IEEE International Conference on Services Computing (IEEE SCC 2019), Milan, Italy, July 08-13, 2019",
  year: 2019,
  core: "A",
  impact: "",
  acceptance: "17%",
  link: "https://doi.org/10.1109/SCC.2019.00036",
  citationDoi: "10.1109/SCC.2019.00036"
},
{
  code: "C2",
  type: "conference",
  title: "Optimal VM Coalition Selection for Multi-Tier Applications Over Multi-Cloud Broker Environment",
  authors: "Sourav Kanti Addya, Anurag Satpathy, Sandip Chakraborty, Soumya K Ghosh",
  journal: "11th International Conference on Communication Systems & Networks (COMSNETS '19), Bangalore, India",
  year: 2019,
  core: "India National",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/COMSNETS.2019.8711038",
  citationDoi: "10.1109/COMSNETS.2019.8711038"
},
{
  code: "C1",
  type: "conference",
  title: "A Hybrid Queuing Model for Virtual Machine Placement in Cloud Data Center",
  authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Mahasweta Sarkar",
  journal: "IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS '15), Kolkata, India, December 15-18, 2015",
  year: 2015,
  core: "",
  impact: "",
  acceptance: "",
  link: "https://doi.org/10.1109/ANTS.2015.7413642",
  citationDoi: "10.1109/ANTS.2015.7413642"
},
// Books
{
  code: "",
  type: "book",
  title: "Blockchain Technology and Applications",
  authors: "Manoj Kumar, B Annappa, Likewin Thomas, Sourav Kanti Addya, M Niranjanamurthy",
  journal: "Chapman and Hall/CRC, 1st Edition, ISBN: 9781032054438, 498 pages, December 13, 2022",
  year: 2022,
  core: "",
  impact: "",
  acceptance: "",
  link: "https://www.routledge.com/Blockchain-Technology-and-Applications/V-B-Thomas-Addya-M/p/book/9781032054438",
  citationDoi: ""
},
{
  code: "",
  type: "book",
  title: "Cloud Network Management: An IoT Based Framework",
  authors: "Sanjay Kumar Biswash, Sourav Kanti Addya",
  journal: "Chapman and Hall/CRC, 1st Edition, ISBN: 9780367256050, 290 pages, October 27, 2020",
  year: 2020,
  core: "",
  impact: "",
  acceptance: "",
  link: "https://www.routledge.com/Cloud-Network-Management-An-IoT-Based-Framework/Biswash-Addya/p/book/9780367256050",
  citationDoi: ""
},

// Book Chapters
{
  code: "",
  type: "chapter",
  title: "IoT Device Management in Cloud-Fog Environment using Blockchain",
  authors: "Asutosh Kumar Biswal, Sourav Kanti Addya, Bibhudatta Sahoo, Ashok Kumar Turuk",
  journal: "In book: Cloud Security, 1st Edition, ISBN: 9780367821555, 14 pages, May 26, 2021",
  year: 2021,
  core: "",
  impact: "",
  acceptance: "",
  link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9780367821555-1/secured-iot-device-management-cloud-fog-environment-using-blockchain-asutosh-kumar-biswal-sourav-kanti-addya-bibhudatta-sahoo-ashok-kumar-turuk",
  citationDoi: ""
},

// Patents
{
  code: "",
  type: "patent",
  title: "SatVote: Secure Remote Voting System Using Blockchain and Satellite Communication",
  authors: "Sourav Kanti Addya, Urvesh Rathod, Shashidhar G Koolagudi",
  journal: "Indian Patent Filed, File No. 202141056308, Date: Dec 04, 2021",
  year: 2021,
  core: "",
  impact: "",
  acceptance: "",
  link: "",
  citationDoi: ""
},
{
  code: "",
  type: "patent",
  title: "A Stable Cloud-Alliance to Provide Uninterruptable Service",
  authors: "Sourav Kanti Addya, Ashok Kumar Turuk, Bibhudatta Sahoo, Anurag Satpathy",
  journal: "Indian Patent Filed, File No. 201931006455, Date: Feb 19, 2019",
  year: 2019,
  core: "",
  impact: "",
  acceptance: "",
  link: "",
  citationDoi: ""
}


];

async function getCitationCount(doi) {
  if (!doi) return null;
  const url = `https://opencitations.net/index/coci/api/v1/citations/${encodeURIComponent(doi)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.length;
  } catch (err) {
    return null;
  }
}

(async () => {
  for (const pub of publications) {
    if (pub.citationDoi) {
      const count = await getCitationCount(pub.citationDoi);
      pub.citationCount = count;
      console.log(`"${pub.title}" [${pub.citationDoi}]: ${count} citations`);
    } else {
      pub.citationCount = null;
      console.log(`"${pub.title}": No DOI, cannot fetch citations`);
    }
  }
  // Output updated array (copy this back into your project)
  console.log(JSON.stringify(publications, null, 2));
})();
