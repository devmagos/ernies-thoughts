import React from 'react';
import Blogpost from './Blogpost';
import Layout from './Layout';
const axios = require('axios');

class Blog extends React.Component {
        state = {
            publicationTitle: '',
            body: '',
            authorName: '',
            blogpost: [],
            date: new Date()
        }
  

    componentDidMount() {
       axios.get('https://ernies-thoughts-b.herokuapp.com')        
         .then(res => this.setState({blogpost: res.data.posts}))
         .catch(error => {
            console.log(error)
        })
    }

    componentWillUnmount = () => {
        try {       
                 this.setState({
                     blogpost: []
                 })
                } catch (error) {
                    console.log(error);
                }
            
    }


   render() {
       return (
           <>
           <Layout />
           <div className="blog">
               <h1>Welcome To My Blog</h1>
            {this.state.blogpost.map((i) => <Blogpost key={i._id}  authorName={i.authorName} publicationTitle={i.publicationTitle} body={i.body}></Blogpost>)}
           </div>
            </>
       )
   }
}


export default Blog