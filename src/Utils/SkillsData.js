import { DiJavascript1, DiPython, DiDjango, DiHeroku, DiRedis, DiGit } from "react-icons/di";
// import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCelery } from "react-icons/si";
import styled from "styled-components";

const MyJavascriptIcon = styled(DiJavascript1)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiGit = styled(DiGit)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiRedis = styled(DiRedis)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiPython = styled(DiPython)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiDjango = styled(DiDjango)`
  font-size: 40px;
  margin-left: 0.5rem;
`;
const MyDiHeroku = styled(DiHeroku)`
  font-size: 40px;
  margin-left: 0.5rem;
`;

const MySiCelery = styled(SiCelery)`
  font-size: 40px;
  margin-left: 0.5rem;
`;

let idValue = 0;
export const SkillsDb = [

  {
    id: ++idValue,
    skil: "Python",
    logo: <MyDiPython />,
    def: "Python is a high-level, interpreted, general-purpose programming language.",
  },
  {
    id: ++idValue,
    skil: "Django",
    logo: <MyDiDjango />,
    def: "A free and open-source, Python-based web framework that follows the model-template-views architectural pattern",
  },
  {
    id: ++idValue,
    skil: "Javascript",
    logo: <MyJavascriptIcon />,
    def: "A programming language that is one of the core technologies of the World Wide Web.",
  },
  {
    id: ++idValue,
    skil: "Heroku",
    logo: <MyDiHeroku />,
    def: "A cloud platform as a service supporting several programming languages",
  },
  {
    id: ++idValue,
    skil: "Celery",
    logo: <MySiCelery />,
    def: "An asynchronous task queue/job based on distributed message passing.",
  },
  {
    id: ++idValue,
    skil: "Redis",
    logo: <MyDiRedis />,
    def: "An open source(BSD licensed), in-memory data structure store, used as a database, cache, and message broker.",
  },
  {
    id: ++idValue,
    skil: "Git",
    logo: <MyDiGit />,
    def: "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },

];
