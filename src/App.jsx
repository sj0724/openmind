import { Route, Routes } from 'react-router-dom';
import QuestionList from './pages/QuestionList/QuestionList';
import AnswerList from './pages/AnswerList/AnswerList';
import './styles/common.css';
import Main from './pages/Main/Main';
import List from './pages/List';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route element={<Layout />}>
        <Route path="/list" element={<List />} />
        <Route path="/post/:id/answer" element={<AnswerList />} />
        <Route path="/question/:id" element={<QuestionList />} />
      </Route>
    </Routes>
  );
}

export default App;
