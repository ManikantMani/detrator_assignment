import React from 'react'
import "./posts.css"

const Posts = () => {

  const [apiData, setApiData] = React.useState([])

  const getApiData = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    setApiData(data.posts);
    //   console.log(data.posts[0])
  }


  React.useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    <div className="postCard__container">
      {
        apiData.map((val) => {
          return (
            <div key={val.id} className="postCard">
              <div className="postCard__top_section">
                <div className="userPorfile">
                  <h1><i className="fa-solid fa-circle-user"></i></h1>
                  <h1><i className="fa-solid fa-ellipsis-vertical"></i></h1>
                </div>
              </div>
              <div className="postCard__body_section">
                <h4>{val.title}</h4>
                <p>{val.body}</p>
                <marquee width="100%" direction="left">
                  <div className='postCard__body_tags'>Tags - {val.tags.map((val2, id) => <p key={id}>{val2}</p>)}</div>
                </marquee>
                
              </div>
              <div className="postCard__footer_section">
                <h1>Reactions - {val.reactions}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Posts;