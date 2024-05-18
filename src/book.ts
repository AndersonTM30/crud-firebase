import { Router } from 'express';
import FirebaseConnect from './firebase';

const router: Router = Router();
const firebaseConn = FirebaseConnect;

router.get('/book', async (req, res) => {
  try {
    const _books = await firebaseConn.collection('book').get();

    const book: any[] = [];

    _books.forEach((doc) => {
      book.push({ ...doc.data(), id: doc.id });
    });

    return res.send(book);
  } catch (error) {
    res
      .json({ message: `Houve um erro ao tentar acessar a rota: ${error.message}` })
      .status(500);
  }
});

export const book = router;
