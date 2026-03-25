export type Project = {
  slug: string
  image: string
  alt: string
  title: string
  description: string
  content: string
  githubLink?: string
  websiteLink?: string
}

export const item: Project[] = [{
  slug: 'weather-app',
  image: '/WeatherAppBilde.png',
  alt: 'Project preview',
  title: 'Weather App',
  description: 'A fun weather app that fetches and displays weather data.',
  content: 'This is a fun weather app that fetches data from a weather API and displays it in a user-friendly way. It allows users to search for weather information by city name and provides details such as temperature, humidity, and weather conditions. The app is built using React and styled with CSS for a clean and responsive design. I am proud of this project because it demonstrates my ability to work with APIs and create a functional user interface.',
  githubLink: 'https://github.com/CelesteEvertsen/weatherApp'
},
{
  slug: 'eMission-eksamen',
  image: '/Emission-eksamen.png',
  alt: 'Project preview',
  title: 'Emission Exam',
  description: 'Exam in React and Next.js',
  content: 'This was our first exam after being introduced to React and Next.js. We had to demonstrate how to use dynamic routing with Next.js and create a functional website focused on the Climate Crisis. The content on the site is not 100% factual, but it was fun to create an illustration with the knowledge I had acquired.',
  githubLink:'https://github.com/CelesteEvertsen/Emission-eksamen-rammeverk'
},
{
  slug: 'wizard-of-web',
  image: '/wizardoftheweb.png',
  alt: 'Project preview',
  title: 'Wizard of Web',
  description: 'A group project focused on design and functionality.',
  content: 'This is a group project I completed with three others; the repository is located in the profile of one of my classmates. It was incredibly fun to work with this group. We divided the tasks into three parts where I worked on the menu and design of the website homepage. The others worked on design and functionality for the other parts of the site. Here we got to try Next.js together with React.',
 githubLink:'https://github.com/marie-cha9ne/Wizards-of-the-web-Group'

},
{
  slug: 'nutrition-app',
  image: '/nutrition-app.png',
  alt: 'Project preview',
  title: 'Nutrition App',
  description: 'Small project focused on API calls',
  content: 'This is a project where I wanted to practice API calls with React and Next.js. I used a weather API that fetches the information and experimented a bit with CSS styling.',
githubLink:'https://github.com/CelesteEvertsen/Nutrition-App'

},
{
  slug: 'Assembly-website',
  image: '/assembly2_.png',
  alt: 'Project preview',
  title: 'Assembly',
  description: 'My first introduction to React and useState',
  content: 'This is one of my first projects that introduced me to React. I learned how to use useState and how HTML is used in React versus JavaScript. I have to say that you save a lot of time by not having to write document.getElementById etc. I deployed this project on Netlify, so it is possible for you as a reader to try it out. If you are interested in seeing the code, I have also added a GitHub link.',
githubLink:'https://github.com/CelesteEvertsen/Assembly-2',
websiteLink: 'https://assembly2.netlify.app/'
},
]