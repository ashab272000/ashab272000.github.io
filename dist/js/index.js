
//Portfolio Card gets the title and description for a card
//displays a portfolio card with html
//uses insertAdjacentHtml
class PortfolioCard {

    constructor(title, desc, imgSrc,)
    {
        this.imgSrc = imgSrc;
        this.title = title;
        this.desc = desc;
        this.element = `
        <div class="portfolio-item">
            <div class="item-img">
                <img src="${this.imgSrc}" alt="" >
            </div>
            <div class="vr"></div>
            <div class="item-des">
                <h2 class="item-title">${this.title}</h3>
                <p>
                   ${desc}
                </p>
            </div>
        </div>
        `;
    }

    get(){
        return this.element;
    }

    display(parent){
        parent.insertAdjacentHTML("beforeend", this.element);
    }

    displayInPortfolio(){
        this.display(document.querySelector("#portfolio"));
    }
}

const main = () => {

    const portfolioCards = [
        new PortfolioCard(
            "Website for Asia Exhibition \(asiaexhibitionbm.com\) (Under development)",
            `
            A website for a small company called "Asia Exhibition". Though under development, I have completed the main selling point of the website.
            It is picture editor where a user can upload their image of a room and change the color of the walls. They can select color from a wide range of colors.
            <br>
            <br>
            The hardest part in this project would be, getting the color right 
            based on the lighting of the wall. I had to experiment with a bunch of 
            different self-created formula to get the right color based on the lighting.
            <br>
            <br>
            Then comes the edge detection. The edge detection \(Wall detection
            in this case\) may sound scary, but I was able to implement it with the 
            concept of depth-first search algorithm.
            <br>
            <br>
            Following is the github link for the website: https://github.com/ashab272000/asiaWebsite
            `,
            "img/asiawebsite.png",
        ),
        new PortfolioCard(
            "TDSG \(Under Development\)",
            `
            This is a top down shooter web game. The main aim of this project is to learn software architecture ,
            project management and networking. 
            <br>
            To create the game, we need to make a game engine module. We are also planning
            to publish the module when completed. This game is borrowing code from my unfinished university project.
            <br>
            Following is the github link for the TDSG : https://github.com/ashab272000/TDSG
            `,
            "img/tdsg.jpg",
        ),
        new PortfolioCard(
            "Routindo \(Under Development\)",
            `
            An app that can create routines and list of tasks. It may seem like any other normal todo app.
            But it is not. The app will implement machine learning, that can give a user "best" routine after
            observing how a user uses the phone. The app will read the usage of other applications to gather 
            this
            `,
            "img/Routindo.png",
        ),
        new PortfolioCard(
            "Recreating a terrible website",
            `This is my university project where I 
            had to recreate a website(www.irishwrecksonline.com) is the which
            does not have a good design. I still didn't upload the file in github.
            But the link will be here soon.`,
            "img/website.jpg",
        )
    ]

    portfolioCards.forEach(e => {
        e.displayInPortfolio();
    });
}

main();

