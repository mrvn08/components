import React from 'React';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="#" className="avatar">
                <img alt="avatar" src={Faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="#" className="author">
                    Marvin Limson
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};