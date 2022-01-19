import { useState } from 'react';
import styles from './css/TabFunction.module.css'
const TabFunction = (props) => {

    const [tab] = useState(props)
    const changeTab = (e, tabLabel) => {
        for (let i = 0; i < tab['array'].length; i++) {
            document.getElementById("tab" + (i + 1)).style.display = "none";
        }
        document.getElementById(tabLabel).style.display = "";
    }

    return (
        <div>
            <div className = {styles.tab}>
                <button class="tabhead" onClick={(e) => changeTab(e, "tab1")}>Tab 1</button>
                <button class="tabhead" onClick={(e) => changeTab(e, "tab2")}>Tab 2</button>
                <button class="tabhead" onClick={(e) => changeTab(e, "tab3")}>Tab 3</button>
            </div>
            <div id="tab1" className = {styles.innertab}>
                <h3>Tab 1</h3>
                <p>{tab['array'][0]}</p>
            </div>
            <div id="tab2" className = {styles.innertab}>
                <h3>Tab 2</h3>
                <p>{tab['array'][1]}</p>
            </div>
            <div id="tab3" className = {styles.innertab}>
                <h3>Tab 3</h3>
                <p>{tab['array'][2]}</p>
            </div>
        </div>
    );
};

export default TabFunction;