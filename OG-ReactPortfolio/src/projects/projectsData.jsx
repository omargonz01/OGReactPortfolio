import projectOne from "../assets/dgz-bannerfull.png";
import projectTwo from "../assets/poke.gif";
import projectThree from "../assets/minesweeper.png";
import projectFour from "../assets/stacker2.png";
import projectFive from "../assets/frogger.png";
import projectSix from "../assets/BiteByte.jpg";

const projects = {
    1: {
        title: "Bite-sized insights, big results! 🍔",
        image: projectSix,
        description: (
            <>
                <p>
                Developed a progressive web app powered by AI (BiteByte). Snap a quick pic, or upload an image of your food to get instant macro breakdown analysis of your meal. Next gen nutrition tracking app right here :)
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/BiteByte",
        demo: "https://bitebyte.onrender.com/",
    },
    2: {
        title: "Real-time Crypto Price Alerts 🚀",
        image: projectOne,
        description: (
            <>
                <p>
                Developed a full stack web application (Degen Zone) for real-time crypto price alerts as a tool for crypto investors to take notes, create watch lists and see potential gains with the click of a button.
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/Crypto-Price-Alert-Project",
        demo: "https://degenzone.onrender.com/",
    },
    3: {
        title: "Your team vs. their team 💢",
        image: projectTwo,
        description: (
            <>
                <p>
                Amass a formidable team of Pokémon, as you’re about to face a rigorous challenge. Engage in strategic battles against other users’ teams to determine whose squad reigns supreme.
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/Pokemon-App",
        demo: "https://pokemon-flask-akd3.onrender.com/",
    },
    4: {
        title: "Minesweeper 💣",
        image: projectThree,
        description: (
            <>
                <p>
                Re-built the early classic game of Minesweeper using HTML + CSS + JS. Try it out!
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/minesweeper-game",
        demo: "https://65a81cf2e1f83e0086bd449c--lucky-blini-6e21d9.netlify.app/",
    },
    5: {
        title: "Stacker (game) 😊",
        image: projectFour,
        description: (
            <>
                <p>
                Was able to get a working version of another timeless classic game- STACKER. Go ahead.. try it :) Built this with basics: HTML + CSS + JS
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/stacker-game",
        demo: "https://snazzy-pasca-9577a8.netlify.app/",
    },
    6: {
        title: "Ducker (Frogger Game) 🦆",
        image: projectFive,
        description: (
            <>
                <p>
                Re-created another classic game... FROGGER! - (made with JS + HTML + CSS) - Play as a little duck and make sure to stay away from cars + buses + water. Instant death 🦆☠🥚
                </p>
            </>
        ),
        github: "https://github.com/omargonz01/frogger-game",
        demo: "https://resilient-shortbread-55a293.netlify.app/",
    },
};

export default projects;