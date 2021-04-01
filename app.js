
const userRouter = require('./routers/users');
const cardRouter = require('./routers/cards');

const app = express();
const { PORT = 3000 } = process.env;


// connect to routers
app.use('/users', userRouter);
app.use('/cards', cardRouter);

// requested page doesn't exist
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Page not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});