import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import { Envelope, Lock } from 'phosphor-react';
import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
import { SignIn } from './pages/SignIn';

// Bibliotecas interessantes Windstitch e Stitches não usadas no projeto atual
export function App() {
  return (
    <SignIn />
  );
}
