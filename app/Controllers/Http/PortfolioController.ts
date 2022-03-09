import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PortfoliosController {

   async index ({ view }: HttpContextContract) {
      const projects = [
         {
            type: 'project',
            card_title: 'Trains Tracker',
            target: 'https://github.com/SimonDuperray/TrainsTracker',
            card_body: 'Web scraper who fetches data from Carto Graou website and retranscribe them on a Grafana dashboard via InfluxDB (time-series database). There also is a script who automatically writes report about daily railway events on Apache server.',
         },
         {
            type: 'project',
            card_title: 'Github Dashboard',
            target: 'https://github.com/SimonDuperray/github_dashboard',
            card_body: 'Web Application developed using ExpressJS. This app provides us the possibility to observe our own Github activity only with our Github pseudo. I used ChartJS to create these graphs.',
         },
         {
            type: 'project',
            card_title: 'Agenda Discord Bot',
            target: 'https://github.com/SimonDuperray/agenda_bot',
            card_body: 'This Discord bot fetches agendas directly from my school\'s reverse-proxy. The bot is triggered when a given command is detected on my personal Discord server. For each trigger, the bot will get current datetime and will search for students actually in class or not.',
         },
         {
            type: 'project',
            card_title: 'Messenger Sentiment Analyzer',
            target: 'https://github.com/SimonDuperray/MessengerSentimentAnalyzer',
            card_body: 'This script is based on my personal Messenger conversation with someone. A Natural Language Processing (NLP) Artificial Intelligence Model is used to detect the sentiment of each message. After this processing, graphs are created to show the evolution of the sentiment.',
         },
         {
            type: 'project',
            card_title: 'ERIS Internship',
            target: 'https://github.com/SimonDuperray/ERIS_blacksmith',
            card_body: 'This project was a part of my internship in ERIS. I developed this script to answer to the following issue: Supervised learning methods for the generation of heuristics applied to model transformations.',
         },
         {
            type: 'project',
            card_title: 'Mondial Relay Scraper',
            target: 'https://github.com/SimonDuperray/ot_MondialRelayScraper',
            card_body: 'This script scrapes data from the official website of Mondial Relay and fetch every X minutes if the next delivery step is reached or not. If it is, my pc automatically tells me to withdraw my package.',
         },
         {
            type: 'project',
            card_title: 'HSK1 Trainer',
            target: 'https://github.com/SimonDuperray/HSK1_trainer',
            card_body: 'This little script provides me some little exercices to help me to learn chinese characters to prepare for the HSK exam.',
         },
         {
            type: 'project',
            card_title: 'Spotify Controller',
            target: 'https://github.com/SimonDuperray/ot_SpotifyPlayer',
            card_body: 'I made this Spotify controller using Spotify Web API and Tkinter library. It allows me to control my Spotify player with my keyboard and mouse.',
         },
         {
            type: 'project',
            card_title: 'Autonomous Car',
            target: '',
            card_body: 'This is my final Udemy AI course project. It is a car that can follow a route and drive autonomously. It uses a CNN model to detect the road and a CNN model to detect the road\'s curvature.',
         },
         {
            type: 'project',
            card_title: 'Projet Molkky',
            target: 'https://github.com/SimonDuperray/projet_molkky',
            card_body: 'Web Application managing Molkky games. This app uses MVC stack.',
         }
      ];
      const team = [
         {
            type: 'team',
            card_title: 'Jules Delétang',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/90RHN0zv/jules.jpg',
            target: 'https://www.linkedin.com/in/julesdeletang/'
         },
         {
            type: 'team',
            card_title: 'Flavie Magne',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/hPXtH4H4/flavie.jpg',
            target: 'https://www.linkedin.com/in/flavie-magne/'
         },
         {
            type: 'team',
            card_title: 'Titouan Machet',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/wTY9b5c2/titouan.jpg',
            target: 'https://www.linkedin.com/in/titouan-machet/'
         },
         {
            type: 'team',
            card_title: 'Marcelin Liehn',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/dVmPfztt/marcelin.jpg',
            target: 'https://www.linkedin.com/in/marcelin-liehn/'
         },
         {
            type: 'team',
            card_title: 'Alexandre Halopé',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/d1RyZQqc/alexandre.jpg',
            target: 'https://www.linkedin.com/in/alexandre-halope/'
         },
         {
            type: 'team',
            card_title: 'Franck Gomez',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/q7TBhsgg/franck.jpg',
            target: 'https://www.linkedin.com/in/gomezfranck/'
         },
         {
            type: 'team',
            card_title: 'Léopold Denis',
            card_body: 'Card body6',
            img: 'https://i.postimg.cc/XNmbBfz3/leopold.jpg',
            target: ''
         }
      ];
      return view.render('sections/index', {
         projects: projects,
         team: team
      })
   }
}
