import React from 'react';
import PalCard from '../component/PalCard';
import fs from 'fs';
import path from 'path';

interface HomeProps {
  pals: Array<any>;
}

const Home: React.FC<HomeProps> = ({ pals }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Element</th>
          <th>Skill</th>
          <th>Work</th>
          <th>Possible Drops</th>
        </tr>
      </thead>
      <tbody>
        {pals.map((pal) => (
          <PalCard key={pal.id} pal={pal} />
        ))}
      </tbody>
    </table>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'json', 'pals.json');

  try {
    const data = fs.readFileSync(filePath, 'utf-8');

    // Log the content of the file for debugging purposes
    console.log('File content:', data);

    if (!data) {
      throw new Error('File content is empty or undefined.');
    }

    const palsArray = JSON.parse(data);

    if (!Array.isArray(palsArray) || palsArray.length === 0) {
      throw new Error('Invalid JSON content. Expected an array with at least one element.');
    }

    const pals = Object.values(palsArray[0].pals);

    return {
      props: {
        pals,
      },
    };
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return {
      props: {
        pals: [],
      },
    };
  }
}

export default Home;
