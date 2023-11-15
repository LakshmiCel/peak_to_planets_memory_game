import { useState, useEffect } from 'react';
import {
	Grid,
	Card,
	CardMedia,
	Typography,
	Button,
	Modal,
	Paper,
} from '@mui/material';
import { format } from 'date-fns';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { scores } from '../Homepage/Home';
import { user } from '../Loginpage/LoginFinal';
import mountain from '../../assets/M1.jpg';
import { arraym, arrays } from './Gamearray';

function Game({ common }) {
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
	const array = common === mountain ? arraym : arrays;
	const currentDate = new Date();
	const time = format(currentDate, 'dd-MM-yy');

	const handleClose = () => {
		setShowResults(false);
		// Add logic to reset the game if needed
		// for now this will only show the results of the results
		// e.g., setScore(0);
		// setIncorrectClicks(0);
		// setShuffledImages([]);
		// setStartTime(null);
		// setEndTime(null);
	};

	useEffect(() => {
		console.log(array);
		const shuffled = array.sort(() => 0.5 - Math.random());
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
		console.log(timer);
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

					// Check if the game is over
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

		// Simple time bonus: Add 1 point for every second saved (up to a maximum of 100 seconds)
		const timeBonus = Math.max(0, 100 - calculateTimeTaken());

		let calculatedScore = baseScore + timeBonus;

		// Apply penalties for incorrect clicks.
		const penalty = penaltySubtraction * incorrectClicks;
		calculatedScore = Math.max(0, calculatedScore - penalty);
		if (timeTaken === 0) {
			return 0;
		}
		return Math.round(calculatedScore);
	};

	return (
		<div>
			<Typography variant="h4">Matched: {score}</Typography>
			<Button
				onClick={() => {
					scores.push({
						username: user[user.length - 1].name,
						highScore: calculateScore(),
						date: time,
					});
					console.log(scores);
					navigate('/gamel');
				}}
				style={{ margin: '10px' }}
			>
				Restart
			</Button>
			<Button
				onClick={() => {
					scores.push({
						username: user[user.length - 1].name,
						highScore: calculateScore(),
						date: time,
					});
					console.log(scores);
					navigate('/game');
				}}
				style={{ margin: '10px' }}
			>
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
									image={common}
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

			<Modal open={showResults} onClose={handleClose}>
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
			</Modal>
		</div>
	);
}

export default Game;
