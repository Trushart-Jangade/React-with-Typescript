import * as React from 'react';
import './App.css';

export interface Props {
  name: string;
  enthuiasmLevel?: number;
}
// export default function Hello({ name, enthuiasmLevel = 1}: Props) {
//   if (enthuiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }
//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthuiasmLevel)}
//       </div>
//     </div>
//   );
// }

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, object> {
  render() {
    const { name , enthuiasmLevel = 1 } = this.props;
    if (enthuiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
          <div className="hello">
            <div className="greeting">
              Hello {name + getExclamationMarks(enthuiasmLevel)}
            </div>
          </div>
    );
  }
}
export default Hello;