const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Software Engineer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Lidiya Kelay',
  role: 'Flutter Mobile Application developer',
  description:
    'I am a skilled Flutter mobile app developer with experience building dynamic, user-friendly applications. I specialize in creating intuitive and responsive interfaces, ensuring smooth cross-platform performance, and delivering high-quality solutions for both Android and iOS. Passionate about clean code and design, I strive to develop apps that are not only functional but also visually appealing.',
  resume: 'https://drive.google.com/file/d/1imY6hj8w2VWQ3UhCA7rGtxzobWEqoC-f/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/lidiya-kelay/',
    github: 'https://github.com/lidiyakelay',
  },
}

const projects = [
  {
    id: 'project1', // Add unique IDs for routing
    name: 'Expense Tracker',
    description:
      'The Expense Tracker app helps you track daily expenses, manage income, and organize finances. It allows you to monitor spending, manage wallets, and view reports on your expenses daily, monthly, and yearly.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    sourceCode: 'https://github.com/NatnaelBerhanu-1/expense_tracker',
    image: 'https://res.cloudinary.com/ddduioads/image/upload/c_crop,ar_4:3/v1725523351/Expense_Tracker_cover_3_pkyk2a.png', // Example image URL
    images: [
      { id: 'img1', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525129/Untitled_design_qk1vqy.png' },
      { id: 'img2', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525464/Untitled_design_5_xqszdc.png' },
      { id: 'img3', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725526184/Untitled_design_9_numaey.png' },
      { id: 'img4', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525607/Untitled_design_7_d6a3t3.png' },
      { id: 'img5', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525425/Untitled_design_1_pvehmt.png' },
      { id: 'img6', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525441/Untitled_design_2_rl9aal.png' },
      { id:'img7', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525461/Untitled_design_4_sqypry.png'},
      { id:'img8', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725525444/Untitled_design_3_k3g1t2.png'},
      { id:'img9', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725526684/Untitled_design_10_smeskx.png'},
      { id:'img10', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725526687/Untitled_design_11_ufdwya.png'},
      { id:'img11', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725526690/Untitled_design_12_wjja2g.png'},
      { id:'img12', url:'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725526694/Untitled_design_13_jv8bjg.png'},


    ] // Additional images for detail view with unique IDs
  },
  {
    id: 'project2',
    name: 'Food Delivery',
    description:
      'A food delivery app that connects you with local restaurants, offering a wide range of cuisines. Order meals for delivery or pickup, track orders in real-time, and enjoy fast, convenient service to your doorstep.',
    stack: ['Flutter', 'Dart', 'Laravel'],
    sourceCode: 'https://github.com/lidiyakelay/Food_Delivery',
  
    image: 'https://res.cloudinary.com/ddduioads/image/upload/c_crop,w_1400,h_1050,ar_4:3,g_auto/v1725545233/1_fgoa4l.png',
    images: [
      { id: 'img1', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527522/Untitled_design_14_d6pdlk.png' },
      { id: 'img2', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527528/Untitled_design_16_glmlfm.png' },
      { id: 'img3', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527544/Untitled_design_17_cwnwmp.png' },
      { id: 'img4', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527545/Untitled_design_18_rhrunz.png' },
      { id: 'img5', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527552/Untitled_design_20_rthhi2.png' },
      { id: 'img6', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527549/Untitled_design_19_nrw9gc.png' },
      { id: 'img7', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725527524/Untitled_design_15_suyril.png' }
    ]
  },
  {
    id: 'project3',
    name: 'Tow Snitch',
    description:
      "Tow Snitch is an app that alerts users when a tow truck is nearby. Users can also update others about tow truck sightings. When 'Notify Me' is enabled, it sends alerts based on the user's set map radius for nearby trucks.",
    stack: ['Flutter', 'Dart', 'Python','Firebase'],
    sourceCode: 'https://github.com/lidiyakelay/towtruck_app',
    image: 'https://res.cloudinary.com/ddduioads/image/upload/c_crop,w_1500,h_1125,ar_4:3,g_auto/v1725607526/Expense_Tracker_cover_4_lft6oy.png',
    images: [
      { id: 'img1', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_15_22_vdeeya.png' },
      { id: 'img2', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_15_30_eca1wd.png' },
      { id: 'img3', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_15_26_iyisve.png' },
      { id: 'img4', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_21_00_cvwr1i.png' },
      { id: 'img5', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603822/Screenshot_2024-09-06_04_21_35_ym9gvf.png' },
      { id: 'img6', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603822/Screenshot_2024-09-06_04_21_38_b3asv3.png' },
      { id: 'img7', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603822/Screenshot_2024-09-06_04_21_40_wyabyo.png' },
      { id: 'img8', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_21_23_m9hhka.png' },
      { id: 'img9', url: 'https://res.cloudinary.com/ddduioads/image/upload/e_background_removal/c_crop,ar_9:16,f_png/v1725603821/Screenshot_2024-09-06_04_22_30_ngthtb.png' },
     
    ]
  }
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Flutter',
  'HTML',
  'CSS',
  'JavaScript',
  'Dart',
  'Firebase',
  'Python',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lidiyakelay@gmail.com',
}

export { header, about, projects, skills, contact }
