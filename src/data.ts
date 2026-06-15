import {
  SkillCategory,
  StatisticCard,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  AchievementItem
} from "./types";

export const PERSONAL_INFO = {
  name: "GM Vinay Kumar",
  title: "Data Analyst & BI Developer",
  badgeText: "Available for Opportunities",
  headline: "Transforming data into visualizations and meaningful business insights.",
  description: "I'm a passionate and detail-oriented Data Analyst with hands-on experience in SQL, Power BI, Excel, and Data Visualization. I enjoy transforming complex datasets into meaningful insights that drive business decisions and improve organizational performance.",
  aboutText: "Aspiring Data Analyst with hands-on experience in SQL, Excel, Power BI, and Data Visualization. Skilled in transforming raw data into meaningful insights through data cleaning, analysis, and interactive dashboard development. Passionate about solving business problems using data-driven decision-making and continuously enhancing analytical and technical skills. Seeking opportunities to contribute to organizational growth through actionable insights and effective reporting.",
  profilePhoto: "https://images.weserv.nl/?url=https://i.ibb.co/s7xjz8W/vinay.jpg",
  resumeUrl: "https://www.image2url.com/r2/default/documents/1781516825570-69800a29-085f-4fce-b3af-f9839a9aa0f5.pdf",
  email: "gmvinay102@gmail.com",
  location: "Bengaluru, Karnataka, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/g-m-vinay-kumar-a98007256/",
    github: "https://github.com/Vinaygm75",
    email: "mailto:gmvinay102@gmail.com"
  }
};

export const STATISTICS: StatisticCard[] = [
  { value: "6+", label: "Projects Completed", iconName: "Database" },
  { value: "5+", label: "Certifications Earned", iconName: "Award" },
  { value: "15+", label: "Technical Skills", iconName: "Code2" },
  { value: "4+", label: "Training Programs", iconName: "TrendingUp" }
];

export const FOCUS_AREAS = [
  "Data Analytics",
  "Business Intelligence",
  "Dashboard Development",
  "Data Visualization",
  "Reporting Automation",
  "Data Cleaning"
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analytics",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Data Analysis", level: 88 },
      { name: "Data Cleaning", level: 85 },
      { name: "Data Visualization", level: 85 },
      { name: "Business Intelligence", level: 82 },
      { name: "Data Modeling", level: 78 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Excel", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Python", level: 78 },
      { name: "GitHub", level: 75 },
      { name: "Tableau", level: 70 },
      { name: "Power Query", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Team Collaboration", level: 88 },
      { name: "Critical Thinking", level: 87 },
      { name: "Problem Solving", level: 92 },
      { name: "Time Management", level: 85 },
      { name: "Data Storytelling", level: 88 }
    ]
  }
];

export const STRENGTHS = [
  "Analytical Thinking",
  "Problem Solving",
  "Data Storytelling",
  "Attention to Detail",
  "Communication Skills",
  "Continuous Learning"
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Analytics Trainee",
    company: "Besant Technologies",
    location: "Bengaluru, Karnataka",
    duration: "Aug 2025 – Feb 2026",
    responsibilities: [
      "Performed ETL operations, data cleaning, and data transformation using SQL, Excel, and Power BI on datasets containing 10,000+ records.",
      "Conducted Exploratory Data Analysis (EDA) to identify trends, patterns, and anomalies, improving data quality and consistency by 20%.",
      "Developed interactive Power BI dashboards using DAX and Power Query for KPI monitoring and business reporting.",
      "Automated reporting processes with Excel and Power BI, reducing manual effort by 30%.",
      "Wrote optimized SQL queries, including joins, aggregations, and subqueries, to extract actionable business insights.",
      "Delivered data-driven reports and visualizations to support informed decision-making."
    ]
  },
  {
    id: "exp-2",
    role: "AI/ML Intern",
    company: "Academic & Project-Based Training",
    location: "Bengaluru, Karnataka",
    duration: "Jan 2025 – Jun 2025",
    responsibilities: [
      "Worked on data preprocessing, feature engineering, and exploratory data analysis for machine learning projects.",
      "Applied statistical analysis techniques to improve data quality and model performance.",
      "Processed and analyzed structured datasets to identify meaningful patterns and insights.",
      "Assisted in building predictive models and evaluating performance using real-world datasets.",
      "Gained practical experience in data analysis, machine learning workflows, and model optimization."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sales & Profit Analysis Dashboard",
    tech: ["SQL", "Excel", "Power BI"],
    duration: "Jul 2025 – Aug 2025",
    description: "Extracted, cleaned, and analyzed 50K+ retail sales records using SQL and Excel ETL workflows, performing EDA to identify revenue trends, regional profitability patterns, and product performance correlations. Developed an interactive Power BI dashboard with DAX KPIs and automated reporting for visual storytelling of business performance.",
    projectLink: "https://www.image2url.com/r2/default/documents/1781517284669-d88a5c39-4f56-46c7-8cfa-dde4e03037a3.pdf",
    accentColor: "cyan"
  },
  {
    id: "proj-2",
    title: "E-Commerce Product Performance Analysis",
    tech: ["SQL", "Excel"],
    duration: "Nov 2025 – Dec 2025",
    description: "Collected, cleaned, and analyzed 30K+ e-commerce transactions using SQL and Excel. Generated business intelligence reports with category-wise revenue and demand analysis, improving product-level decision accuracy by 25%.",
    projectImage: "https://www.image2url.com/r2/default/files/1781517655736-daf1d02a-c89f-4302-be6b-4bd5d6e54c7a.png",
    accentColor: "blue"
  },
  {
    id: "proj-3",
    title: "Netflix Data Analytics Dashboard",
    tech: ["Power BI", "DAX", "Power Query"],
    duration: "Jan 2026 – Mar 2026",
    description: "Applied data transformation and EDA on 10K+ Netflix records. Built an interactive BI dashboard with DAX measures and dynamic filters, improving visualization clarity and insight generation efficiency by 30%.",
    projectImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8edd85?w=800",
    projectLink: "https://www.image2url.com/r2/default/documents/1781533309213-25d7903f-93e0-4b98-9f02-871a35a1d3ba.pdf",
    accentColor: "purple"
  },
  {
    id: "proj-4",
    title: "Swiggy Sales Dashboard",
    tech: ["Excel"],
    description: "Built an interactive Excel dashboard to analyze sales, restaurants, cuisines, and delivery performance. Used Pivot Tables, Charts, Slicers, and KPI cards for data visualization and reporting. Performed data cleaning and trend analysis to support business decision-making.",
    accentColor: "amber"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Data Analytics",
    provider: "Besant Technologies, Bengaluru",
    details: "Comprehensive training covering Excel, SQL, Power BI, Python, and Tableau",
    credentialId: "BDZ-135071"
  },
  {
    title: "Tableau Training",
    provider: "Besant Technologies, Bengaluru",
    details: "Focused module on dashboarding, visual storytelling, and advanced calculations in Tableau",
    credentialId: "135071"
  },
  {
    title: "GenAI Powered Data Analytics",
    provider: "TATA Forage",
    details: "Utilizing Generative AI frameworks, prompt engineering, and modern tool suites to optimize analytics lifecycles",
    credentialId: "QaM32nY"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    value: "5+",
    label: "Projects Built",
    description: "End-to-end analytics projects across SQL, Power BI and Excel solving real business problems."
  },
  {
    value: "8+",
    label: "Dashboards Developed",
    description: "Tailored reports showing complex calculations, dynamic metrics, and rich filtering."
  },
  {
    value: "3",
    label: "Training Programs",
    description: "Completed structured programs in Business Intelligence, SQL query optimization, and Python."
  },
  {
    value: "6+",
    label: "Certifications",
    description: "Industry-recognized credentials in modern data analytics, BI engineering, and automated Excel workflows."
  }
];
