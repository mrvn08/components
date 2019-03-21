import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam Riegel"
                authorImage={Faker.image.avatar()}
                datePosted="Feb 17,1991"
                commentText="askldjlkasjdkljlkjdflsjdfljasldlajsdl"
            />
            <CommentDetail
                author="Travis Willingham"
                authorImage={Faker.image.avatar()}
                datePosted="Today at 06:59PM"
                commentText="askdjh ajadh kajshdahk ad ak akjh akjdh"
            />
            <CommentDetail
                author="Matthew Mercer"
                authorImage={Faker.image.avatar()}
                datePosted="Yesterday at 12:00PM"
                commentText="oha sodasdkalsjdalsjdl a sdl as jalskjdlj sakd"    
            />
        </div> 
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));