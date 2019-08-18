import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Pagination from 'material-ui-flat-pagination';
import { useSearchActions } from 'redux/search/search.actions';

export default function Results() {
  const { isSearching, data, text, page, totalPages } = useSelector(
    ({ searchReducer: { isSearching, data, text, page, totalPages } }) => ({
      isSearching,
      data,
      text,
      page,
      totalPages,
    }),
  );
  const { getResults } = useSearchActions();

  return isSearching ? (
    <h1> Searching... Please, wait for a sec</h1>
  ) : data.length > 0 ? (
    <div>
      {data.map((element, key) => {
        return <ResultElement source={element} key={key} />;
      })}
      <Pagination
        limit={10}
        offset={page}
        total={totalPages}
        onClick={(e, offset) => getResults(text, offset)}
      />
    </div>
  ) : (
    <h1> {`There's no profiles with "${text}" :c`}</h1>
  );
}

const ResultElement = ({ source }) => {
  const classes = useStyles();
  const text = useSelector(({ searchReducer: { text } }) => text);
  const user = source.user;
  const paragraphArray = source.summary.split('\n');
  console.log(paragraphArray);
  let summary = [];
  for (let i = 0; i < paragraphArray.length; i++) {
    const actual = paragraphArray[i].toLowerCase();
    if (actual.includes(text.toLowerCase())) {
      summary = actual.split(text.toLowerCase());
    }
  }
  console.log(summary, text);
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <CardMedia
            className={classes.cover}
            image={user.picture_small || require('../../assets/profile.png')}
            title={user.name}
          />
          <Typography component="h5" variant="h5">
            <a href={`https://voice123.com/${user.username}`}>{user.name}</a>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {summary.length > 0 ? (
              <p>
                {summary[0]}
                <mark>{text}</mark>
                {summary[1]}
              </p>
            ) : (
              <Fragment />
            )}
          </Typography>
        </CardContent>
        <Card>
          <p>{source.relevant_sample.name}</p>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </Card>
      </div>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  card: {
    display: 'inline-flex',
    margin: '3vh 5vh',
    width: '45%',
    height: '90vh',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: '26vh',
    margin: 'auto',
    borderRadius: '100px',
  },
  controls: {
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
