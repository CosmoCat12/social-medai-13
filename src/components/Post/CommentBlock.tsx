interface ICommentBlockProps {
  text: string;
}

const CommentBlock = ({ text }: ICommentBlockProps) => {
  return (
    <div className="CommentBlock">
      <div className="comment__description">
        <p className="comment__text">{text}</p>
      </div>
    </div>
  );
};

export default CommentBlock;