const letters: string[] = ['Alpha', 'Beta', 'Charlie', 'Delta'];

export default function printing(alphabets: string[]) {
  alphabets.forEach((letter: string) => {
    console.log(letter);
  });
  return alphabets.join(' ');
}

printing(letters);
