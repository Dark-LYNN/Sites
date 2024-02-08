import React from 'react';

interface PalCardProps {
  pal: any; // Adjust the type accordingly
}

const PalCard: React.FC<PalCardProps> = ({ pal }) => {
  return (
    <div className="pokemon-card">
      <table>
        <tbody>
          <tr>
            <td>Number:</td>
            <td>{pal.Number}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{pal.Name}</td>
          </tr>
          <tr>
            <td>Element:</td>
            <td>{pal.Element.join(', ')}</td>
          </tr>
          <tr>
            <td>Skill:</td>
            <td>{pal.Skill}</td>
          </tr>
          <tr>
            <td>Work:</td>
            <td>{pal.work.join(', ')}</td>
          </tr>
          <tr>
            <td>Possible Drops:</td>
            <td>{pal.Drops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PalCard;
