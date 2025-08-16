import commentsData from './../data/commentsData'
import comment from './../assets/icons/comment.svg'
import like from './../assets/icons/like.svg'
import './../css/comments.css'

const Comments = () => {
    return (
        <div className='commentsContainer'>
            <h4>
                <span>نظرات</span>
                <img className='commentsIcon' src={comment} alt="comment" />
            </h4>
            <ul>
                {commentsData.map(comment => (
                    <li className='cardComment' key={comment.id}>
                        <div className='headerComment'>
                            <img className='imageUser' src={comment.image} alt={comment.name} />
                            <div>
                                <h5>{comment.name}</h5>
                                <span>{comment.userName}@</span>
                            </div>
                        </div>
                        <p className='messageComment'>{comment.message}</p>
                        <div className='footerComment'>
                            <span>{comment.time}</span>
                            <div>
                                <img className='likeIcon' src={like} alt="like" />
                                <img className='likeIcon' src={like} alt="dislike" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <button className='seeAll'>دیدن همه</button>
        </div>
    )
}

export default Comments