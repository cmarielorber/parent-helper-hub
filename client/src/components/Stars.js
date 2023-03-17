export default function Stars({rankStars}) {
    return (
        <div>
        { rankStars === 1 ? (
            <div>⭐️</div>
        ) : rankStars === 2 ? (
            <div>⭐️ ⭐️</div>
        ) : rankStars === 3 ? (
            <div>⭐️ ⭐️ ⭐️</div>
        ) : rankStars === 4 ? (
            <div>⭐️ ⭐️ ⭐️ ⭐️</div>
        ) : (
            <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
        )}
        </div>
    );
}