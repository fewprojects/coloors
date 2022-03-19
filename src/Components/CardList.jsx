import { useState } from "react";

function CardList(props) {
    
    const { cards } = props
    const copyText = (textColor, bgColor) => {
        const css = `{background:${bgColor};color:${textColor};}`
        return css;
    }
    return (
        <div className="cardlist">
            
            {
                cards.map((card) => (
                    <div className="card_wrapper" key={card.id}>
                        <div className="card flex-c-m" style={{ 'background': `${card.background}` }}>
                            <h6 className="card_text" style={{ 'color': `${card.text}` }}>{card.text}</h6>
                        </div>
                        <div className="card_button flex-c-m">
                            <div id="simpleToast">
                            🏆 <span>CSS Copied successfully...</span>
                            </div>
                            <p id={card.id} onClick={() => {
                                navigator.clipboard.writeText(copyText(card.text, card.background))
                                let x = document.getElementById("simpleToast");
                                // Add the "show" class to DIV
                                x.className = "show";
                                // After 3 seconds, remove the show class from DIV
                                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                            }}>copy</p>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
}
export default CardList;