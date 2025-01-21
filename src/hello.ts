const letters: string[] = ['Alpha', 'Beta', 'Charlie', 'Delta'];

export default function printing(alphabets: string[]): void {
  alphabets.forEach((letter: string) => {
    console.log(letter);
  });
}

printing(letters);
