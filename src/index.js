import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div style={{textAlign: 'center'}}>
                    <h4>Warning!</h4>
                    <p>Are you sure?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam Riegel"
                    authorImage={Faker.image.avatar()}
                    datePosted="Feb 17,1991"
                    commentText="askldjlkasjdkljlkjdflsjdfljasldlajsdl"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Travis Willingham"
                    authorImage={Faker.image.avatar()}
                    datePosted="Today at 06:59PM"
                    commentText="askdjh ajadh kajshdahk ad ak akjh akjdh"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Matthew Mercer"
                    authorImage={Faker.image.avatar()}
                    datePosted="Yesterday at 12:00PM"
                    commentText="oha sodasdkalsjdalsjdl a sdl as jalskjdlj sakd"    
                />
            </ApprovalCard>
        </div> 
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));