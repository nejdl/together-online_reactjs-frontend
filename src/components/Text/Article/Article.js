import { useState } from 'react';
import Title from '../Title/Title';
import OpenButton from '../../Button/OpenButton/OpenButton';
import '../../../styles/Text/Article/Article.css';

const Article = ({ title, subtitle, children }) => {
  const [articleOpen, setArticleOpen] = useState(false);
  const toggleArticle = () => {
    setArticleOpen(!articleOpen);
  };

  return (
    <div className='article'>
      <div className='article__title'>
        <Title title={title} subtitle={subtitle} handleClick={toggleArticle} />
        <OpenButton open={articleOpen} handleClick={toggleArticle} />
      </div>
      {articleOpen && <>{children}</>}
    </div>
  );
};

export default Article;
