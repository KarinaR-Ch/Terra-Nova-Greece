// React Components for Activities section
document.addEventListener('DOMContentLoaded', function() {
    // ActivityCard Component
    const ActivityCard = ({ frontText, title, content, image }) => {
        const [flipped, setFlipped] = React.useState(false);
        
        return (
            React.createElement('div', { className: "card-container" },
                React.createElement('div', { 
                    className: `card ${flipped ? 'flipped' : ''}`, 
                    onClick: () => setFlipped(!flipped) 
                },
                    React.createElement('div', { className: "card-face card-front" },
                        React.createElement('img', { src: image, alt: title }),
                        React.createElement('div', { className: "card_caption" }, frontText)
                    ),
                    React.createElement('div', { className: "card-face card-back" },
                        React.createElement('div', { className: "card-back-content" },
                            React.createElement('h3', null, title),
                            content
                        )
                    )
                )
            )
        );
    };

    // Activities Component
    const Activities = () => {
        const activitiesData = [
            {
                frontText: "Yoga in the olive garden",
                title: "Yoga in the olive garden",
                content: React.createElement(React.Fragment, null,
                    React.createElement("p", null, "• Morning practices with views of mountains and green fields"),
                    React.createElement("p", null, "• Gentle yoga for beginners"),
                    React.createElement("p", null, "• Pilates to strengthen muscles and improve posture"),
                    React.createElement("p", null, "• A calm atmosphere filled with the natural energy of the surrounding landscape")
                ),
                image: "https://raw.githubusercontent.com/KarinaR-Ch/Terra-Nova/main/img/yoga.png"
            },
            {
                frontText: "Olive Oil Workshop",
                title: "Olive Oil Workshop",
                content: React.createElement(React.Fragment, null,
                    React.createElement("p", null, "• Learn how to hand-pick olives the traditional way"),
                    React.createElement("p", null, "• Discover how we sort and select the fruits for pressing"),
                    React.createElement("p", null, "• Follow the entire journey from fresh olives to pure, cold-pressed olive oil"),
                    React.createElement("p", null, "• Enjoy a delicious tasting of our fresh handmade oil")
                ),
                image: "https://raw.githubusercontent.com/KarinaR-Ch/Terra-Nova/main/img/basket.png"
            },
            {
                frontText: "Contact farm zoo",
                title: "Contact farm zoo",
                content: React.createElement("p", null, 
                    "As you explore our farm, you'll meet a variety of friendly animals that are sure to delight you — from our adorable sheep and playful goats to affectionate cats and loyal dogs. You'll also meet some cute chickens. Every encounter promises a moment of joy and connection with nature! You can pet and feed our animals."
                ),
                image: "https://raw.githubusercontent.com/KarinaR-Ch/Terra-Nova/main/img/animals.png"
            }
        ];

        return React.createElement('div', { className: "cards-row" },
            activitiesData.map((activity, index) =>
                React.createElement(ActivityCard, {
                    key: index,
                    frontText: activity.frontText,
                    title: activity.title,
                    content: activity.content,
                    image: activity.image
                })
            )
        );
    };

    // Render Activities component
    const activitiesRoot = document.getElementById('activities-root');
    if (activitiesRoot) {
        ReactDOM.render(React.createElement(Activities), activitiesRoot);
    }
});