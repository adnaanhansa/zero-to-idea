
let idea1 = {
  name : 'MENTAL HEALTH APP',
  source : ' y combinator'
}



const ideasList = [

    {
    id :  '`1',
    title :'Build Software for AI Agents, Not Just Humans', 
    description : 'As AI agents increasingly browse the web, retrieve information, and operate software on behalf of users, products will need to be optimized for machine understanding rather than just human interaction. This creates opportunities to build tools, infrastructure, websites, and software designed specifically for AI agents to understand, navigate, interpret and act on.',
    problem : "Most websites and software today are designed around humans such as : visual interfaces, buttons and menus, SEO, dashboards, carefully designed user flows. AI agents don't necessarily need those things. They need structured, accessible, machine-readable information and actions. The opportunity lies in re-inventing existing software into an agent-first interface.",
    category : 'AI |  Developer Tools  | Infrastructure',
    source : 'Andreessen Horowitz (a16z)',
    date : '2026',
    link : 'https://a16z.com/newsletter/big-ideas-2026-part-1/#:~:text=Creating%20for%20agents%2C%20not%20humans,-Stephenie%20Zhang',
    },

    {
      id : '2',
      title : 'AI-Native Hedge Funds',
      description : 'Build hedge funds designed around an AI framework from the ground up, using autonomous agents to research markets, analyze financial documents, generate investment ideas, and potentially execute trading strategies.',
      problem : 'Traditional hedge funds were built around human analysts, traders, and legacy systems, making it difficult for them to fully adopt AI. Simply adding AI tools to existing workflows may not take advantage of what autonomous and powerful agents can now do.',
      category : 'AI | Fintech ',
      source : 'Y Combinator',
      date : '2026',
      link : 'https://www.ycombinator.com/rfs?utm_source=chatgpt.com#ai-native-hedge-funds:~:text=AI%2DNative%20Hedge%20Funds',
    },

    {
      id : '3',
      title : 'LLM Training Infrastructure',
      description : 'Build better infrastructure and developer tools that make training and specializing large language models much easier, from managing compute and development environments to handling massive datasets.',
      problem : 'Training LLMs still involves unreliable GPU infrastructure, broken or complicated tooling, difficult development environments, and large amounts of time to develop, process, manage, and visualize training data.',
      category : 'AI | Developer  Tools |  Infrastructure',
      source : 'Y Combinator',
      date : '2026',
      link : 'https://www.ycombinator.com/rfs#make-llms-easy-to-train',
    },

    {
      id : '4',
      title : 'The Adaptive University',
      description : 'Build a university platform designed around AI from the ground up, where learning paths, courses, advising, assessment, research, and administration continuously adapt using intelligent systems.',
      problem : 'Most universities are only adding AI onto traditional education systems. Courses, assessment, advising, and administration are still largely static and were not designed for personalized, real-time, AI-assisted learning.',
      category : 'AI |  Education  | EdTech',
      source : 'Andreessen Horowitz (a16z)',
      date : '2026',
      link : 'https://a16z.com/newsletter/big-ideas-2026-part-1/#:~:text=The%20first%20AI%2Dnative%20university,-Emily%20Bennett',
    },

    {
      id : '5',
      title : 'New AI App Ecosystem',
      description : 'AI platforms like ChatGPT are starting to become distribution channels of their own, giving developers the chance to build apps and mini-apps that can reach large audiences directly inside AI products.',
      problem : 'Consumer startups usually depend on existing platforms, social networks, or word of mouth to get users. AI products have already created new technology and new user behavior, but until recently there was no strong native way for developers to distribute AI-powered consumer apps.',
      category : 'AI  | Consumer Apps |  Platforms',
      source : 'Andreessen Horowitz (a16z)',
      date : '2026',
      link : 'https://a16z.com/newsletter/big-ideas-2026-part-2/#:~:text=ChatGPT%20becomes%20the%20AI%20app%20store,-Anish%20Acharya', 
    },

    {
      id : '6',
      title : 'Shared AI Workspaces',
      description : 'Build collaborative AI tools where entire teams can work with the same agents in real time, watching their progress, giving instructions, handing off tasks, and working together inside a shared AI session.',
      problem : 'Most AI tools are still designed for one person at a time. Team members often work with agents in separate private chats, making it difficult to collaborate, share context, supervise long-running tasks, or take over someone else’s work.',
      category : 'AI | Collaboration  | Future of Work',
      source : 'Y Combinator',
      date : '2026',
      link : 'https://www.ycombinator.com/rfs#multiplayer-ai',
    },

    {
      id : '7',
      title : 'AI Tools for Aging and Elder Care',
      description : 'Build AI-powered products that help older adults live more safely and independently while making it easier for families and caregivers to provide and coordinate care.',
      problem : 'The aging population is growing faster than the available caregiving workforce, leaving families to take on more responsibility themselves. At the same time, much of today’s technology isn’t designed around the accessibility, safety, and everyday needs of older adults.',
      category : 'AI  | AgeTech  |  Healthcare',
      source : 'Y Combinator',
      date : '2026',
      link : 'https://www.ycombinator.com/rfs#ai-for-the-aging-population',
    },

]

 
 

function generateTheIdea(){

const randomNumber = Math.floor (Math.random() * ideasList.length)

const ideaGenerated = ideasList[randomNumber];


document.querySelector('.idea-here').innerHTML = ideaGenerated.title;

document.querySelector('.idea-description').innerHTML = ideaGenerated.description;

document.querySelector('.idea-problem').innerHTML = ideaGenerated.problem;

document.querySelector('.idea-category').innerHTML = ideaGenerated.category;

document.querySelector('.idea-source').innerHTML = ideaGenerated.source;

document.querySelector('.idea-date').innerHTML = ideaGenerated.date;

const linkElement = document.querySelector('.idea-link')

linkElement.href = ideaGenerated.link 

document.querySelector('.idea-card').style.display = 'block';

}



