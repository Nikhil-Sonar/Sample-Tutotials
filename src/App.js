import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlenHeaderRender from './HeaderComponent/BlenHeader';
import BlenDynamicCard from './DynamicComponent/BlenDynamic';
import IDBPComp from './IDBPComponent/IDBP';
// import BlenCommunityComp from './BlenCommunityComponent/BlenCommunity';
// import BlenChildCommunityComp from './BlenCommunityChildComponent/BlenChildCommunity';
import BlenArticlesComp from './BlenArticlesComponent/Articles';
import BlenRankedComp from './BlenRankedComponent/BlenRanked';
import FormdataRender from './MindsetterFormComp/MindsetterForm';
import IbcscComp from './IbcscComponent/IbcscComp';
import IbdpComp from './IbdpComponent/IbdpComp';
import BlenFooterComp from './BlenFooterfComponent/BlenFooter';


function App() {
  return (
    <div className="App">
      <section class="Common-section">
        <BrowserRouter>
          <BlenHeaderRender />
          <Routes>
            <Route exact path='/Sample-Tutotials/' element={[ <BlenDynamicCard />, <IDBPComp />, <BlenArticlesComp />, <BlenRankedComp />, <FormdataRender />]}></Route>
            <Route exact path='/igcse' element={<IbcscComp/>}></Route>
            <Route exact path='/ibdp' element={<IbdpComp/>}></Route>
            {/* <Route exact path='/testimonial' element={[<BlenCommunityComp />, <BlenChildCommunityComp />]}></Route> */}
            <Route exact path='/contactform' element={<FormdataRender />}></Route>
          </Routes>
          <BlenFooterComp />
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
