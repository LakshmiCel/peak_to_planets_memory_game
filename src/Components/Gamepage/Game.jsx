import { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import {
	Grid,
	Card,
	CardMedia,
	Typography,
	Button,
	Paper,
} from '@mui/material';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import space from '../../assets/S1.jpg';
import mountain from '../../assets/M1.jpg';
import { arraym, arrays } from './Gamearray';
import ResModal from './ResModal';
import { setScores } from '../../Redux/userActions';

function Game() {
	const [timer, setTimer] = useState(120);
	const [selectedCards, setSelectedCards] = useState([]);
	const [score, setScore] = useState(0);
	const [shuffledImages, setShuffledImages] = useState([]);
	const [matchedCards, setMatchedCards] = useState([]);
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [incorrectClicks, setIncorrectClicks] = useState(0);
	const navigate = useNavigate();
	const theme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();

	const time = format(new Date(), 'dd-MM-yy');

	const user = useSelector((state) => state.user.user);
	const scoreState = useSelector((state) => state.user.score);
	const selectedArray = theme === 'mountain' ? arraym : arrays;
	useEffect(() => {
		console.log(scoreState);
		const shuffled = selectedArray.sort(() => 0.5 - Math.random());
		const selected = shuffled.slice(0, 5);
		const finalImages = [...selected, ...selected].map((image) => ({
			...image,
			matched: false,
		}));
		const finalShuffled = finalImages.sort(() => 0.5 - Math.random());

		setShuffledImages(finalShuffled);
		setStartTime(new Date());
	}, []);

	useEffect(() => {
		if (timer > 0) {
			setTimeout(() => setTimer(timer - 1), 1000);
		}
	}, [timer]);

	const handleCardClick = (id, index) => {
		if (shuffledImages[index].matched) {
			return;
		}

		setSelectedCards((prevSelectedCards) => {
			const updatedArray = [...prevSelectedCards, { id, index }];

			if (updatedArray.length === 2) {
				if (
					updatedArray[0].id === updatedArray[1].id &&
					updatedArray[0].index !== updatedArray[1].index
				) {
					setMatchedCards((prevMatchedCards) => [
						...prevMatchedCards,
						updatedArray[0].index,
						updatedArray[1].index,
					]);
					setScore(score + 1);
				} else {
					setIncorrectClicks(incorrectClicks + 1);
				}

				setTimeout(() => {
					setSelectedCards([]);

					if (score + 1 === shuffledImages.length / 2) {
						setEndTime(new Date());
						setShowResults(true);
					}
				}, 1000);
			}

			return updatedArray;
		});
	};

	const calculateTimeTaken = () => {
		if (startTime && endTime) {
			const timeDiff = endTime - startTime;
			const seconds = Math.floor(timeDiff / 1000);
			return seconds;
		}
		return 0;
	};

	const calculateScore = () => {
		const baseScore = score;
		const penaltySubtraction = 1;
		const timeTaken = calculateTimeTaken();

		const timeBonus = Math.max(0, 100 - calculateTimeTaken());

		let calculatedScore = baseScore + timeBonus;

		const penalty = penaltySubtraction * incorrectClicks;
		calculatedScore = Math.max(0, calculatedScore - penalty);
		if (timeTaken === 0) {
			return 0;
		}
		return Math.round(calculatedScore);
	};

	const handleClose = () => {
		setShowResults(false);
		dispatch(setScores(calculateScore()));
		console.log(scoreState);
		axios.post('http://localhost:5000/users', {
			name: user.name,
			high_score: calculateScore(),
			incorrect_moves: incorrectClicks,
			date: time,
		});
		console.log(scoreState);
		navigate('/game');
	};

	return (
		<div>
			<Typography variant="h4">Matched: {score}</Typography>

			<Button onClick={handleClose} style={{ margin: '10px' }}>
				Quit
			</Button>

			<Grid container spacing={3} className="main">
				{shuffledImages.map((image, index) => (
					<Grid
						item
						xs={2}
						key={index}
						id={`card-${index}`}
						style={{
							visibility: matchedCards.includes(index) ? 'hidden' : 'visible',
						}}
					>
						<Card
							className={`card ${
								selectedCards.some((card) => card.index === index) ? 'flip' : ''
							}`}
							onClick={() => handleCardClick(image.id, index)}
						>
							<div className="front">
								<CardMedia
									component="img"
									alt={image.id}
									height="240"
									image={theme === 'mountain' ? mountain : space}
								/>
							</div>
							<div className="back">
								<CardMedia
									component="img"
									alt={image.id}
									height="240"
									image={image.url}
								/>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>

			{timer === 0 ? (
				<Paper style={{ padding: 20 }}>
					<Typography variant="h5">Game Over!</Typography>
					<Typography variant="h6">Score: {calculateScore()}</Typography>
					<Typography variant="h6">
						Time taken: {calculateTimeTaken()} seconds
					</Typography>
					<Typography variant="h6">
						Incorrect Moves: {incorrectClicks}
					</Typography>
					<Button onClick={handleClose} style={{ margin: '10px' }}>
						Close
					</Button>
				</Paper>
			) : (
				''
			)}

			<Suspense fallback={<div>Loading...</div>}>
				<ResModal
					open={showResults}
					onClose={handleClose}
					calculateScore={calculateScore}
					calculateTimeTaken={calculateTimeTaken}
					incorrectClicks={incorrectClicks}
				/>
			</Suspense>
		</div>
	);
}

export default Game;
