import "./reviewCard.css"

export default function ReviewCard(prop) {
    let review = prop.reviews
    let name = review.reviewerName
    let rating = review.rating
    let comment = review.comment
    let date = review.date.split("T")[0]
    let email = review.reviewerEmail
    let maximumRating = 5
    let keyForMap = prop.Key

    const indexRating = []
    for (let index = 1; index < maximumRating + 1; index++) {
        if (index <= rating) {
            indexRating.push(true)
        } else {
            indexRating.push(false)
        }
    }
    const Star = indexRating.map((prop, index) => {
        if (prop) {
            return <div className="material-symbols-outlined rating__icon--active" key={index}>star</div>
        } else {
            return <div className="material-symbols-outlined rating__icon--disable" key={index}>star</div>
        }
    })

    return (
        <div className="review-card" key={keyForMap}>
            <div className="review-card__name" key={keyForMap}>{name}</div>
            <div className="review-card__email" key={keyForMap}>{"<" + email + ">"}</div>
            <div className="review-card__ratting" key={keyForMap}>
                {Star}
            </div>
            <div className="review-card__comment" key={keyForMap}>{comment}</div>
            <div className="review-card__date" key={keyForMap}>{date}</div>
        </div>
    )
}