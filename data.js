// EDIT THIS FILE whenever you want to change your portfolio content.
// The layout is controlled by styles.css and app.js.

const portfolioData = {
  profile: {
    name: "Mahdi Khalili",
    title: "Geoinformatics & Photogrammetry M.Sc. Student",
    location: "Stuttgart, Germany",
    email: "Mahdie.khalili.2015@gmail.com",
    phone: "+49 15757315834",
    linkedin: "https://www.linkedin.com/in/mahdi-khalili-37954631b",
    github: "",
    showProfilePhoto: true,
    profilePhoto: "assets/images/profile.jpg",
    heroSummary:
      "Master's student at HFT Stuttgart with a Civil Engineering background and practical experience in GIS, photogrammetry, geodatabases, WebGIS development and field data collection.",
    roles: [
      "Geospatial Analyst",
      "GIS & WebGIS Developer",
      "Photogrammetry Enthusiast",
      "3D Geoinformation & Digital Twin Enthusiast",
      "Civil Engineer"
    ],
    about:
      "I am a Master's student in Geoinformatics and Photogrammetry at HFT Stuttgart with a background in Civil Engineering and practical experience in GIS, photogrammetry, spatial databases, WebGIS development and field data collection. My interests include geospatial technologies, digital twins, remote sensing, surveying and data-driven spatial analysis. I enjoy combining GIS, programming and 3D geoinformation to develop practical solutions for urban, infrastructure and environmental applications."
  },

  info: [
    ["Degree", "M.Sc. Geoinformatics & Photogrammetry"],
    ["University", "HFT Stuttgart"],
    ["Background", "Civil Engineering"],
    ["Location", "Stuttgart, Germany"],
    ["English", "C1"],
    ["German", "B1"]
  ],

  skills: [
    {
      group: "GIS & Spatial Analysis",
      items: ["QGIS", "ArcGIS Pro", "ArcGIS Online", "Spatial Analysis", "Cartography", "Remote Sensing", "WebGIS"]
    },
    {
      group: "Programming",
      items: ["Python", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      group: "Spatial Databases",
      items: ["PostgreSQL", "PostGIS", "GeoJSON", "GeoPackage", "Shapefile", "Raster Data"]
    },
    {
      group: "Web & Geospatial",
      items: ["GeoServer", "CesiumJS", "Leaflet", "OGC WMS/WFS"]
    },
    {
      group: "Photogrammetry & Surveying",
      items: ["Trimble Business Center", "Orthophoto / Orthomosaic", "QField", "GNSS Basics", "Field Data Collection"]
    },
    {
      group: "3D & Digital Twins",
      items: ["CesiumJS", "BIM Integration", "IFC", "2D/3D WebGIS", "Digital Twins"]
    }
  ],

  researchInterests: [
    "WebGIS & Geospatial Applications",
    "3D City Models",
    "Digital Twins",
    "Remote Sensing",
    "Photogrammetry",
    "GeoAI",
    "Urban & Infrastructure GIS",
    "Spatial Data Management"
  ],

  education: [
    {
      title: "M.Sc. Geoinformatics & Photogrammetry",
      place: "Hochschule für Technik Stuttgart (HFT Stuttgart), Germany",
      period: "10/2025 – Expected 05/2027",
      details: "Relevant coursework: GIS Programming (Python), Photogrammetry, Geodatabases, Remote Sensing, GIS Analysis, WebGIS and Geodata Management."
    },
    {
      title: "B.Sc. Civil Engineering",
      place: "Balkh University, Afghanistan",
      period: "03/2019 – 03/2023",
      details: "Foundation in civil engineering, infrastructure, technical drawings, field work and construction coordination."
    }
  ],

  experience: [
    {
      title: "Civil Engineer",
      place: "REFA Balkh Construction Company | Afghanistan",
      period: "01/2023 – 08/2025",
      details: "Coordinated construction and infrastructure projects, organized field and infrastructure data, conducted site inspections and field validations, supported utility coordination, interpreted technical drawings and prepared project documentation."
    },
    {
      title: "Civil Engineering Intern",
      place: "RSAM Shahr Construction Company | Afghanistan",
      period: "02/2022 – 01/2023",
      details: "Supported site supervision, subcontractor coordination, quality control, project progress tracking, technical reporting and comparison of planning data with field conditions."
    },
    {
      title: "Mathematics Teacher",
      place: "ALC | Afghanistan",
      period: "07/2018 – 11/2022",
      details: "Taught mathematics, developed learning materials and assessments, and supported students in analytical thinking and problem solving."
    }
  ],

  projects: [
    {
      title: "Web-Based 3D City Model with Field Data Integration",
      category: "3D & Digital Twins",
      year: "2026",
      institution: "HFT Stuttgart",
      description:
        "Interactive WebGIS platform integrating 2D GIS data, 3D city models, BIM models and field observations. Includes QField-based surveys for 157 buildings, a PostgreSQL/PostGIS database, GeoServer WMS/WFS services, CesiumJS and Leaflet visualization, filtering, statistics and an AI-supported assistant.",
      tools: ["QGIS", "QField", "PostGIS", "GeoServer", "CesiumJS", "Leaflet", "JavaScript", "OpenAI API"],
      image: "assets/images/projects/digital-twin-cover.png",
      linkedinImage: "assets/images/projects/digital-twin-cover.png",
      live: "https://mahdiekhalili2015-prog.github.io/cesium_project/",
      github: "",
      linkedinPost: "https://lnkd.in/p/dvn2Gswk"
    },
    {
      title: "Urban Ecosystem Services Assessment of Green Spaces",
      category: "GIS",
      year: "2026",
      institution: "HFT Stuttgart",
      description:
        "GIS-based assessment of ecosystem services in urban green spaces in the Allmandring area of Stuttgart, including field data collection, spatial feature management, cartographic visualization, ArcGIS Online web maps and interactive web applications.",
      tools: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Field Maps", "Spatial Analysis", "Web Mapping"],
      image: "assets/images/projects/urban-green-cover.png",
      linkedinImage: "assets/images/projects/urban-green-cover.png",
      live: "",
      github: "",
      linkedinPost: "https://www.linkedin.com/in/mahdi-khalili-37954631b/details/projects/"
    },
    {
      title: "Photogrammetry Lab – Trimble Business Center",
      category: "Photogrammetry",
      year: "2026",
      institution: "HFT Stuttgart",
      description:
        "Photogrammetry workflow focused on orthophoto and orthomosaic production using Trimble Business Center and Application Master, including mosaicking settings, seamline optimization, tiling, histogram analysis, image overlap and quality control.",
      tools: ["Trimble Business Center", "Photogrammetry", "Orthomosaic", "Seamlines", "Quality Control"],
      image: "assets/images/projects/photogrammetry-cover.png",
      linkedinImage: "assets/images/projects/photogrammetry-cover.png",
      live: "",
      github: "",
      linkedinPost: "https://www.linkedin.com/in/mahdi-khalili-37954631b/details/projects/"
    },
    {
      title: "Master Thesis – GeoAI for Municipal Heat Planning",
      category: "GeoAI",
      year: "Ongoing",
      institution: "HFT Stuttgart",
      description:
        "Ongoing thesis work on GeoAI and municipal heat planning, with emphasis on geospatial retrieval, evidence-grounded answers and evaluation.",
      tools: ["GeoAI", "GIS", "Python", "Municipal Heat Planning"],
      image: "",
      linkedinImage: "",
      live: "",
      github: "",
      linkedinPost: ""
    }
  ],

  certifications: [
{
  title: "CLGE Young Surveyors’ Contest 2026 — Certificate of Participation",
  type: "Professional / Academic Certificate",
  year: "2026",
  description: "Participated in the CLGE Young Surveyors’ Contest 2026 in the Bachelor’s and Master’s Degree Category with the paper “From Field Survey to an AI-Enabled Digital Twin: Integrating GIS, BIM, Point Cloud Visualization and WebGIS for Smart Campus Management.”",
  pdf: "2026_08_27_Mahdi_Khalili_Certificate_Participation_CLGE_YSC_Masters-Bachelors_v1.0.pdf",
  certificatePdf: "2026_08_27_Mahdi_Khalili_Certificate_Participation_CLGE_YSC_Masters-Bachelors_v1.0.pdf",
  linkedinPost: "https://lnkd.in/p/dmYaUBkZ"
},
    {
      title: "TOEFL iBT — Total Score 100",
      type: "Language Certificate",
      year: "2024",
      description: "ETS TOEFL iBT score report with a total score of 100.",
      image: "assets/images/certificates/toefl-score.png"
    },
    {
      title: "German as a Foreign Language — A2.2",
      type: "Language Course",
      year: "2026",
      description: "Semester course completed through VESPA / HFT Stuttgart.",
      image: "assets/images/certificates/german-course.png"
    },
    {
      title: "Student Committee Liaison — Certificate of Appreciation",
      type: "Volunteering",
      year: "2023",
      description: "Recognition from Balkh University for liaison and student committee engagement.",
      image: "assets/images/certificates/student-committee.png"
    },
    {
      title: "Photogrammetry Project — Academic & Industry Collaboration",
      type: "LinkedIn Post",
      year: "2026",
      description: "Photogrammetry project experience with academic guidance and industry insights, including orthophotos, orthomosaic generation, seamline optimization and quality control.",
      image: "assets/images/articles/photogrammetry-team-post.png",
      linkedinPost: "https://www.linkedin.com/posts/mahdi-khalili-37954631b_profabrdrabrsvenabrschneider-thomasabrwidmer-activity-7423663708775546880-g0gO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEPWo0BCbm5GtHOET2DQ9d7ZixfaDnR18E"
    },
    {
      title: "Geospatial Community & Project Presentation",
      type: "LinkedIn Post",
      year: "2026",
      description: "Academic and geospatial community activity connected to project presentations, digital twins, GIS and smart urban development.",
      image: "assets/images/articles/geospatial-community-post.png",
      linkedinPost: "https://lnkd.in/p/derCNGGj"
    }
  ]
};
