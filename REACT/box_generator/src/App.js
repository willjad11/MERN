import React, { useState } from 'react';
import BoxGen from './components/box_gen'
import styles from './components/css/box_gen.module.css'

function App() {
  const [boxes, addBox] = useState(null);

  const boxMap = boxes != null
                ? Object.keys(boxes).map(function (item, i) {return <div 
                  className={styles.box} 
                  style={{backgroundColor: boxes[item]}} 
                  key={i}>Box</div>})
                : "Please submit a box color!";

  const newBox = (color) => {
    if (boxes == null) {
      addBox({["box1"]: color});
    }
    else {
      addBox(oldState => ({ ...oldState, ["box" + (Object.keys(boxes).length + 1)]: color }));
    }
  }

  return (
    <div className="App">
      <BoxGen submittedBox = {newBox}/>
      <div className={styles.boxCont}>
        {boxMap}
      </div>
    </div>
  );
}

export default App;
