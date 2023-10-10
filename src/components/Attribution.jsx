import PropTypes from 'prop-types';

const Attribution = ({ authorName, authorGithub }) => {
  return (
    <div className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href={authorGithub} target="_blank" rel="noreferrer">
        {authorName}
      </a>
      .
    </div>
  );
};

Attribution.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorGithub: PropTypes.string.isRequired,
};

export default Attribution;
