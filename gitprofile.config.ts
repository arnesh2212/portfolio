// gitprofile.config.ts



const CONFIG = {
  github: {
    username: 'arnesh2212', // Your GitHub org/user name. (This is the only required config)
  },
  
  base: '/portfolio/',


  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['arnesh2212/Freind-App', 'arnesh2212/MAINEXAMPLE' , 'arnesh2212/arnesh2212'], 
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        
      ],
    },
  },
 
  seo: {
    title: 'Portfolio of Arnesh Batra',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'arnesh-batra-9684a4211/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'arnesh_2212',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://arnesh2212.github.io/portfolio/',
    phone: '',
    email: 'arnesh23129@iiitd.ac.in | arneshbatra2212@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1r8KRjN-YCN2obHjCqLOl7YbAdqMXH5wF/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Deep Learning',
    'Machine Learning',
    'Torch',
    'Tensorflow',
    'HuggingFace',
    'LLM',
    'Computer Vision',
    'NLP',
    'C++',
    'C',
    'Java',
    'Jax',
    'Javascript',
  ],
  experiences: [
    {
      company: 'HMI LAB',
      position: 'Research Intern',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'https://hmi.iiitd.edu.in/',
    },
    {
      company: 'AIISC',
      position: 'Research Intern',
      from: 'Sep 2024',
      to: 'Present',
      companyLink: 'https://aiisc.ai/',
    },
  ],
  certifications: [
    {
      name: 'Neural Networks and Deep Learning',
      body: 'deeplearning.ai',
      year: 'Oct 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/9LHW9S3RPEBX',
    },

    {
      name: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
      body: 'deeplearning.ai',
      year: 'May 2021',
      link: 'https://www.coursera.org/account/accomplishments/verify/ZHTL2VPZ4NQ9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    
  ],
  educations: [
    {
      institution: 'Indraprastha Institute of Information Technology Delhi ',
      degree: "Bachelor's degree, Computer Science and Artificial Intelligence",
      from: '2023',
      to: '2027',
    },
    
  ],
  publications: [
    {
      title: 'ASGIR: Audio Spectrogram Transformer Guided Classification And Information Retrieval For Birds',
      conferenceName: 'InterSpeech 24',
      journalName: '1st Author',
      authors: '',
      link: 'https://arxiv.org/abs/2407.18927',
      description:
        'Recognition and interpretation of bird vocalizations are pivotal in ornithological research and ecological conservation efforts due to their significance in understanding avian behaviour, performing habitat assessment and judging ecological health. This paper presents an audio spectrogram-guided classification framework called ASGIR for improved bird sound recognition and information retrieval. Our work is accompanied by a simple-to-use, two-step information retrieval system that uses geographical location and bird sounds to localize and retrieve relevant bird information by scraping Wikipedia page information of recognized birds. ASGIR offers a substantial performance on a random subset of 51 classes of Xeno-Canto dataset Bird sounds from European countries with a median of 100\% performance on F1, Precision and Sensitivity metrics.',
      
    },
    {
      title: 'M-SCAN: A Multistage Framework for Lumbar Spinal Canal Stenosis Grading Using Multi-View Cross Attention',
      conferenceName: 'Preprint - ResearchGate',
      journalName: '1st Author',
      authors: '',
      link: 'https://www.researchgate.net/publication/387368137_A_Multistage_Deep_Learning_Framework_for_Lumbar_Spinal_Canal_Stenosis_Diagnosis_Using_Multi-View_Cross_Attention',
      description:
        'The increasing prevalence of lumbar spinal canal stenosis has resulted in a surge of MRI imaging, leading to labor-intensive interpretation and significant inter-reader variability, even among expert radiologists. This paper introduces a novel and efficient deep-learning framework that fully automates the grading of lumbar spinal canal stenosis. We demonstrate state-of-the-art performance in grading spinal canal stenosis on a dataset of 1,975 unique studies, each containing three distinct types of 3D cross-sectional spine images: Axial T2, Sagittal T1, and Sagittal T2/STIR. Using a distinctive training strategy, our proposed multistage approach effectively integrates Sagittal and Axial images. This strategy employs a multi-view model with a sequence-based architecture, optimizing feature extraction and cross-view alignment to achieve superior predictive accuracy in spinal canal stenosis grading.',
      
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `I am Iron Man :)`,

  enablePWA: true,
};

export default CONFIG;
