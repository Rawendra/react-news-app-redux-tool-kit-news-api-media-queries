import './Articles'
function SelectedArticle({ article }) {
  console.log("selectedArticle", article);
  const { author, description, source, urlToImage, publishedAt,url, title } = article || {};
  return (
    <div className="selected-article-container">
      <h6>{author}</h6>
      <h6>{publishedAt}</h6>
      {/* <h6>{source}</h6> */}
      <p>{description? description :'No description available, please refer the link for further details'}</p>
      {urlToImage && <img className='selected-article-image' src={urlToImage} alt="image" />}
     <div >Source Link:     <a href={url}>{url}</a></div> 
    </div>
  );
}

export default SelectedArticle;
